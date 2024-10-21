const dolarCrypto = document.querySelector("#dolarCrypto");
dolarCrypto.addEventListener("click", mostrarDolarCrypto);

function mostrarDolarCrypto() {
  // FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (BLUE)
  fetch("https://dolarapi.com/v1/dolares/cripto")
    .then((response) => response.json()) //Convertir la respuesta a JSON
    .then((criptoData) => {
      navItems.style.display = "none";
      title.innerText = ``;
      valorCompra.innerText = ``;
      valorVenta.innerText = ``;

      title.innerText = `dolar crypto`;

      valorCompra.innerHTML = `${criptoData.compra}`;

      valorVenta.innerHTML = `${criptoData.venta}`;
    }) // Mostrar los datos

    .catch((error) => console.error("Error:", error)); //Manejar errores
}

//   const dolarCryptoDescription = document.createElement("p");
//   dolarCryptoDescription.innerText = `
//   El dólar crypto en Argentina se refiere al valor del dólar estadounidense adquirido a través de criptomonedas.
//   Este tipo de dólar se obtiene comprando criptomonedas como Bitcoin, USDT (Tether), o USDC con pesos argentinos y luego vendiéndolas en plataformas internacionales para recibir dólares.
//  El dólar crypto suele reflejar un tipo de cambio que está influenciado por la demanda en el mercado de criptomonedas y puede variar en comparación con otros tipos de cambio, como el dólar oficial, blue, o MEP. Es una opción utilizada por quienes buscan acceder a dólares de manera rápida y sin las restricciones del sistema bancario tradicional en Argentina.`;
//   dolarInfo.append(dolarCryptoDescription);
