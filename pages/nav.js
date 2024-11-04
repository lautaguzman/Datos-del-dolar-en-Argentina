const navHome = document.querySelector("#navHome");
navHome.addEventListener("click", reloadPage);

const openItems = document.querySelector("#openItems");

const closeItems = document.querySelector("#closeItems");

const navItems = document.querySelector("#navItems");

openItems.addEventListener("click", () => {
  navItems.style.display = "flex";
});

closeItems.addEventListener("click", () => {
  navItems.style.display = "none";
});

// Función para recargar la página
function reloadPage() {
  location.reload();
}
