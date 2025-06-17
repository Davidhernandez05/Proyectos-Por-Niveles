// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

const { text } = require("stream/consumers");

// 1. Crea una función que reciba dos números y devuelva su suma

function sumaNumeros(num1, num2) {
  return num1 + num2;
}
console.log(sumaNumeros(5, 10)); // 15

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const numeros = [1, 2, 3, 4, 5];
function numeroMayor(arr) {
  // los ... son el spread operator
  return Math.max(...arr); // Usamos el spread operator para pasar los elementos del array como argumentos
}
console.log(numeroMayor(numeros)); // 5

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function contarVocales(texto) {
  const vocales = "aeiou";
  let conteoVocales = 0;
  for (const letra of texto) {
    if (vocales.includes(letra.toLowerCase())) {
      conteoVocales++;
    }
  }
  return conteoVocales;
}

console.log(contarVocales("Hola Mundo")); // 4

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const nombres = ["David", "Maria", "Juan", "Ana", "Pedro", "Luisa"];

function mayusculas(arr) {
  return arr.map((elemento) => elemento.toUpperCase());
}

console.log(mayusculas(nombres));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function validacion(num) {
  if (num !== 1) {
    if (primo(num)) {
      console.log("Es primo.");
    } else {
      console.log("No es primo.");
    }
  } else console.log("No es primo.");
}

function primo(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

validacion(7); // Es primo
validacion(8); // No es primo

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

function elementosComunes(arr1, arr2) {
  return arr1.filter((elemento) => arr2.includes(elemento));
}
console.log(elementosComunes(array1, array2)); // [4, 5]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumarPares(arr) {
  let sumaNumerospares = 0;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      sumaNumerospares += element;
    }
  });
  return sumaNumerospares;
}

console.log(sumarPares(numeros2)); // 30

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const numeros3 = [1, 2, 3, 4, 5];

function elevarAlCuadrado(arr) {
  return arr.map((element) => element ** 2);
}

console.log(elevarAlCuadrado(numeros3)); // [1, 4, 9, 16, 25]
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertirCadena(text) {
  let textoInvertido = "";
  for (let i = text.length - 1; i >= 0; i--) {
    textoInvertido += text[i];
  }
  return textoInvertido;
}

let resultado = invertirCadena("Hola Mundo");
console.log(resultado); // odnuM aloH

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

function factorial2(num) {
  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}
console.log(factorial(5)); // 120
console.log(factorial2(5)); // 120
