const dolarBolsa = document.querySelector("#dolarBolsa");

dolarBolsa.addEventListener("click", mostrarDolarBolsa);

function mostrarDolarBolsa() {
  titleContainer.innerHTML = "";
  containerValues.innerHTML = "";
  dolarInfo.innerHTML = "";

  // FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (BOLSA)
  fetch("https://dolarapi.com/v1/dolares/bolsa")
    .then((response) => response.json()) //Convertir la respuesta a JSON

    .then((bolsaData) => {
      // TITULO DOLAR
      const title = document.createElement("h4");
      title.innerText = `dolar ${bolsaData.nombre}`;
      titleContainer.append(title);

      // CARD DE INFORMACION DEL DOLAR
      const dolarCard = document.createElement("div");
      dolarCard.className = "card-dolar";
      containerValues.append(dolarCard);

      const dolarCompra = document.createElement("div");
      dolarCompra.className = "dolar-compra";
      dolarCompra.innerHTML = ` 
       <p>compra</p>
       <span>${bolsaData.compra}</span>`;

      const dolarVenta = document.createElement("div");
      dolarVenta.className = "dolar-venta";
      dolarVenta.innerHTML = ` 
       <p>venta</p>
       <span>${bolsaData.venta}</span>`;
      dolarCard.append(dolarCompra, dolarVenta);
    }) // Mostrar los datos

    .catch((error) => console.error("Error:", error)); //Manejar errores
  const dolarBolsaDescription = document.createElement("p");
  dolarBolsaDescription.innerText = `
  El dólar bolsa o dólar MEP en Argentina es un tipo de cambio que se obtiene a través de la compra y venta de bonos en el mercado financiero. 
  Este tipo de dólar es legal y se realiza dentro del marco regulado por la Comisión Nacional de Valores (CNV). 
  Es una alternativa para adquirir dólares sin las restricciones del mercado oficial y refleja un valor basado en la oferta y demanda de los bonos.
  Aunque generalmente es más alto que el dólar oficial, suele ser más bajo que el dólar blue.`;
  dolarInfo.append(dolarBolsaDescription);
}
