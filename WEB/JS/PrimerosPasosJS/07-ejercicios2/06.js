/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */

//Pares:
function par(num) {
  if (num % 2 === 0) {
    console.log(`Es par`);
  } else {
    console.log(`No es par`);
  }
}

//Primos:
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

//Fibonacci:
function Fibonacci(num) {
  let numeroInicial = 0;
  let segundoNumero = 1;

  while (segundoNumero < num) {
    let tercerNumero = segundoNumero + numeroInicial;
    numeroInicial = segundoNumero;
    segundoNumero = tercerNumero;
  }
  if (segundoNumero === num || num === 0) {
    console.log("Es fibonacci.");
  } else {
    console.log("No es fibonacci.");
  }
}

let numero = 7;
console.log(`El numero ${numero}:`);
const elNumeroEsPar = par(numero);
const elNumeroEsPrimo = validacion(numero);
const elNumeroEsFibonacci = Fibonacci(numero);
