import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./hola.txt", "utf-8"),
  readFile("./nuevo.txt", "utf-8"),
]).then(([text, secondtext]) => {
  console.log("Primer texto: ", text),
    console.log("Segundo texto: ", secondtext);
});
