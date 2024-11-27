function euros() {
  updateTitle("euro");

  containerValues.innerHTML = "";

  fetch("https://dolarapi.com/v1/cotizaciones/eur")
    .then((response) => response.json())
    .then((dataEuro) =>
      updateCard(dataEuro.nombre, dataEuro.compra, dataEuro.venta)
    );
}
