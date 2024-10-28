const footer = document.querySelector("#footer");

const footerTitle = document.createElement("h4");
footerTitle.innerText = `seguime en mis redes 😉`;
footer.append(footerTitle);

const redesContainer = document.createElement("ul");
redesContainer.className = `redes-container`;
footer.append(redesContainer);

// ARRAY QUE CONTIENE LOS ICONOS DE MIS REDES
const iconosRedes = [
  `<i class="fa-solid fa-info fa-xl" style="color: #00635c;"></i>`,
  `<i class="fa-brands fa-square-github fa-xl" style="color: #24292e;"></i>`,
  `<i class="fa-brands fa-linkedin fa-xl" style="color: #0077b5;"></i>`,
  `<i class="fa-brands fa-square-instagram fa-xl" style="color: #e1306c;"></i>`,
];

iconosRedes.forEach((iconos) => {
  const redes = document.createElement("li");
  redes.innerHTML = iconos;
  redesContainer.append(redes);
});
