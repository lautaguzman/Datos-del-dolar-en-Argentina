const dolarCCL = document.querySelector("#dolarCCL");
dolarCCL.addEventListener("click", mostrarDolarCCL);

function mostrarDolarCCL() {
  // FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (BLUE)
  fetch("https://dolarapi.com/v1/dolares/contadoconliqui")
    .then((response) => response.json()) //Convertir la respuesta a JSON

    .then((CCLData) => {
      navItems.style.display = "none";
      title.innerText = ``;
      valorCompra.innerText = ``;
      valorVenta.innerText = ``;

      title.innerText = `dolar ccl`;

      valorCompra.innerHTML = `${CCLData.compra}`;

      valorVenta.innerHTML = `${CCLData.venta}`;
    })

    .catch((error) => console.error("Error:", error)); //Manejar errores
}

// const dolarCCLDescription = document.createElement("p");
// dolarCCLDescription.innerText = `
// El dólar CCL (Contado con Liquidación) es un tipo de cambio en Argentina utilizado para obtener dólares en cuentas bancarias en el exterior.
// Similar al dólar MEP, el dólar CCL se obtiene a través de la compra y venta de bonos o acciones.
// Sin embargo, en este caso, los activos se compran en pesos y se venden en dólares en mercados internacionales, transfiriendo los fondos a una cuenta fuera del país.

// El dólar CCL es completamente legal y está regulado, ofreciendo una forma de dolarización fuera de Argentina.
// Su valor suele ser más alto que el dólar oficial y cercano al del dólar blue, ya que refleja el costo de acceder a divisas fuera del país.`;
// dolarInfo.append(dolarCCLDescription);
