//CONTENEDOR NAV
const navContainer = document.querySelector("#navContainer");

const navHome = document.querySelector("#navHome");
navHome.addEventListener("click", reloadPage);
// Función para recargar la página
function reloadPage() {
  location.reload();
}
// ABRIR NAV ITEMS
const openItems = document.querySelector("#openItems");
openItems.addEventListener("click", () => {
  navItems.style.display = "flex";
});

const navItems = document.createElement("ul");
navItems.className = `nav-items`;
navContainer.append(navItems);

// CERRAR NAV ITEMS
const closeItems = document.createElement("button");
closeItems.className = `close-items`;
closeItems.innerHTML = `<i class="fa-solid fa-xmark fa-2xl" style="color: rgb(239, 239, 239)"></i>`;
closeItems.addEventListener("click", () => {
  navItems.style.display = "none";
});
navItems.append(closeItems);

fetch(`/typesDolar.json`)
  .then((response) => response.json())
  .then((dataDolar) => {
    dataDolar.forEach((typeDolar) => {
      const itemsLi = document.createElement("li");
      itemsLi.innerText = typeDolar.nombre;

      itemsLi.addEventListener("click", () => {
        navItems.style.display = "none";
        title.innerText = typeDolar.nombre;
      });
      navItems.append(itemsLi);
    });
  });
