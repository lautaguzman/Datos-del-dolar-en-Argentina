function dolarBlue() {
  main.innerHTML = ``;
  apiDolares().then((data) => {
    // Buscar el "Dólar Oficial"
    const blueData = data.find((dolar) => dolar.nombre === "Blue");

    // Verificar si encontramos el dólar oficial
    if (blueData) {
      updateCard(`dólar ${blueData.nombre}`, blueData.compra, blueData.venta);
    } else {
      console.log("No se encontró información del Dólar Blue.");
    }
  });
}
