const dolarCrypto = document.querySelector("#dolarCrypto");
dolarCrypto.addEventListener("click", mostrarDolarCrypto);

function mostrarDolarCrypto() {
  titleContainer.innerHTML = "";
  containerValues.innerHTML = "";
  dolarInfo.innerHTML = "";

  // FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (BLUE)
  fetch("https://dolarapi.com/v1/dolares/cripto")
    .then((response) => response.json()) //Convertir la respuesta a JSON

    .then((criptoData) => {
      // TITULO DOLAR
      const title = document.createElement("h4");
      title.innerText = `dolar ${criptoData.nombre}`;
      titleContainer.append(title);

      // CARD DE INFORMACION DEL DOLAR
      const dolarCard = document.createElement("div");
      dolarCard.className = "card-dolar";
      containerValues.append(dolarCard);

      const dolarCompra = document.createElement("div");
      dolarCompra.className = "dolar-compra";
      dolarCompra.innerHTML = ` 
       <p>compra</p>
       <span>${criptoData.compra}</span>`;

      const dolarVenta = document.createElement("div");
      dolarVenta.className = "dolar-venta";
      dolarVenta.innerHTML = ` 
       <p>venta</p>
       <span>${criptoData.venta}</span>`;
      dolarCard.append(dolarCompra, dolarVenta);
    }) // Mostrar los datos

    .catch((error) => console.error("Error:", error)); //Manejar errores

  const dolarCryptoDescription = document.createElement("p");
  dolarCryptoDescription.innerText = `
  El dólar crypto en Argentina se refiere al valor del dólar estadounidense adquirido a través de criptomonedas. 
  Este tipo de dólar se obtiene comprando criptomonedas como Bitcoin, USDT (Tether), o USDC con pesos argentinos y luego vendiéndolas en plataformas internacionales para recibir dólares.
 El dólar crypto suele reflejar un tipo de cambio que está influenciado por la demanda en el mercado de criptomonedas y puede variar en comparación con otros tipos de cambio, como el dólar oficial, blue, o MEP. Es una opción utilizada por quienes buscan acceder a dólares de manera rápida y sin las restricciones del sistema bancario tradicional en Argentina.`;
  dolarInfo.append(dolarCryptoDescription);
}
