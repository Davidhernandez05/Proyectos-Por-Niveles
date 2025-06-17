// Nos permite listar todo lo que se encuentra en la direccion.

const fs = require("node:fs");

fs.readdir(".", (err, files) => {
  if (err) {
    console.error("Error no se pudo leer el directorio.", err);
    return;
  }
  files.forEach((file) => {
    console.log(file);
  });
});
