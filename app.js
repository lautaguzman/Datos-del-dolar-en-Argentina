// MAIN
const main = document.querySelector("#main");

// FUNCION DONDE CREO LA CARD PARA MOSTRAR LA INFORMACION DEL DOLAR
function updateCard(title, purchase, sale) {
  const card = document.createElement("div");
  card.className = "card-money";

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
  infoCard.innerText = `info`;

  card.append(cardTitle, purchaseContainer, saleContainer, infoCard);

  main.append(card);
}

// Función para consumir la API y devolver la promesa
function apiDolares() {
  return fetch("https://dolarapi.com/v1/dolares")
    .then((response) => response.json()) // Devuelves la promesa para que pueda ser usada en .then
    .catch((error) => {
      console.error("Error al obtener los datos de la API:", error);
    });
}
// FUNCION PARA MOSTRAR DATOS DE DOLAR OFICIAL
function dolarOficial() {
  main.innerHTML = ``;

  apiDolares().then((data) => {
    // Buscar el "Dólar Oficial"
    const oficialData = data.find((dolar) => dolar.nombre === "Oficial");

    // Verificar si encontramos el dólar oficial
    if (oficialData) {
      updateCard(
        `dólar ${oficialData.nombre}`,
        oficialData.compra,
        oficialData.venta
      );
    } else {
      console.log("No se encontró información del Dólar Oficial.");
    }
  });
}
dolarOficial();
