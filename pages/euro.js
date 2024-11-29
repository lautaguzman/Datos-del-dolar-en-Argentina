function cotizacionCasas() {
  updateTitle("cotizaciones");

  containerValues.innerHTML = "";

  fetch("https://dolarapi.com/v1/cotizaciones")
    .then((response) => response.json()) // Convierte la respuesta a JSON
    .then((cotizaData) => {
      cotizaData.forEach((cotizaciones) => {
        // Redondear los valores de compra y venta
        const compraRedondeada = parseFloat(cotizaciones.compra).toFixed(2);
        const ventaRedondeada = parseFloat(cotizaciones.venta).toFixed(2);
        updateCard(cotizaciones.nombre, compraRedondeada, ventaRedondeada);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los datos del API:", error);
    });
}
