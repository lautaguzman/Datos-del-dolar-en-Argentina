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

  const descriptionSite = document.createElement("p");
  descriptionSite.innerHTML = `el objetivo principal de este proyecto es brindar información actualizada sobre el valor del dólar en argentina, incluyendo las distintas cotizaciones existentes y su descripción detallada. los datos se obtienen en tiempo real a través de una <a href="https://dolarapi.com/docs/">api</a> externa, lo que permite mostrar información precisa y actualizada.
además de ofrecer información sobre las cotizaciones, el sitio incluye una calculadora de conversión de moneda para convertir de ars a usd y viceversa, facilitando la consulta rápida de los valores de cambio.
este proyecto surgió como parte de mi proceso de aprendizaje continuo en desarrollo web. me propuse el desafío de implementar nuevas herramientas y conceptos, como el consumo de una API que desconocía, la gestión de ramas en gitHub y el desarrollo de funciones en javaScript, como asi también profundicé mis conocimientos en CSS.
Puedes explorar mi perfil de <a href="https://github.com/lautaguzman">gitHub</a>  para conocer más sobre este y otros proyectos`;

  infoSiteContainer.append(closeInfoSite, descriptionSite);
}
