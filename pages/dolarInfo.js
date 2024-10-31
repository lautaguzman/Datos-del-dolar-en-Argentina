// BOTON PARA MOSTRAR INFORMACION DEL DOLAR
const buttonInfoDolar = document.createElement("button");
buttonInfoDolar.innerHTML = `info`;
containerValues.append(buttonInfoDolar);
buttonInfoDolar.addEventListener("click", infoDolar);

// FUNCION QUE MUESTRA LOS DATOS DE LA INFORMACION DE DOLAR
function infoDolar() {
  // CONTENEDOR DE LA INFORMACION DEL DOLAR
  const infoContainer = document.createElement("section");
  infoContainer.className = "info-container";
  main.append(infoContainer);

  infoContainer.style.display = "flex";

  const closeInfo = document.createElement("button");
  closeInfo.innerHTML = `<i class="fa-solid fa-xmark fa-2xl" style="color: rgb(239, 239, 239)"></i>`;
  closeInfo.addEventListener("click", () => {
    infoContainer.style.display = "none";
  });
  infoContainer.append(closeInfo);

  const descripcionDolar = document.createElement("p");
  descripcionDolar.innerText = `el dólar oficial en argentina es la tasa de cambio establecida y controlada por el banco central de la república argentina (bcra). esta tasa es utilizada en transacciones formales, como importaciones y exportaciones, y suele diferir del valor en el mercado paralelo. Además, el dólar oficial es la referencia para impuestos y regulaciones en compras de divisas y pagos internacionales realizados a través de bancos y entidades financieras reguladas en el país.`;

  infoContainer.append(descripcionDolar);
}
