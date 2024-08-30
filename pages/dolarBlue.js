const dolarBlue = document.querySelector("#dolarBlue");
dolarBlue.addEventListener("click", mostrarDolarBlue);

function mostrarDolarBlue() {
  dolarInfo.innerHTML = "";

  const dolarBlueDescription = document.createElement("p");
  dolarBlueDescription.innerText = `
El dólar blue en Argentina es el dólar estadounidense en el mercado paralelo, fuera del sistema bancario oficial. 
Su valor se determina por oferta y demanda en un mercado no regulado, y suele ser más alto que el dólar oficial debido a las restricciones al acceso a divisas extranjeras impuestas por el gobierno. 
Aunque es ilegal, el dólar blue se utiliza ampliamente en tiempos de crisis económica o cuando hay restricciones cambiarias. 
Su precio refleja la percepción del mercado sobre la economía y la estabilidad del país.`;
  dolarInfo.append(dolarBlueDescription);
}
