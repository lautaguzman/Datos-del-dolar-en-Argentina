const footer = document.querySelector("#footer");

const footerInfo = document.createElement("div");
footerInfo.className = `footer-info`;
footer.append(footerInfo);

const infoPage = document.createElement("span");
infoPage.innerHTML = `<i class="fa-solid fa-info" style="color: #00635c;"></i>`;
footerInfo.append(infoPage);

const footerRedes = document.createElement("div");
footerRedes.className = `footer-redes`;
footer.append(footerRedes);

const redesTitle = document.createElement("h4");
redesTitle.innerText = `seguime en mis redes 😉`;
footerRedes.append(redesTitle);

const redesContainer = document.createElement("ul");
redesContainer.className = `redes-container`;
footerRedes.append(redesContainer);

// ARRAY QUE CONTIENE LOS ICONOS DE MIS REDES
const iconosRedes = [
  `<i class="fa-brands fa-square-github fa-2xl" style="color: #24292e;"></i>`,
  `<i class="fa-brands fa-linkedin fa-2xl" style="color: #0077b5;"></i>`,
  `<i class="fa-brands fa-square-instagram fa-2xl" style="color: #e1306c;"></i>`,
];

iconosRedes.forEach((iconos) => {
  const redes = document.createElement("li");
  redes.innerHTML = iconos;
  redesContainer.append(redes);
});
