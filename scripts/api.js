// Función para consumir api de dolares
function apiDolares() {
  return fetch("https://dolarapi.com/v1/dolares")
    .then((response) => response.json()) // Devuelves la promesa para que pueda ser usada en .then
    .catch((error) => {
      console.error("Error al obtener los datos de la API:", error);
    });
}
