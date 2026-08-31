// Configuración de credenciales de Supabase
const SUPABASE_URL = 'https://gwfujkcfpugzgqqrsivg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3ZnVqa2NmcHVnemdxcXJzaXZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxMTQ1ODUsImV4cCI6MjEwMzY5MDU4NX0.Dy28mWiMGTRWZwK6l33Ch3jeq5ZaLqJr86p6sfZlHhc'; // Mantén tu clave completa aquí

// Inicialización del cliente (Usamos _supabase o supabaseClient para evitar colisión)
window._supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('✅ Supabase conectado exitosamente.');
