// MAIN
const main = document.querySelector("#main");

// CONTENEDOR DE TITULO
const titleContainer = document.createElement("div");
titleContainer.className = "title-container";
main.append(titleContainer);

const title = document.createElement("h4");
title.innerText = `dolar oficial`;
titleContainer.append(title);

// CONTENEDOR DE LOS VALORES DEL DOLAR
const containerValues = document.createElement("div");
containerValues.className = "container-values";
main.append(containerValues);

// CARD DE INFORMACION DEL DOLAR
const dolarCard = document.createElement("div");
dolarCard.className = "card-dolar";
containerValues.append(dolarCard);

const dolarCompra = document.createElement("section");
dolarCompra.className = "dolar-compra";
dolarCompra.innerHTML = `<p>compra</p>`;

const valorCompra = document.createElement("span");
dolarCompra.append(valorCompra);

const dolarVenta = document.createElement("section");
dolarVenta.className = "dolar-venta";
dolarVenta.innerHTML = `<p>venta</p>`;

const valorVenta = document.createElement("span");
dolarVenta.append(valorVenta);

dolarCard.append(dolarCompra, dolarVenta);

// FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (OFICIAL)
fetch("https://dolarapi.com/v1/dolares/oficial")
  .then((response) => response.json()) //Convertir la respuesta a JSON
  .then((oficialData) => {
    valorCompra.innerText = `${oficialData.compra}`;
    valorVenta.innerText = `${oficialData.venta}`;
  }) // Mostrar los datos
  .catch((error) => console.error("Error:", error)); //Manejar errores

// CALCULADORA
const calculadoraContainer = document.createElement("div");
calculadoraContainer.className = "calculadora-container";
main.append(calculadoraContainer);

const titleCalculadora = document.createElement("p");
titleCalculadora.innerText = "calculadora de cambio";
calculadoraContainer.append(titleCalculadora);

const cantidadEnPesos = document.createElement("input");
cantidadEnPesos.placeholder = "ars";
cantidadEnPesos.type = "number";
calculadoraContainer.append(cantidadEnPesos);

const buttonCalcular = document.createElement("button");
buttonCalcular.innerText = "calcular";
buttonCalcular.addEventListener("click", () => {
  let resultadoFinal = cantidadEnPesos.value / oficialData.venta;
  resultado.innerText = `$${resultadoFinal.toFixed(2)}`;
  console.log(resultadoFinal);
});
calculadoraContainer.append(buttonCalcular);

const resultado = document.createElement("span");
resultado.innerText = "usd";
calculadoraContainer.append(resultado);
