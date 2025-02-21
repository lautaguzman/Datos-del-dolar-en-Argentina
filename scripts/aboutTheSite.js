// FUNCION PARA RENDERIZAR ABOUT THE SITE EN EL CONTENEDOR DE FUNCIONES DE LOS ITEMS
function aboutTheSite() {
  navItemsContainer.style.display = "none";

  functionNavItemsContainer.style.display = "flex";

  functionNavItemsContainer.innerHTML = "";

  functionNavItemsContainer.append(closeFunctionNav);

  const aboutTheSiteContainer = document.createElement("div");
  aboutTheSiteContainer.className = "about-the-site-container";
  aboutTheSiteContainer.innerHTML = `
  <article>
  <p>esta página permite consultar el valor de compra y venta del dólar en argentina, mostrando información detallada sobre cada tipo dólar disponible.</p>
  </article>

  <article> 
  <p>incluye una calculadora de conversión de moneda para realizar cambios de ars a usd y viceversa, facilitando la consulta rápida de valores actualizados.
  los datos se obtienen en tiempo real a través de una <a href="https://dolarapi.com/docs/">api</a> externa, asegurando precisión y actualidad en la información proporcionada.</p>
  </article>

  <article>
  <p>esta página fue desarrollada por lautaro guzmán. puedes explorar mi perfil de <a href="https://github.com/lautaguzman">gitHub</a> para conocer más sobre este y otros proyectos.</p>
  </article>`;

  functionNavItemsContainer.append(aboutTheSiteContainer);
}
