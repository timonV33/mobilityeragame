-- ============================================================================
-- MOBILITY ERA GAME — SUPABASE DATABASE SCHEMA & ADMIN SETUP
-- Вставьте этот скрипт целиком в Supabase Dashboard -> SQL Editor -> Run
-- ============================================================================

-- 1. Расширения
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Таблица заявок с формы сайта (Request a Quote / Pilot School Inquiry)
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  school TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  role TEXT DEFAULT '',
  message TEXT DEFAULT '',
  language TEXT DEFAULT 'en',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'contacted', 'archived')),
  admin_notes TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Индексы для быстрой фильтрации и сортировки в админ-панели
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON public.inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON public.inquiries (status);

-- Триггер автоматического обновления поля updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_inquiries_updated_at ON public.inquiries;
CREATE TRIGGER trg_inquiries_updated_at
BEFORE UPDATE ON public.inquiries
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- 3. Настройка Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Разрешаем любым посетителям сайта (anon и authenticated) отправлять форму
DROP POLICY IF EXISTS "Allow public insert on inquiries" ON public.inquiries;
CREATE POLICY "Allow public insert on inquiries"
  ON public.inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Разрешаем авторизованному администратору читать все заявки
DROP POLICY IF EXISTS "Allow authenticated select on inquiries" ON public.inquiries;
CREATE POLICY "Allow authenticated select on inquiries"
  ON public.inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Разрешаем авторизованному администратору обновлять статус и заметки
DROP POLICY IF EXISTS "Allow authenticated update on inquiries" ON public.inquiries;
CREATE POLICY "Allow authenticated update on inquiries"
  ON public.inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Разрешаем авторизованному администратору удалять заявки
DROP POLICY IF EXISTS "Allow authenticated delete on inquiries" ON public.inquiries;
CREATE POLICY "Allow authenticated delete on inquiries"
  ON public.inquiries
  FOR DELETE
  TO authenticated
  USING (true);

-- Явно выдаём права ролям Supabase API
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.inquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON public.inquiries TO authenticated;

-- 4. Включаем Realtime для таблицы заявок (чтобы новые заявки появлялись без перезагрузки)
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

-- 5. Создание готового Админ-аккаунта в Supabase Auth
-- Логин:    admin@mobilityeragame.com
-- Пароль:   MobilityAdmin2026!
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
    -- Если уже существует — обновляем пароль на MobilityAdmin2026! и подтверждаем email
    UPDATE auth.users
    SET
      encrypted_password = crypt('MobilityAdmin2026!', gen_salt('bf')),
      email_confirmed_at = COALESCE(email_confirmed_at, now()),
      updated_at = now()
    WHERE id = v_user_id;
  END IF;
END $$;
