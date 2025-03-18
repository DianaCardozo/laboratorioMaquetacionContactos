/* Fuentes y Estilos Generales */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #101010;
  color: #f0f0f0;
  text-align: center;
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  max-width: 450px;
  margin: auto;
  background: #212121;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

/* Barra de búsqueda */
.buscar-container {
  display: flex;
  align-items: center;
  background: #333333;
  padding: 8px;
  border-radius: 8px;/
}

.buscar-container input {
  flex: 1;
  padding: 10px;
  border: none;
  background: transparent;
  color: #f0f0f0;
  outline: none;
  font-size: 14px;
}

.buscar-container i {
  color: #f0f0f0;
  margin-left: 8px;
  font-size: 18px;
}

.buscar-container i:hover {
  color: #7c4dff;
}

/* Lista de contactos */
.contacts-list {
  margin-top: 15px;
}

.contacts-list .contact {
  background: #333333;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;
}

.contacts-list .contact:hover {
  transform: translateY(-5px);
  /* Efecto de hover */
  background-color: #4a4a6a;
  /* Cambio de color al pasar el mouse */
}

.contacts-list .contact .contact-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.contacts-list .contact .contact-header strong {
  font-size: 18px;
  font-weight: 600;
}

.contacts-list .contact .contact-header .phone {
  font-size: 14px;
  color: #bbb;
}

.contacts-list .contact .contact-details {
  display: none;
  padding-top: 12px;
  text-align: left;
  color: #ccc;
}

.contacts-list .contact .contact-details i {
  margin-right: 8px;
}

.contacts-list .contact.active .contact-details {
  display: block;
}

/* Botones fijos */
.buttons {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #212121;
  padding: 12px 0;
}

.buttons button {
  flex: 1;
  background: #7c4dff;
  /* Color de fondo de los botones */
  border: none;
  color: white;
  padding: 14px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s;
}

.buttons button:hover {
  background: #5e35b1;
  /* Color del hover más oscuro */
  transform: translateY(-4px);
  /* Efecto de hover */
}

.buttons button i {
  margin-right: 10px;
}

/* Iconos */
i.material-icons {
  color: white;
  margin-left: 5px;
}

i.material-icons:hover {
  color: #7c4dff;
  /* Color vibrante en hover */
}

/* Estilos responsivos */
@media (min-width: 768px) {
  #app {
    display: flex;
    min-height: 100vh;
    align-items: stretch;
    justify-content: flex-start;
  }

  .buttons {
    position: static;
    order: 1;
    width: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    background: #7c4dff;
    /* Fondo vibrante para los botones en dispositivos grandes */
  }

  .buttons button {
    width: auto;
    margin-bottom: 10px;
    flex: none;
  }

  .container {
    order: 2;
    flex: 1;
    height: 100vh;
    overflow-y: auto;
  }
}
