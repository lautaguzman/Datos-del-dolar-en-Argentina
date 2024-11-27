function realBrasil() {
  updateTitle("real brasileño");

  containerValues.innerHTML = "";

  fetch("https://dolarapi.com/v1/cotizaciones/brl")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
