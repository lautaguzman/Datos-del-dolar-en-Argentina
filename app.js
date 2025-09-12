// MAIN
const main = document.querySelector("#main");

// FUNCION DONDE CREO CARD PARA MOSTRAR LA INFORMACION DEL DOLAR
function updateCard(title, purchase, sale) {
  navItemsContainer.style.display = "none";

  const card = document.createElement("div");
  card.className = "card-dolar";

  const cardTitle = document.createElement("h4");
  cardTitle.innerText = title; //Actualiza el titulo

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
  main.innerHTML = "";
  apiDolares().then((dataDolar) => {
    if (dataDolar) {
      // Validación en caso de que los datos sean null o undefined
      dataDolar.forEach((dolarCard) => {
        updateCard(
          `Dólar ${dolarCard.nombre}`,
          dolarCard.compra,
          dolarCard.venta
        );
      });
    } else {
      console.error("No se pudieron cargar los datos del dólar.");
    }
  });
}
dolares();

