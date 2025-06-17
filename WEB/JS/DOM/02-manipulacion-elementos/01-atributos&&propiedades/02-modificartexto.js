// 1ra forma de modificar un texto

const titulo = document.querySelector("#titulo"); //Seleccionamos el item por el ID
console.log(titulo);
console.dir(titulo); // Nos permite visualizar todas las propiedades.

// let nombre = prompt("Ingresa tu nombre: ");
let nombre = "David";
const newtittle = (titulo.textContent = "Bienvenido: " + nombre);

//Segunda forma de modificar un texto:
