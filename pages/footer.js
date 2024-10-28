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

const direccionesRedes = [
  () => alert("Informacion de la pagina"),
  () => window.open(`https://github.com/lautaguzman`),
  () => window.open(`https://www.linkedin.com/in/lautaro-guzman-8841431b8/`),
  () =>
    window.open("https://instagram.com/lautaguzman21?igshid=NzZlODBkYWE4Ng=="),
];

iconosRedes.forEach((iconos, index) => {
  const redes = document.createElement("li");
  redes.innerHTML = iconos;
  redes.addEventListener("click", direccionesRedes[index]);
  redesContainer.append(redes);
});
