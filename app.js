// MAIN
const main = document.querySelector("#main");

// FETCH CON LLAMADA A LA API PARA OBTENER INFORMACION SOBRE EL DOLAR (OFICIAL)
fetch("https://dolarapi.com/v1/dolares/oficial")
  .then((response) => response.json()) //Convertir la respuesta a JSON
  .then((oficialData) => {
    // CONTENEDOR DE TITULO
    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container";
    main.append(titleContainer);

    const title = document.createElement("h4");
    title.innerText = `dolar ${oficialData.nombre}`;
    titleContainer.append(title);

    // CONTENEDOR DE LOS VALORES Y CALCULOS DEL DOLAR
    const containerValues = document.createElement("div");
    containerValues.className = "container-values";
    main.append(containerValues);

    // CARD DE INFORMACION DEL DOLAR
    const dolarCard = document.createElement("div");
    dolarCard.className = "card-dolar";
    containerValues.append(dolarCard);

    const dolarCompra = document.createElement("section");
    dolarCompra.className = "dolar-compra";
    dolarCompra.innerHTML = ` 
    <p>compra</p>
    <span>${oficialData.compra}</span>`;

    const dolarVenta = document.createElement("section");
    dolarVenta.className = "dolar-venta";
    dolarVenta.innerHTML = ` 
    <p>venta</p>
    <span>${oficialData.venta}</span>`;
    dolarCard.append(dolarCompra, dolarVenta);

    // BOTON PARA MOSTRA INFORMACION DEL DOLAR
    const buttonInfo = document.createElement("button");
    buttonInfo.innerHTML = `<i class="fa-solid fa-info" style="color: #00635c;"></i>`;
    containerValues.append(buttonInfo);
    buttonInfo.addEventListener("click", () => {
      alert(`diste click`);
    });

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
  }) // Mostrar los datos

  .catch((error) => console.error("Error:", error)); //Manejar errores

// CONTENEDOR DE LA INFORMACION DEL DOLAR
const dolarInfo = document.querySelector("#dolarInfo");

const oficialDollarDescription = document.createElement("p");
oficialDollarDescription.innerText = `
El dólar oficial en Argentina es el tipo de cambio del dólar estadounidense establecido por el Banco Central para transacciones formales. 
Es utilizado en importaciones, exportaciones y transacciones financieras reguladas, 
y tiende a ser más bajo que el dólar en mercados paralelos como el dólar blue. 
Su acceso está restringido a ciertos sectores y puede incluir impuestos adicionales como el Impuesto PAIS y el adelanto de Ganancias, lo que puede aumentar su costo para los consumidores. 
Este tipo de cambio influye en los precios de bienes importados y en los costos de productos con insumos internacionales.`;
dolarInfo.append(oficialDollarDescription);
