// FUNCION CONTACTO
function contact() {
  navItemsContainer.style.display = "none";

  functionNavItemsContainer.style.display = "flex";

  functionNavItemsContainer.innerHTML = "";

  functionNavItemsContainer.append(closeFunctionNav);

  const contactContainer = document.createElement("div");
  contactContainer.className = "contact-container";
  functionNavItemsContainer.append(contactContainer);

  const contactHeader = document.createElement("div");
  contactHeader.className = "contact-header";

  const descriptionContact = document.createElement("h4");
  descriptionContact.innerText =
    "si querés ponerte en contacto conmigo, podés hacerlo a través de mis redes";
  contactHeader.append(descriptionContact);

  const contactNetworks = document.createElement("div");
  contactNetworks.className = "contact-networks";
  contactContainer.append(contactHeader, contactNetworks);

  // ARRAY QUE CONTIENE LOS NOMBRE E ICONOS DE MIS REDES
  const socialNetworks = [
    {
      name: "gmail",
      icon: '<i class="fa-regular fa-envelope fa-xl" style="color: rgb(41, 103, 92);"></i>',
    },
    {
      name: "github",
      icon: '<i class="fa-brands fa-square-github fa-xl" style="color: #24292e;"></i>',
    },
    {
      name: "linkedin",
      icon: '<i class="fa-brands fa-linkedin fa-xl" style="color: #0077b5;"></i>',
    },
    {
      name: "instagram",
      icon: '<i class="fa-brands fa-square-instagram fa-xl" style="color: #e1306c;"></i>',
    },
  ];

  // ARRAY DE FUNCIONES DE CONTACTO
  const functionContact = [
    () =>
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=lautaguzman21@gmail.com`,
        "_blank"
      ),
    () => window.open(`https://github.com/lautaguzman`),
    () => window.open(`https://www.linkedin.com/in/lautaro-guzman-8841431b8/`),
    () =>
      window.open(
        "https://instagram.com/lautaguzman21?igshid=NzZlODBkYWE4Ng=="
      ),
  ];

  // RECORRO ARRAY PARA MOSTRAR NOMBRE E ICONOS, AGREGO EVENTO Y LE DOY UNA FUNCION A PARTIR DEL INDICE
  socialNetworks.forEach((sn, i) => {
    const infoNetworks = document.createElement("section");

    const nameNetworks = document.createElement("p");
    nameNetworks.innerText = sn.name;

    const iconsNetworks = document.createElement("span");
    iconsNetworks.innerHTML = sn.icon;

    infoNetworks.append(nameNetworks, iconsNetworks);

    infoNetworks.addEventListener("click", functionContact[i]);
    contactNetworks.append(infoNetworks);
  });
}
