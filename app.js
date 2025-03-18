import "./app.scss";

const app = document.getElementById("app");

// Crear contenedor principal
const container = document.createElement("section");
container.classList.add("contact-app");

// Titulo
const title = document.createElement("h1");
title.textContent = "Agenda de Contactos";

// Contenedor para el campo de búsqueda
const searchWrapper = document.createElement("div");
searchWrapper.classList.add("search-wrapper");

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.placeholder = "Buscar contacto...";

const searchIcon = document.createElement("i");
searchIcon.classList.add("material-icons");
searchIcon.textContent = "search";

searchWrapper.appendChild(searchInput);
searchWrapper.appendChild(searchIcon);

// Contenedor de los contactos
const contactListContainer = document.createElement("div");
contactListContainer.classList.add("contact-list");

// Contenedor de los botones
const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("button-wrapper");

const btnPeople = document.createElement("button");
btnPeople.id = "btnPeople";
btnPeople.innerHTML = `<i class="material-icons">person</i> Personas`;

const btnCompanies = document.createElement("button");
btnCompanies.id = "btnCompanies";
btnCompanies.innerHTML = `<i class="material-icons">business</i> Empresas`;

buttonWrapper.appendChild(btnPeople);
buttonWrapper.appendChild(btnCompanies);

// Añadir todo al contenedor principal
container.appendChild(title);
container.appendChild(searchWrapper);
container.appendChild(contactListContainer);
app.appendChild(container);
app.appendChild(buttonWrapper);

// Datos de los contactos
const contactData = {
    personas: [
        { id: 1, nombre: "Andrés Romero", telefono: "tel: 654987321", correo: "email: andres.romero@example.com" },
        { id: 2, nombre: "Lucía García", telefono: "tel: 699112233", correo: "email: lucia.garcia@example.com" },
        { id: 3, nombre: "David Sánchez", telefono: "tel: 671234567", correo: "email: david.sanchez@example.com" }
    ],
    empresas: [
        { id: 1, nombre: "Tech Solutions", telefono: "tel: 912345678", correo: "email: contacto@techsolutions.com", direccion: "Direccion: Av. Innovación, 45" },
        { id: 2, nombre: "Global Ventures", telefono: "tel: 923456789", correo: "email: info@globalventures.com", direccion: "Direccion: Calle Empresarial, 23" },
        { id: 3, nombre: "Servicios Creativos", telefono: "tel: 934567890", correo: "email: contacto@servicioscreativos.com", direccion: "Direccion: Calle Creatividad, 10" }
    ],
};

let currentCategory = "personas"; // Categoría por defecto

// Función para mostrar los contactos
function showContacts() {
    const contacts = contactData[currentCategory];
    const isBusiness = currentCategory === "empresas";

    contactListContainer.innerHTML = window.innerWidth > 768
        ? renderTable(contacts, isBusiness)
        : renderList(contacts, isBusiness);
}

// Función para renderizar la lista de contactos
function renderList(contacts, isBusiness) {
    let html = `<div class="contact-list-items">`;

    contacts.forEach(contact => {
        html += `
        <div class="contact-item">
          <div class="contact-info">
            <strong>${contact.nombre}</strong>
            <span class="contact-phone">${contact.telefono}</span>
          </div>
          <div class="contact-details">
            <div><i class="material-icons">email</i> ${contact.correo}</div>
            ${isBusiness
                ? `<div><i class="material-icons">location_on</i> ${contact.direccion}</div>`
                : ''
            }
            <div class="contact-actions">
              <a href="${contact.telefono}"><i class="material-icons">phone</i></a>
              <a href="#" class="edit-contact" data-id="${contact.id}">
                <i class="material-icons">edit</i>
              </a>
              <a href="#" class="delete-contact" data-id="${contact.id}">
                <i class="material-icons">delete</i>
              </a>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
}

// Función para renderizar la tabla de contactos
function renderTable(contacts, isBusiness) {
    let html = `
      <table class="contact-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
            ${isBusiness ? `<th>Dirección</th>` : ""}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
    `;

    contacts.forEach(contact => {
        html += `
        <tr>
          <td>${contact.nombre}</td>
          <td>${contact.telefono}</td>
          <td>${contact.correo}</td>
          ${isBusiness ? `<td>${contact.direccion}</td>` : ""}
          <td>
            <a href="#" class="edit-contact" data-id="${contact.id}">
              <i class="material-icons">edit</i>
            </a>
            <a href="#" class="delete-contact" data-id="${contact.id}">
              <i class="material-icons">delete</i>
            </a>
          </td>
        </tr>
      `;
    });

    html += `
        </tbody>
      </table>
    `;

    return html;
}

// Manejadores de eventos para los botones
btnPeople.addEventListener("click", () => {
    currentCategory = "personas";
    showContacts();
});

btnCompanies.addEventListener("click", () => {
    currentCategory = "empresas";
    showContacts();
});

// Cargar los contactos iniciales
showContacts();
