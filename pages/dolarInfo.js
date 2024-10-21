// BOTON PARA MOSTRAR INFORMACION DEL DOLAR
const buttonInfo = document.createElement("button");
buttonInfo.innerHTML = `info`;
containerValues.append(buttonInfo);
buttonInfo.addEventListener("click", dolarInfo);

function dolarInfo() {
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

  const dolarDescripcion = document.createElement("p");
  dolarDescripcion.innerText = ` 
      El dólar oficial en Argentina es el tipo de cambio del dólar estadounidense establecido por el Banco Central para transacciones formales. 
      Es utilizado en importaciones, exportaciones y transacciones financieras reguladas, 
      y tiende a ser más bajo que el dólar en mercados paralelos como el dólar blue. 
      Su acceso está restringido a ciertos sectores y puede incluir impuestos adicionales como el Impuesto PAIS y el adelanto de Ganancias, lo que puede aumentar su costo para los consumidores. 
      Este tipo de cambio influye en los precios de bienes importados y en los costos de productos con insumos internacionales.`;
  infoContainer.append(dolarDescripcion);
}
