import { createClient } from '@supabase/supabase-js'

// Leemos las credenciales ocultas del archivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Exportamos la conexión para usarla en el resto del proyecto
export const supabase = createClient(supabaseUrl, supabaseAnonKey)