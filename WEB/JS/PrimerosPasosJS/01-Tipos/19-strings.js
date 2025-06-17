// Strings:

const { type } = require("os");

let myName = "David";
let greeting = "Hola, mi nombre es " + myName + "!";

console.log(greeting); // Hola, mi nombre es David!
console.log(typeof greeting); // string

// Longitud de un string
console.log(greeting.length); // 25

// Acceder a un carácter específico
console.log(greeting[0]); // H
console.log(greeting[1]); // o
console.log(greeting[2]); // l

// Metodos Comunes y muy utiles:
console.log(greeting.toUpperCase()); // Para convertir a mayúsculas
console.log(greeting.toLowerCase()); // Para convertir a minúsculas
console.log(greeting.indexOf("nombre")); // Para buscar la posición de una subcadena - devuelve -1 si no la encuentra
console.log(greeting.lastIndexOf("nombre")); // Para buscar la última posición de una subcadena - devuelve -1 si no la encuentra
console.log(greeting.slice(0, 5)); // Para extraer una subcadena excluye el último valor
console.log(greeting.substring(0, 5)); // Para extraer una subcadena incluye el último valor
console.log(greeting.substr(0, 5)); // Para extraer una subcadena incluye el último valor
console.log(greeting.trim()); // Para eliminar espacios en blanco al principio y al final
console.log(greeting.replace("David", "Brais")); // Para reemplazar una subcadena
console.log(greeting.includes("nombre")); // Para comprobar si una subcadena está presente
console.log(greeting.split(" ")); // Para dividir un string en un array

// template literals:
let mensaje = `Hola, 
mi nombre es ${myName}!`;
console.log(mensaje); // Hola, mi nombre es David!
