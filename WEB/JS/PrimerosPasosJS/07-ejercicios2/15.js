/*
 * Crea una función que reciba un número decimal y lo trasforme a Octal
 * y Hexadecimal.
 * - No está permitido usar funciones propias del lenguaje de programación que
 * realicen esas operaciones directamente.
 */
let octal = [];
let hexadecimal = [];
const representacionNumeros = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function deDecimalAOctal(num, arr) {
  let residuo = 0;
  let cociente;

  while (cociente !== 0) {
    if (num >= 8) {
      residuo = num % 8;
      cociente = num / 8;
      num = cociente;

      arr.push(Math.floor(residuo)); // Eliminamos los decimales.
      if (cociente === 0) {
        break;
      }
    } else {
      arr.push(Math.floor(num));
      break;
    }
  }
}

function decimalAHexadecimal(num, arr) {
  let cociente;
  let residuo;

  while (cociente !== 0) {
    residuo = Math.floor(num % 16);
    cociente = Math.floor(num / 16);
    num = cociente;

    if (residuo >= 10 && residuo <= 15) {
      arr.push(representacionNumeros[residuo]);
    } else {
      arr.push(residuo);
    }
    if (cociente === 0) {
      break;
    }
  }
}

const numero = 255;
deDecimalAOctal(numero, octal);
let numeroOctal = octal.reverse().join("");
console.log(`El numero decimal: ${numero}, en octal es: ${numeroOctal}.`);

const num = 255;

decimalAHexadecimal(num, hexadecimal);
console.log(
  `El numero decimal: ${num}, en Hexadecimal es: ${hexadecimal
    .reverse()
    .join("")}`
);
