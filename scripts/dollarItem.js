function dollarItem() {
  navItemsContainer.style.display = "none";

  functionNavItemsContainer.style.display = `flex`;

  functionNavItemsContainer.innerHTML = "";

  functionNavItemsContainer.append(closeFunctionNav);

  const dollarNamesContainer = document.createElement("ul");
  dollarNamesContainer.className = `dollar-names-container`;
  functionNavItemsContainer.append(dollarNamesContainer);

  apiDolares().then((dataDolar) => {
    if (dataDolar) {
      // Validación en caso de que los datos sean null o undefined
      dataDolar.forEach((dolar) => {
        const dollarLi = document.createElement("li"); // Crea un elemento <li>
        dollarLi.textContent = dolar.nombre; // Asigna el nombre del objeto
        dollarNamesContainer.appendChild(dollarLi); // Agrega <li> a la <ul>
      });
    } else {
      console.error("No se pudieron cargar los datos del dólar.");
    }
  });
}
