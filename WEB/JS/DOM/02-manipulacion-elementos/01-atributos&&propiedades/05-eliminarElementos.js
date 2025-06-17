// Eliminar elementos de la forma rapida: elemnto.remove()
const firstItem = document.querySelector("li");
firstItem.remove();

// Eliminar elementos de una forma mas espeficia utilizando el padre.
const list = document.querySelector("ul");
list.removeChild(list.firstElementChild);
