import { dividir, num, Persona } from "./09-ejercicios-modulos.js";
import imporPorDefault from "./09-ejercicios-modulos.js"; // cuando son por default no se les tiene que poner el: {}

// Importa una función

console.log(dividir(2, 2));

// Importa una constante

console.log(num);

// Importa una clase

console.log(Persona);

// Importa una función, una constante y una clase por defecto (en caso de que lo permita)

// console.log(imporPorDefault(2, 2));

const nuevoAuto = new imporPorDefault();
nuevoAuto.acelerar();
