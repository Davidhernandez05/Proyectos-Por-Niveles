/*
 * Crea un programa que encuentre y muestre todos los pares de números primos
 * gemelos en un rango concreto.
 * El programa recibirá el rango máximo como número entero positivo.
 *
 * - Un par de números primos se considera gemelo si la diferencia entre
 *   ellos es exactamente 2. Por ejemplo (3, 5), (11, 13)
 *
 * - Ejemplo: Rango 14
 *   (3, 5), (5, 7), (11, 13)
 */

function primo(num) {
  // Verificamos divisibilidad desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true; // Si no es divisible por ningún número, es primo
}

function listadoNumeros(num) {
  const numerosPrimos = [];

  for (let i = 1; i <= num; i++) {
    if (i !== 1) {
      if (primo(i)) {
        numerosPrimos.push(i);
      }
    }
  }
  gemelosPirmos(numerosPrimos);
}

function gemelosPirmos(numerosPrimos) {
  let num2;
  numerosPrimos.map((num) => {
    if (num2 + 2 == num) {
      console.log(`(${num2}, ${num})`);
      num2 = num;
    } else {
      num2 = num;
    }
  });
}

const numero = 14;
listadoNumeros(numero);
