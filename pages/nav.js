//CONTENEDOR NAV
const navContainer = document.querySelector("#navContainer");

//FUNCION PARA RECARGAR PAGINA DESDE HOME
const navHome = document.querySelector("#navHome");
navHome.addEventListener("click", reloadPage);
function reloadPage() {
  location.reload();
}
// ABRIR NAV ITEMS
const openItems = document.querySelector("#openItems");
openItems.addEventListener("click", () => {
  navItems.style.display = "flex";
});

// LISTA CONTAINER
const navItems = document.createElement("ul");
navItems.className = `nav-items`;
navContainer.append(navItems);

// CERRAR NAV ITEMS
const closeItems = document.createElement("button");
closeItems.className = `close-items`;
closeItems.innerHTML = `<i class="fa-solid fa-xmark fa-2xl" style="color: rgb(245, 245, 245)"></i>`;
closeItems.addEventListener("click", () => {
  navItems.style.display = "none";
});
navItems.append(closeItems);

// ARRAY DE NOMBRES ITEMS DE NAV
const namesItems = [
  `dólares`,
  `euro`,
  `real brasileño`,
  `peso chileno`,
  `peso uruguayo`,
  `calculadora`,
];

// ARRAY QUE ALMACENA LAS FUNCIONES DE LOS ITEMS DE NAV
const functionsNavItems = [
  () => dolares(),
  () => euros(),
  () => realBrasil(),
  () => pesoChileno(),
  () => pesoUruguayo(),
];

// RECORRO ARRAY DE NAMES LI, CREO ETIQUETAS LI , AGREGO NOMBRES Y FUNCIONES A CADA UNO.
namesItems.forEach((namesLi, index) => {
  const itemsLi = document.createElement("li");
  itemsLi.innerHTML = namesLi;
  itemsLi.addEventListener("click", functionsNavItems[index]);
  navItems.append(itemsLi);
});
