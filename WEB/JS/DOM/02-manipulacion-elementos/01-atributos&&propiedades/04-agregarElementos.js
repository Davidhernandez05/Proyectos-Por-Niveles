// Selecciona el elemento por su ID (sin el símbolo #)
const contentArea = document.getElementById("contentArea");

// Cambia el contenido interno del elemento
contentArea.innerHTML = "<p>Este es un nuevo párrafo.</p>";

// Inserta un nuevo párrafo al final del contenido existente
contentArea.insertAdjacentHTML("beforeend", "<p>Nuevo párrafo.</p>");

// Lo mismo con: querySelector
const contentarea = document.querySelector("#contentArea");

contentarea.innerHTML = "<p>Este es un nuevo párrafo.</p>";
contentarea.insertAdjacentHTML("beforeend", "<p>Nuevo párrafo.</p>");

//Agregar elementos a la lista:
const listArea = document.getElementById("listArea");

// Esta forma hace que todo se vuelva a renderizar asi no se realice ningun cambio.
listArea.innerHTML += "<li>item 5.</li>";

// En este caso lo mejor seria utilizar el insertAdjacentHTML para que no renderice todo.
listArea.insertAdjacentHTML("beforeend", "<li> item 6.</li>");

//createElement -> Es la mejor forma de agregar elementos:
const newPElement = document.createElement("p"); //-> crea una etiqueta vacia.
newPElement.textContent = "Fui creado con create Element."; // -> Le ingresamos texto a esa etiqueta.
console.log(newPElement);

const conte = document.getElementById("contentArea");
contentArea.append(newPElement); // Inyectamos el elemento en el contendor deseado al final.
//contentArea.prepend(newPElement) -> agrega un elemento al comiezo del elemento
//contentArea.before(newPElement) -> Lo coloca antes de otro elemento
//contentArea.after(newPElement) -> Agrega un elemento despues de otro elemento.

const newitem = document.createElement("li");
newitem.textContent = "Soy un nuevo item";
listArea.prepend(newitem);
