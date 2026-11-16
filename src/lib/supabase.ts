import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://flagdoodjslyxzwhbebb.supabase.co";

const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_xEUK_8DqB0xMGvF_Ttx-Fg_Knx1dANz";

export const supabase = createClient(supabaseUrl, supabaseKey);

export type InquiryStatus = "new" | "in_progress" | "contacted" | "archived";

export interface InquiryRecord {
  id: string;
  name: string;
  school: string;
  email: string;
  country: string;
  role: string;
  message: string;
  language: string;
  status: InquiryStatus;
  admin_notes: string;
  created_at: string;
  updated_at: string;
}
