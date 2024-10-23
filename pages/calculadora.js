// CALCULADORA
const calculadoraContainer = document.createElement("div");
calculadoraContainer.className = "calculadora-container";
main.append(calculadoraContainer);

const titleCalculadora = document.createElement("p");
titleCalculadora.innerText = "calculadora de cambio";
calculadoraContainer.append(titleCalculadora);

const cantidadEnPesos = document.createElement("input");
cantidadEnPesos.placeholder = "ingresá tus ars";
cantidadEnPesos.type = "number";
calculadoraContainer.append(cantidadEnPesos);

const buttonCalcular = document.createElement("button");
buttonCalcular.innerText = "calcular";
buttonCalcular.addEventListener("click", calcular);
calculadoraContainer.append(buttonCalcular);

const resultado = document.createElement("span");
resultado.innerText = "usd 💵";
calculadoraContainer.append(resultado);

function calcular() {
  // Asegurarse de que el valor de 'valorVenta' sea un número
  const valorVentaNumero = parseFloat(
    valorVenta.innerText.replace(/[^0-9.]/g, "")
  ); // Elimina símbolos y convierte a número

  // Realizar la división
  let resultadoFinal = cantidadEnPesos.value / valorVentaNumero;

  // Mostrar el resultado
  resultado.innerText = `$${resultadoFinal.toFixed(2)}`;
  console.log(resultadoFinal);
}
