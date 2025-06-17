// Este es el mas recomendado.
import { readFile } from "node:fs/promises";

console.log("Leyendo Archivo 1...");
const text1 = await readFile("./hola.txt", "utf-8");
console.log("Primer texto: ", text1);

console.log("-----> Otras instrucciones....");

console.log("Leyendo segundo archivo...");
const text2 = await readFile("./nuevo.txt", "utf-8");
console.log("Segundo texto: ", text2);
