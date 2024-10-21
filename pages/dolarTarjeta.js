const dolarTarjeta = document.querySelector("#dolarTarjeta");
dolarTarjeta.addEventListener("click", mostrarDolarTarjeta);

function mostrarDolarTarjeta() {
  // FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (BLUE)
  fetch("https://dolarapi.com/v1/dolares/tarjeta")
    .then((response) => response.json()) //Convertir la respuesta a JSON
    .then((tarjetaData) => {
      navItems.style.display = "none";
      title.innerText = ``;
      valorCompra.innerText = ``;
      valorVenta.innerText = ``;

      title.innerText = `dolar tarjeta`;

      valorCompra.innerHTML = `${tarjetaData.compra}`;

      valorVenta.innerHTML = `${tarjetaData.venta}`;
    })
    .catch((error) => console.error("Error:", error)); //Manejar errores
}
// const dolarTarjetaDescription = document.createElement("p");
// dolarTarjetaDescription.innerText = `
// El dólar tarjeta, también conocido como dólar turista, es el tipo de cambio aplicable a las compras realizadas con tarjetas de crédito y débito en el extranjero. Este tipo de cambio es relevante para quienes viajan al exterior o realizan compras en tiendas online fuera de Argentina.

// El dólar tarjeta incluye el valor del dólar oficial, al que se le suman impuestos adicionales: un 30% correspondiente al Impuesto PAIS y un 45% de retención a cuenta del impuesto a las ganancias. En algunos casos, puede haber un cargo adicional si las compras superan un determinado monto mensual.

// Este tipo de cambio es generalmente más alto que el dólar oficial, lo que refleja el costo de acceder a divisas en un contexto de control de cambios. El dólar tarjeta es una herramienta importante para los viajeros y compradores en línea, permitiendo la conversión de pesos a dólares de forma legal, aunque con costos adicionales.`;
// dolarInfo.append(dolarTarjetaDescription);
