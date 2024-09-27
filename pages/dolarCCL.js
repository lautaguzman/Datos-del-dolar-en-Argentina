const dolarCCL = document.querySelector("#dolarCCL");
dolarCCL.addEventListener("click", mostrarDolarCCL);

function mostrarDolarCCL() {
  titleContainer.innerHTML = "";
  containerValues.innerHTML = "";
  dolarInfo.innerHTML = "";

  // FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (BLUE)
  fetch("https://dolarapi.com/v1/dolares/contadoconliqui")
    .then((response) => response.json()) //Convertir la respuesta a JSON

    .then((CCLData) => {
      // TITULO DOLAR
      const title = document.createElement("h4");
      title.innerText = `dolar ${CCLData.nombre}`;
      titleContainer.append(title);

      // CARD DE INFORMACION DEL DOLAR
      const dolarCard = document.createElement("div");
      dolarCard.className = "card-dolar";
      containerValues.append(dolarCard);

      const dolarCompra = document.createElement("div");
      dolarCompra.className = "dolar-compra";
      dolarCompra.innerHTML = ` 
       <p>compra</p>
       <span>${CCLData.compra}</span>`;

      const dolarVenta = document.createElement("div");
      dolarVenta.className = "dolar-venta";
      dolarVenta.innerHTML = ` 
       <p>venta</p>
       <span>${CCLData.venta}</span>`;
      dolarCard.append(dolarCompra, dolarVenta);
    }) // Mostrar los datos

    .catch((error) => console.error("Error:", error)); //Manejar errores

  const dolarCCLDescription = document.createElement("p");

  dolarCCLDescription.innerText = `
  El dólar CCL (Contado con Liquidación) es un tipo de cambio en Argentina utilizado para obtener dólares en cuentas bancarias en el exterior. 
  Similar al dólar MEP, el dólar CCL se obtiene a través de la compra y venta de bonos o acciones. 
  Sin embargo, en este caso, los activos se compran en pesos y se venden en dólares en mercados internacionales, transfiriendo los fondos a una cuenta fuera del país.

El dólar CCL es completamente legal y está regulado, ofreciendo una forma de dolarización fuera de Argentina. 
Su valor suele ser más alto que el dólar oficial y cercano al del dólar blue, ya que refleja el costo de acceder a divisas fuera del país.`;
  dolarInfo.append(dolarCCLDescription);
}
