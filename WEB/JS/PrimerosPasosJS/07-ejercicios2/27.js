/*
 * Los primeros dispositivos móviles tenían un teclado llamado T9
 * con el que se podía escribir texto utilizando únicamente su
 * teclado numérico (del 0 al 9).
 *
 * Crea una función que transforme las pulsaciones del T9 a su
 * representación con letras.
 * - Debes buscar cuál era su correspondencia original.
 * - Cada bloque de pulsaciones va separado por un guión.
 * - Si un bloque tiene más de un número, debe ser siempre el mismo.
 * - Ejemplo:
 *     Entrada: 6-666-88-777-33-3-33-888
 *     Salida: MOUREDEV
 */

const teclado = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

function menjaseT9(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1" || arr[i] === "0") {
      arr[i] = " ";
    }
    let numero = arr[i]; // guardamos el número en una variable
    let letras = teclado[numero[0]]; // guardamos las letras correspondientes al número en una variable

    if (numero.length > 1) {
      let repeticiones = numero.length;
      arr[i] = letras[repeticiones - 1]; // -1 porque los arrays empiezan en 0.
    } else {
      arr[i] = letras[0];
    }
  }
}

const texto = "3-2-888-444-3";
const mensaje = texto.split("-"); // creamos un array con los elementos separados por el guión.
let msn = menjaseT9(mensaje);
msn = mensaje.join(""); // unimos los elementos del array en un string.

console.log(`El mensaje es: ${msn}`);
