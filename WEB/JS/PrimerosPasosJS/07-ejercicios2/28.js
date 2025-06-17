/*
 * Crea una función que sea capaz de leer el número representado por el ábaco.
 * - El ábaco se representa por un array con 7 elementos.
 * - Cada elemento tendrá 9 "O" (aunque habitualmente tiene 10 para realizar operaciones)
 *   para las cuentas y una secuencia de "---" para el alambre.
 * - El primer elemento del array representa los millones, y el último las unidades.
 * - El número en cada elemento se representa por las cuentas que están a la izquierda del alambre.
 *
 * Ejemplo de array y resultado:
 * ["O---OOOOOOOO",
 *  "OOO---OOOOOO",
 *  "---OOOOOOOOO",
 *  "OO---OOOOOOO",
 *  "OOOOOOO---OO",
 *  "OOOOOOOOO---",
 *  "---OOOOOOOOO"]
 *
 *  Resultado: 1.302.790
 */

const { format } = require("mysql");

const abanico = [
  "O---OOOOOOOO",
  "OOO---OOOOOO",
  "---OOOOOOOOO",
  "OO---OOOOOOO",
  "OOOOOOO---OO",
  "OOOOOOOOO---",
  "---OOOOOOOOO",
];

function leerAbanico(arr) {
  const numeros = [];
  for (const i of arr) {
    let numero;
    let cuenta = i.split("---");
    cuenta = cuenta[0];
    cuenta = cuenta.split("O"); // Hacemos un split para separar los "O" y obtener el número.
    numero = cuenta.length - 1;
    numeros.push(numero);
  }
  return numeros.join("");
}

const resultado = leerAbanico(abanico);
const resultadoFormateado = new Intl.NumberFormat().format(resultado); // Formateamos el número para que tenga puntos cada 3 dígitos.
console.log(resultadoFormateado);
