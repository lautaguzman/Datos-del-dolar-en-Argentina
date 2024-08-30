const dolarSolidario = document.querySelector("#dolarSolidario");
dolarSolidario.addEventListener("click", mostrarDolarSolidario);

function mostrarDolarSolidario() {
  dolarInfo.innerHTML = "";

  const dolarSolidarioDescription = document.createElement("p");
  dolarSolidarioDescription.innerText = `
  El dólar solidario en Argentina es el tipo de cambio oficial al que se le suman dos impuestos: el Impuesto PAIS (30%) y la percepción a cuenta del Impuesto a las Ganancias (45%). 
  Este dólar se aplica a la compra de dólares para ahorro, pagos con tarjetas en moneda extranjera, y otros gastos fuera del país.

El valor del dólar solidario es significativamente más alto que el dólar oficial debido a estos impuestos adicionales, 
y es utilizado principalmente por personas que compran dólares dentro del límite mensual permitido o realizan compras en el exterior.`;
  dolarInfo.append(dolarSolidarioDescription);
}
