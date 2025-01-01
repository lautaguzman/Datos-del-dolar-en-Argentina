// MAIN
const main = document.querySelector("#main");

// FUNCION DONDE CREO CARD PARA MOSTRAR LA INFORMACION DEL DOLAR
function updateCard(title, purchase, sale) {
  const card = document.createElement("div");
  card.className = "card-dolar";

  const cardTitle = document.createElement("h4");
  cardTitle.innerText = title;

  const purchaseContainer = document.createElement("section");
  purchaseContainer.innerHTML = `<p>Compra</p>`;

  const purchaseValue = document.createElement("span");
  purchaseValue.innerText = purchase; // Actualiza el valor de compra
  purchaseContainer.append(purchaseValue);

  const saleContainer = document.createElement("section");
  saleContainer.innerHTML = `<p>Venta</p>`;

  const saleValue = document.createElement("span");
  saleValue.innerText = sale; // Actualiza el valor de venta
  saleContainer.append(saleValue);

  const infoCard = document.createElement("button");
  infoCard.innerText = `información`;

  card.append(cardTitle, purchaseContainer, saleContainer, infoCard);

  main.append(card);
}

// Función para consumir api de dolares
function apiDolares() {
  return fetch("https://dolarapi.com/v1/dolares")
    .then((response) => response.json()) // Devuelves la promesa para que pueda ser usada en .then
    .catch((error) => {
      console.error("Error al obtener los datos de la API:", error);
    });
}

// Funcion para mostrar los datos de cada tipo de dolar
function dolares() {
  apiDolares().then((dataDolar) => {
    if (dataDolar) {
      // Validación en caso de que los datos sean null o undefined
      dataDolar.forEach((dolar) => {
        updateCard(`Dólar ${dolar.nombre}`, dolar.compra, dolar.venta);
      });
    } else {
      console.error("No se pudieron cargar los datos del dólar.");
    }
  });
}
dolares();

// Función genérica para mostrar los datos de un tipo específico de dólar
// function mostrarDolar(tipo) {
//   main.innerHTML = ``;

//   apiDolares().then((data) => {
//     // Buscar el dólar especificado
//     const dolarData = data.find((dolar) => dolar.nombre === tipo);

//     // Verificar si encontramos el tipo de dólar solicitado
//     if (dolarData) {
//       updateCard(
//         `dólar ${dolarData.nombre}`,
//         dolarData.compra,
//         dolarData.venta
//       );
//     } else {
//       console.log(`No se encontró información del Dólar ${tipo}.`);
//     }
//   });
// }

// mostrarDolar("Oficial"); // Para mostrar el Dólar Oficial
// mostrarDolar("Blue");

// fetch("https://dolarapi.com/v1/dolares")
//   .then((response) => response.json())
//   .then((dataDolar) => {
//
//   })
//   .catch((error) => {
//     console.error("Error al obtener los datos del dólar:", error);
//   });
