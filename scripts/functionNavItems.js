// CONTENEDOR DE FUNCIONES NAV ITEMS
const functionNavItemsContainer = document.createElement("div");
functionNavItemsContainer.className = "function-nav-items-container";
document.body.append(functionNavItemsContainer);

const closeFunctionNav = document.createElement("button");
closeFunctionNav.innerHTML = ` <i class="fa-solid fa-xmark fa-2xl" style="color: #f5f5f5"></i>`;
closeFunctionNav.addEventListener("click", () => {
  functionNavItemsContainer.style.display = "none";
});
functionNavItemsContainer.append(closeFunctionNav);
