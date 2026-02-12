import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vnfilbqxguijufhptrjq.supabase.co';
const supabaseAnonKey = 'sb_publishable_NIma8LxF9IB_Ry14z7J7yA_kYbOwlvL';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
