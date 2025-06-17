// Esto es muuy importante.
// El spread operatior nos descompone el array en uno nuevo. son los tres puntos: ...array

// Nos permite realizar una copia de un array.

const arr = ["Chachito Feliz", "Dragon", "Gato", "Perro"];

const copia = [...arr];

console.log(arr);
console.log(copia);

// Tambien se puede utilizar para combinar arrays:

const animales = ["Gallina", "Leon", "Trigre"];
const union = [...arr, ...animales];

console.log(union);

//agregar elementos al array con spread

const agregar = [...arr, "Nutria", "Leon Marino", "foca"];

console.log(agregar);

// tambien nos permite enviarle parametros a una funcion.

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [10, 20, 30];
const result = sum(...numbers);

console.log(result);
