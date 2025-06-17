// Es uno de los modulos mas importantes de Node.js
// Permite trabajar con el sistema de archivos
// Permite leer, escribir, eliminar y crear archivos
// Permite trabajar con directorios
// Permite trabajar con rutas

const fs = require("node:fs"); // Importando el módulo fs

const stats = fs.statSync("./hola.txt"); // Obteniendo información del archivo
console.log(
  stats.isFile() ? "Es un archivo" : "No es un archivo",
  stats.isDirectory() ? "Es un directorio" : "No es un directorio",
  stats.isSymbolicLink(),
  stats.size
); // Imprimiendo la información del archivo
