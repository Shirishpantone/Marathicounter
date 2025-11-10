import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type User = {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
  };
};

export type UserProfile = {
  id: string;
  full_name: string;
  mobile?: string;
  country_code?: string;
  preferred_language: 'english' | 'marathi';
  occupation?: string;
  city?: string;
  state?: string;
  avatar_url?: string;
  total_words_checked: number;
  total_corrections_made: number;
  accuracy_percentage: number;
  current_streak: number;
  last_activity_date?: string;
  created_at: string;
  updated_at: string;
};
