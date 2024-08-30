const dolarOficial = document.querySelector("#dolarOficial");
dolarOficial.addEventListener("click", mostrarDolarOficial);

function mostrarDolarOficial() {
  dolarInfo.innerHTML = "";

  const oficialDollarDescription = document.createElement("p");
  oficialDollarDescription.innerText = `
El dólar oficial en Argentina es el tipo de cambio del dólar estadounidense establecido por el Banco Central para transacciones formales. 
Es utilizado en importaciones, exportaciones y transacciones financieras reguladas, 
y tiende a ser más bajo que el dólar en mercados paralelos como el dólar blue. 
Su acceso está restringido a ciertos sectores y puede incluir impuestos adicionales como el Impuesto PAIS y el adelanto de Ganancias, lo que puede aumentar su costo para los consumidores. 
Este tipo de cambio influye en los precios de bienes importados y en los costos de productos con insumos internacionales.`;
  dolarInfo.append(oficialDollarDescription);
}
