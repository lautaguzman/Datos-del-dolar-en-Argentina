// CALCULADORA
function calculator() {
  navItemsContainer.style.display = "none";
  main.innerHTML = "";

  // CONTENEDOR DE CALCULADORA
  const calculatorContainer = document.createElement("div");
  calculatorContainer.className = "calculator-container";
  main.append(calculatorContainer);

  // HEADER CALCULADORA
  const calculatorHeader = document.createElement("section");
  calculatorHeader.className = "calculator-header";

  const calculatorTitle = document.createElement("h4");
  calculatorTitle.innerText = "calculadora de dólar";

  const calculatorDescription = document.createElement("p");
  calculatorDescription.innerText = `obtené al instante y utilizá el tipo de cambio que más te sirva`;

  calculatorHeader.append(calculatorTitle, calculatorDescription);

  // SECCION DOLAR
  const sectionDollar = document.createElement("section");
  sectionDollar.className = "section-dollar";

  const labelDollar = document.createElement("label");
  labelDollar.innerText = `ingresá tus usd`;

  const dollarAmount = document.createElement("input");
  dollarAmount.type = "number";
  dollarAmount.placeholder = "0.00";

  sectionDollar.append(labelDollar, dollarAmount);

  // RESULTADOS
  const dollarResultsContainer = document.createElement("section");
  dollarResultsContainer.className = "dollar-results-container";

  calculatorContainer.append(
    calculatorHeader,
    sectionDollar,
    dollarResultsContainer
  );

  // --- Renderizo los tipos de dólar con valor inicial 0 ---
  apiDolares().then((dataDollarResult) => {
    // dollarResultsContainer.innerHTML = "";

    dataDollarResult.forEach((dolarResults) => {
      const nameDollar = document.createElement("p");
      nameDollar.textContent = dolarResults.nombre + ": ";

      const valueDollar = document.createElement("span");
      valueDollar.textContent = "100"; // valor inicial en 0

      dollarResultsContainer.appendChild(nameDollar, valueDollar);

      // guardo el span para actualizarlo después
      // dolarResults.valorSpan = valor;
    });

    // Escucho cambios en el input
    // dollarAmount.addEventListener("input", (e) => {
    //   const usd = parseFloat(e.target.value);

    //   data.forEach((dolar) => {
    //     if (!usd || usd <= 0) {
    //       dolar.valorSpan.textContent = "0";
    //     } else {
    //       const resultado = (usd * dolar.venta).toFixed(2);
    //       dolar.valorSpan.textContent = resultado;
    //     }
    //   });
    // });
  });
}
