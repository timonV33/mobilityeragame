-- ============================================================================
-- MOBILITY ERA GAME — PRODUCTION SUPABASE SCHEMA, HARDENED RLS & ADMIN SETUP
-- Paste and run in Supabase Dashboard -> SQL Editor
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Inquiries Table with Strict Field Length & Validation Constraints
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(trim(name)) BETWEEN 1 AND 200),
  school TEXT NOT NULL CHECK (char_length(trim(school)) BETWEEN 1 AND 250),
  email TEXT NOT NULL CHECK (
    char_length(trim(email)) BETWEEN 3 AND 254
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  ),
  country TEXT NOT NULL CHECK (char_length(trim(country)) BETWEEN 1 AND 120),
  role TEXT DEFAULT '' CHECK (char_length(COALESCE(role, '')) <= 200),
  message TEXT DEFAULT '' CHECK (char_length(COALESCE(message, '')) <= 5000),
  language TEXT DEFAULT 'en' CHECK (language IN ('en', 'fr', 'de', 'it', 'ro', 'es')),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'contacted', 'archived')),
  admin_notes TEXT DEFAULT '' CHECK (char_length(COALESCE(admin_notes, '')) <= 5000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_inquiries_updated_at ON public.inquiries;
CREATE TRIGGER trg_inquiries_updated_at
BEFORE UPDATE ON public.inquiries
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- 2. Helper function to verify Admin role / email from JWT
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SET search_path = public
AS $$
  SELECT COALESCE(
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'admin'
    OR lower(auth.jwt() ->> 'email') = 'admin@mobilityeragame.com',
    false
  );
$$;

-- 3. Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Public visitors can ONLY insert new inquiries without spoofing status or admin_notes
DROP POLICY IF EXISTS "Allow public insert on inquiries" ON public.inquiries;
CREATE POLICY "Allow public insert on inquiries"
  ON public.inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    status = 'new'
    AND COALESCE(admin_notes, '') = ''
  );

-- Only verified Admin can read inquiries
DROP POLICY IF EXISTS "Allow authenticated select on inquiries" ON public.inquiries;
CREATE POLICY "Allow authenticated select on inquiries"
  ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

-- Only verified Admin can update inquiries
DROP POLICY IF EXISTS "Allow authenticated update on inquiries" ON public.inquiries;
CREATE POLICY "Allow authenticated update on inquiries"
  ON public.inquiries
  FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Only verified Admin can delete inquiries
DROP POLICY IF EXISTS "Allow authenticated delete on inquiries" ON public.inquiries;
CREATE POLICY "Allow authenticated delete on inquiries"
  ON public.inquiries
  FOR DELETE
  TO authenticated
  USING (public.is_admin());

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.inquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.inquiries TO authenticated;

-- 4. Enable Realtime
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'inquiries'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.inquiries;
  END IF;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;

-- 5. Provision Initial Admin Account in Supabase Auth
-- Email:    admin@mobilityeragame.com
-- Password: MobilityAdmin2026! (can be changed anytime in Supabase Dashboard -> Authentication)
DO $$
DECLARE
  v_user_id UUID;
BEGIN
  SELECT id INTO v_user_id
  FROM auth.users
  WHERE email = 'admin@mobilityeragame.com'
  LIMIT 1;

  IF v_user_id IS NULL THEN
    v_user_id := gen_random_uuid();

    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      confirmation_token,
      email_change,
      email_change_token_new,
      recovery_token
    ) VALUES (
      '00000000-0000-0000-0000-000000000000',
      v_user_id,
      'authenticated',
      'authenticated',
      'admin@mobilityeragame.com',
      crypt('MobilityAdmin2026!', gen_salt('bf')),
      now(),
      '{"provider":"email","providers":["email"],"role":"admin"}',
      '{"name":"Mobility Era Admin"}',
      now(),
      now(),
      '',
      '',
      '',
      ''
    );

    INSERT INTO auth.identities (
      id,
      user_id,
      provider_id,
      identity_data,
      provider,
      last_sign_in_at,
      created_at,
      updated_at
    ) VALUES (
      gen_random_uuid(),
      v_user_id,
      v_user_id::text,
      format('{"sub":"%s","email":"%s","email_verified":true}', v_user_id::text, 'admin@mobilityeragame.com')::jsonb,
      'email',
      now(),
      now(),
      now()
    );
  ELSE
    UPDATE auth.users
    SET
      raw_app_meta_data = '{"provider":"email","providers":["email"],"role":"admin"}'::jsonb,
      email_confirmed_at = COALESCE(email_confirmed_at, now()),
      updated_at = now()
    WHERE id = v_user_id;
  END IF;
END $$;
