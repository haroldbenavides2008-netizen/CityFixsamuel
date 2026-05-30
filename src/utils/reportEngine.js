// src/utils/reportEngine.js

// TODO: Reemplaza estos dos strings con tus credenciales reales de Supabase
const SUPABASE_URL = "https://tsteoxgsjyzqtjdljeyg.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzdGVveGdzanl6cXRqZGxqZXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNzEwNDUsImV4cCI6MjA5NTc0NzA0NX0.PlslHmxC-uO8sThsk9vvOcwsfidHYUUQwQXrCJpQO6c";

async function getReports() {
  // Apunta directo al endpoint /reports de la API REST de Supabase
  const url = `${SUPABASE_URL}/rest/v1/reports`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json"
      }
    });

    // Validamos el estado response.ok exigido por el taller
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error en el reportEngine:", error.message);
    throw error;
  }
}

module.exports = { getReports };