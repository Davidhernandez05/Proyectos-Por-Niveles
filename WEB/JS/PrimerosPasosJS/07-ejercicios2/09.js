/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
 */

const num2 = 100;
let fecha = Date.now();
let dosDigitos = (fecha % 90) + 5; // Genera un número entre 10 y 99
let numeros = [];

function random(n1, date) {
  for (let i = 0; i < n1; i++) {
    if (i === date) {
      let numeroFinal = i + 5;
      if (numeroFinal >= 100) {
        return n1;
      } else {
        return numeroFinal;
      }
    }
  }
}

let resultado = random(num2, dosDigitos);
console.log(resultado);

console.log(dosDigitos);
