//CONTENEDOR NAV
const navContainer = document.querySelector("#navContainer");

//NAV HOME
const navHome = document.createElement("div");
navHome.className = `nav-home`;
navHome.innerHTML = `<i class="fa-solid fa-house fa-2xl" style="color: rgb(245, 245, 245)"></i>
<h3>inicio</h3>`;
navHome.addEventListener("click", reloadPage);

// ICONO NAVBARS PARA MOSTRAR NAV ITEMS
const navBars = document.createElement("div");
navBars.className = `nav-bars`;
navBars.innerHTML = `<i class="fa-solid fa-bars fa-2xl" style="color: rgb(245, 245, 245)"></i>`;
navBars.addEventListener("click", () => {
  navItemsContainer.style.display = "flex";
});
navContainer.append(navHome, navBars);

// NAV ITEMS
const navItemsContainer = document.createElement("ul");
navItemsContainer.className = `navItems-container`;
navContainer.append(navItemsContainer);

const navItemsHeader = document.createElement("section");
navItemsHeader.className = `navItems-header`;
navItemsContainer.append(navItemsHeader);

const navItemsHome = document.createElement("i");
navItemsHome.className = `fa-solid fa-house fa-2xl`;
navItemsHome.style = `color: rgb(41, 103, 92)`;
navItemsHome.addEventListener("click", reloadPage);

// CERRAR NAV ITEMS
const closeItems = document.createElement("i");
closeItems.className = `fa-regular fa-circle-xmark fa-2xl`;
closeItems.style = `color: #ff0000`;
closeItems.addEventListener("click", () => {
  navItemsContainer.style.display = "none";
});

navItemsHeader.append(navItemsHome, closeItems);

// ARRAY DE NOMBRES ITEMS DE NAV
const navItemsNames = [
  `dólares`,
  `calculadora`,
  `contacto`,
  `acerca del sitio`,
];
// ARRAY QUE ALMACENA LAS FUNCIONES DE LOS ITEMS DE NAV
const functionsNavItems = [
  () => dolares(),
  () => calculator(),
  () => alert("contacto"),
  () => aboutTheSite(),
];
// RECORRO ARRAY DE NAMES LI, CREO ETIQUETAS LI , AGREGO NOMBRES Y FUNCIONES A CADA UNO.
navItemsNames.forEach((namesLi, index) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = namesLi;
  listItem.addEventListener("click", functionsNavItems[index]);
  navItemsContainer.append(listItem);
});

//FUNCION PARA RECARGAR PAGINA
function reloadPage() {
  location.reload();
}

// ARRAY DE NOMBRES ITEMS DE NAV
// const namesItems = [
//   `dólar oficial`,
//   `dólar blue`,
//   `dólar bolsa`,
//   `dólar ccl`,
//   `dólar mayorista`,
//   `dólar crypto`,
//   `dólar tarjeta`,
//   `calculadora`,
// ];

// ARRAY QUE ALMACENA LAS FUNCIONES DE LOS ITEMS DE NAV
// const functionsNavItems = [
//   () => mostrarDolar("Oficial"),
//   () => mostrarDolar("Blue"),
//   () => mostrarDolar("Bolsa"),
//   () => mostrarDolar("Contado con liquidación"),
//   () => mostrarDolar("Mayorista"),
//   () => mostrarDolar("Cripto"),
//   () => mostrarDolar("Tarjeta"),
// ];
