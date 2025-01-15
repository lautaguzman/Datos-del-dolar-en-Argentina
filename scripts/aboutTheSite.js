function aboutTheSite() {
  navItemsContainer.style.display = "none";

  const infoSiteContainer = document.createElement("section");
  infoSiteContainer.className = `info-site-container`;
  document.body.append(infoSiteContainer);

  infoSiteContainer.style.display = `flex`;

  const closeInfoSite = document.createElement("button");
  closeInfoSite.className = `close-info-site`;
  closeInfoSite.innerHTML = `<i class="fa-solid fa-xmark fa-2xl" style="color: #f5f5f5;"></i>`;
  closeInfoSite.addEventListener("click", () => {
    infoSiteContainer.style.display = "none";
  });
  const descriptionSite = document.createElement("ul");
  descriptionSite.className = "description-container";
  descriptionSite.innerHTML = `
  <li>
  esta página permite consultar el valor de compra y venta del dólar en argentina, mostrando información detallada sobre cada tipo dólar disponible.
  </li>

  <li>
  incluye una calculadora de conversión de moneda para realizar cambios de ars a usd y viceversa, facilitando la consulta rápida de valores actualizados.
  los datos se obtienen en tiempo real a través de una <a href="https://dolarapi.com/docs/">api</a> externa, asegurando precisión y actualidad en la información proporcionada.
  </li>

  <li>
  esta página fue desarrollada por lautaro guzmán. puedes explorar mi perfil de <a href="https://github.com/lautaguzman">gitHub</a> para conocer más sobre este y otros proyectos.
  </li>`;

  infoSiteContainer.append(closeInfoSite, descriptionSite);
}

// este proyecto surgió como parte de mi proceso de aprendizaje continuo en desarrollo web. me propuse el desafío de implementar nuevas herramientas y conceptos, como el consumo de una API que desconocía, la gestión de ramas en gitHub y el desarrollo de funciones en javaScript, como asi también profundicé mis conocimientos en CSS.
// Puedes explorar mi perfil de <a href="https://github.com/lautaguzman">gitHub</a>  para conocer más sobre este y otros proyectos
