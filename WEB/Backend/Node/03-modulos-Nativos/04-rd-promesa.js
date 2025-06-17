//Esto solamente se utiliza en versiones donde no tenemos promesas nativas.
//const { promisify } = require("node:util");
//const readFilePromeses = promisify(fs.readFile);

// Se puede hacer con promesas pero tambien con CallBacks, lo mejor seria utilizar promesas.
const fs = require("node:fs/promises");

console.log("Leyendo archivo...");
fs.readFile("./hola.txt", "utf-8").then((text) => {
  console.log("El texto 1 es: ", text);
});

console.log("-----> Otras Operaciones....");

console.log("Leyendo segundo archivo...");
fs.readFile("./nuevo.txt", "utf-8").then((txt) => {
  console.log("Texto del Seundo Archivo: ", txt);
});
