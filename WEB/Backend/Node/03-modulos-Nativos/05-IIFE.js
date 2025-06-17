const { readFile } = require("node:fs/promises");

// IIFE:
(async () => {
  console.log("Leyendo un archivo...");

  const a = await readFile("./hola.txt", "utf-8");
  console.log("Primer Texto: ", a);

  console.log("----> Haciendo otras operaciones...");

  const b = await readFile("./nuevo.txt", "utf-8");
  console.log("Segundo Texto: ", b);
})();
