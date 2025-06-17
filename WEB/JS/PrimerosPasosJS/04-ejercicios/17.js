// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios
// 1. Crea un bucle que imprima los números del 1 al 20

const { markAsUncloneable } = require("worker_threads");

contador = 1;
while (contador <= 20) {
  console.log(contador);
  contador++;
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0;
for (let j = 1; j <= 100; j++) {
  suma += j;
}
console.log(`La suma de los números del 1 al 100 es: ${suma}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let k = 1; k <= 50; k++) {
  if (k % 2 === 0) {
    console.log(k);
  }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const nombres = ["David", "Maria", "Juan", "Ana", "Pedro", "Luisa"];

for (const element of nombres) {
  console.log(element);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

const text = "Hola Mundo";
const vocales = "aeiou";

let contadorVocales = 0;
for (const elemento of text) {
  if (vocales.includes(elemento.toLowerCase())) {
    contadorVocales++;
  }
}
console.log(
  `El número de vocales en la cadena de texto es: ${contadorVocales}`
);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const numeros = [1, 2, 3, 4, 5];
let producto = numeros.map((numero) => numero).reduce((a, b) => a * b); // Otra forma de hacerlo
console.log(`El producto de los números del array es: ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let num = 0; num <= 10; num++) {
  resultadoMultiplicacion = 5 * num;
  console.log(`5 x ${num} = ${resultadoMultiplicacion} `);
}
// 8. Usa un bucle para invertir una cadena de texto

const cadena = "Hola Mundo";
let cadenaInvertida = "";
let longitud = cadena.length - 1;

while (longitud >= 0) {
  cadenaInvertida += cadena.charAt(longitud); // charAt() devuelve el carácter en el índice especificado de una cadena.
  longitud--;
}
console.log(cadenaInvertida);
//9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0;
let b = 1;

for (let l = 1; l <= 10; l++) {
  console.log(a);
  let c = a + b;
  a = b;
  b = c;
}
// 10.Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const numeros2 = [5, 50, 15, 3, 35, 45, 10, 25, 30, 40];
const mayoresDe10 = [];

for (const num of numeros2) {
  if (num > 10) {
    mayoresDe10.push(num);
  }
}
console.log(numeros2);
console.log(mayoresDe10);
