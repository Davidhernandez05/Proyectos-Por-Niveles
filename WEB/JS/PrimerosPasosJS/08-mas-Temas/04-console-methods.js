// Console

const { Console } = require("console");

// Log: Imprimir por pantalla.
console.log("Hola, JavaScript.");

// Error: Mensaje de error.
console.error("Este es un mensaje de error.");

// warn: Permite mostrar advertencias
console.warn("Este es un mensaje de advertencia.");

// info
console.info("Información adicional.");

// Table

let tabla = [
  ["David", 28],
  ["Sara", 18],
];

console.table(tabla);

tabla = [
  { name: "David", age: 28 },
  { name: "Sara", age: 18 },
];
console.table(tabla);

// Group

console.group("usuario: "); //Abre el grupo.
console.log("Nombre: David");
console.log("Edad 28");
console.groupEnd(); // Cierra el grupo.

// Time: Nos permite saber cuanto tarda en ejecutarse un bloque de codigo.
console.time("Tiempo de ejecución:"); // Se abre el tiempo de ejecucion con un nombre.
for (let i = 0; i < 10000; i++) {}

console.timeEnd("Tiempo de ejecución:"); // se cierra con la mismo nombre con la que se abre.

// assert: Muestra un mensaje de error si lo que se evalua es falso.

let age1 = 17;
console.assert(age1 >= 18, "El usuario debe ser mayor de edad.");

// count:
console.count("Click");
console.count("Click");
console.count("Click");
console.count("Click");
console.countReset("Click");
console.count("Click");

// trace rastrear la ejecucion del codigo, nos muestra lo que a pasado.

function funcA() {
  funcB();
}
function funcB() {
  console.trace("Seguimiento de la ejecucion");
}

funcA();

//Clrear
// console.clear(); // Nos limpia toda la terminal.
