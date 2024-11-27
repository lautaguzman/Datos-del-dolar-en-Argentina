// MAIN
const main = document.querySelector("#main");

const titleContainer = document.createElement("div");
titleContainer.className = `title-container`;
main.append(titleContainer);

const titleMain = document.createElement("p");
titleMain.innerText = ``;
titleContainer.append(titleMain);

const containerValues = document.createElement("div");
containerValues.className = `container-values`;
main.append(containerValues);

// FUNCION PARA MODIFICAR CONTENIDO DEL TITULO MAIN
function updateTitle(newTitle) {
  titleMain.innerText = newTitle;
}

function updateCard(titleCard, purchase, sale) {
  const card = document.createElement("div");
  card.className = "card-money";

  const cardTitle = document.createElement("h4");
  cardTitle.innerText = titleCard; // Actualiza el título de la tarjeta
  card.append(cardTitle);

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

  card.append(purchaseContainer, saleContainer);

  containerValues.append(card);
}

function dolares() {
  updateTitle("dolares");

  containerValues.innerHTML = "";

  fetch("https://dolarapi.com/v1/dolares")
    .then((response) => response.json()) // Convierte la respuesta a JSON
    .then((dataDolar) => {
      dataDolar.forEach((dolar) => {
        updateCard(dolar.nombre, dolar.compra, dolar.venta);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los datos del API:", error);
    });
}

dolares();
