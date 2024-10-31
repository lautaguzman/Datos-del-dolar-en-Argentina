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

const funcionesRedes = [
  () => infoPage(),
  () => window.open(`https://github.com/lautaguzman`),
  () => window.open(`https://www.linkedin.com/in/lautaro-guzman-8841431b8/`),
  () =>
    window.open("https://instagram.com/lautaguzman21?igshid=NzZlODBkYWE4Ng=="),
];

iconosRedes.forEach((iconos, index) => {
  const redes = document.createElement("li");
  redes.innerHTML = iconos;
  redes.addEventListener("click", funcionesRedes[index]);
  redesContainer.append(redes);
});

function infoPage() {
  const infoPageContainer = document.createElement("section");
  infoPageContainer.className = `info-page-container`;
  footer.append(infoPageContainer);

  infoPageContainer.style.display = `flex`;

  const closeInfoPage = document.createElement("button");
  closeInfoPage.innerHTML = `<i class="fa-solid fa-xmark fa-2xl" style="color: rgb(239, 239, 239)"></i>`;
  closeInfoPage.addEventListener("click", () => {
    infoPageContainer.style.display = "none";
  });
  infoPageContainer.append(closeInfoPage);

  const descripcionPage = document.createElement("p");
  descripcionPage.innerText = `en esta página, podrás encontrar el valor de compra y venta del dólar en Argentina, así como información detallada sobre cada tipo de dólar. Además, cuenta con una calculadora de cambio que te permitirá realizar conversiones de ARS a USD y viceversa. La aplicación utiliza tecnología moderna y API para ofrecer datos precisos y en tiempo real, facilitando la comprensión del mercado cambiario argentino. Esta página fue desarrollada por Lautaro Guzmán.`;
  infoPageContainer.append(descripcionPage);
}
