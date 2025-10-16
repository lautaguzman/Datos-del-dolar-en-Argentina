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

  // SECCTION ARS
  const sectionArs = document.createElement("section");
  sectionArs.className = "section-ars";

  const labelArs = document.createElement("label");
  labelArs.innerText = `ingresá tus ars`;

  const arsAmount = document.createElement("input");
  arsAmount.type = "number";
  arsAmount.placeholder = "ars";

  sectionArs.append(labelArs, arsAmount);

  // CONTENEDOR DE RESULTADOS
  const dollarResultsContainer = document.createElement("div");
  dollarResultsContainer.className = "dollar-results-container";

  calculatorContainer.append(
    calculatorHeader,
    sectionArs,
    dollarResultsContainer
  );

  apiDolares().then((dataDollarResult) => {
    dataDollarResult.forEach((dataDollar) => {
      const sectionDollarResults = document.createElement("section");
      sectionDollarResults.className = "section-dollar-results";

      const nameResults = document.createElement("p");
      nameResults.innerText = dataDollar.nombre;

      const inputResults = document.createElement("input");
      inputResults.type = "number";
      inputResults.placeholder = "0.00";

      sectionDollarResults.append(nameResults, inputResults);
      dollarResultsContainer.append(sectionDollarResults);

      // AGREGO Y ESCUCHO EVENTO A ARS AMOUTN
      arsAmount.addEventListener("input", () => {
        // CONVIERTO A NUMERO DECIMAL
        const pesos = parseFloat(arsAmount.value);
        // VALIDACION DE QUE LO INGRESADO SEA NUMERO
        if (isNaN(pesos) || pesos <= 0) {
          inputResults.value = "";
          return;
        }

        //CALCULO DE ARS INGRESADOS Y DOLAR VENTA
        const conversion = (pesos / dataDollar.venta).toFixed(2);

        // AGREGO EL RESULTADO DEL CALCULO Y LO MUESTRO EN INPUT DE RESULTADOS
        inputResults.value = conversion;
      });
    });
  });
}
