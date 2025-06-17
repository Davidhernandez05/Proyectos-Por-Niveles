// js -> Por defecto, el tipo de módulo es CommonJS
// mjs -> Por defecto, el tipo de módulo es ESModule
// cjs -> CommonJS
// esm -> ESModule

import { suma, resta } from "./02-suma.mjs"; // Importando el módulo

console.log(suma(2, 3)); // 5
console.log(resta(5, 3)); // 2
