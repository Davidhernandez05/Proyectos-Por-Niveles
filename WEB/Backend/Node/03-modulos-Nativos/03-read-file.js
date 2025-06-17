const fs = require("node:fs"); // Importando el módulo fs

// Sincrono
const text = fs.readFileSync("./hola.txt", "utf-8"); // Leyendo el archivo
console.log(text); // Imprimiendo el contenido del archivo

// Asincrono
fs.readFile("./hola.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err); // Imprimiendo el error
  } else {
    console.log(data); // Imprimiendo el contenido del archivo
  }
});
