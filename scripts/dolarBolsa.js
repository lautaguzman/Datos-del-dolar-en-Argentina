function dolarBolsa() {
  main.innerHTML = ``;
  apiDolares().then((data) => {
    // Buscar el "Dólar Oficial"
    const bolsaData = data.find((dolar) => dolar.nombre === "Bolsa");

    // Verificar si encontramos el dólar oficial
    if (bolsaData) {
      updateCard(
        `dólar ${bolsaData.nombre}`,
        bolsaData.compra,
        bolsaData.venta
      );
    } else {
      console.log("No se encontró información del Dólar Blue.");
    }
  });
}
