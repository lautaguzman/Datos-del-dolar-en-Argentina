// CAPTURO BOTON DE DOLAR BLUE
const dolarBlue = document.querySelector("#dolarBlue");
dolarBlue.addEventListener("click", mostrarDolarBlue);

function mostrarDolarBlue() {
  titleContainer.innerHTML = "";
  containerValues.innerHTML = "";
  dolarInfo.innerHTML = "";

  // FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (BLUE)
  fetch("https://dolarapi.com/v1/dolares/blue")
    .then((response) => response.json()) //Convertir la respuesta a JSON

    .then((blueData) => {
      // TITULO DOLAR
      const title = document.createElement("h4");
      title.innerText = `dolar ${blueData.nombre}`;
      titleContainer.append(title);

      // CARD DE INFORMACION DEL DOLAR
      const dolarCard = document.createElement("div");
      dolarCard.className = "card-dolar";
      containerValues.append(dolarCard);

      const dolarCompra = document.createElement("div");
      dolarCompra.className = "dolar-compra";
      dolarCompra.innerHTML = ` 
       <p>compra</p>
       <span>${blueData.compra}</span>`;

      const dolarVenta = document.createElement("div");
      dolarVenta.className = "dolar-venta";
      dolarVenta.innerHTML = ` 
       <p>venta</p>
       <span>${blueData.venta}</span>`;
      dolarCard.append(dolarCompra, dolarVenta);
    }) // Mostrar los datos

    .catch((error) => console.error("Error:", error)); //Manejar errores

  const dolarBlueDescription = document.createElement("p");
  dolarBlueDescription.innerText = `
El dólar blue en Argentina es el dólar estadounidense en el mercado paralelo, fuera del sistema bancario oficial. 
Su valor se determina por oferta y demanda en un mercado no regulado, y suele ser más alto que el dólar oficial debido a las restricciones al acceso a divisas extranjeras impuestas por el gobierno. 
Aunque es ilegal, el dólar blue se utiliza ampliamente en tiempos de crisis económica o cuando hay restricciones cambiarias. 
Su precio refleja la percepción del mercado sobre la economía y la estabilidad del país.`;
  dolarInfo.append(dolarBlueDescription);
}
