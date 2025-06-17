/*
 * Crea una función que reciba dos cadenas de texto casi iguales,
 * a excepción de uno o varios caracteres.
 * La función debe encontrarlos y retornarlos en formato lista/array.
 * - Ambas cadenas de texto deben ser iguales en longitud.
 * - Las cadenas de texto son iguales elemento a elemento.
 * - No se pueden utilizar operaciones propias del lenguaje
 *   que lo resuelvan directamente.
 *
 * Ejemplos:
 * - Me llamo mouredev / Me llemo mouredov -> ["e", "o"]
 * - Me llamo.Brais Moure / Me llamo brais moure -> [" ", "b", "m"]
 */

function ValidacionDeCadenas(frase1, frase2) {
  const arr = [];

  for (let i = 0; i < frase1.length; i++) {
    if (frase1[i] !== frase2[i]) {
      arr.push(frase2[i]);
    }
  }
  return arr;
}

function validacionDeLongitud(text1, text2) {
  if (text1.length === text2.length) {
    return true;
  } else {
    return false;
  }
}

const texto1 = "Me llamo.Brais Moure";
const texto2 = "Me llamo brais moure";

if (validacionDeLongitud(texto1, texto2)) {
  const resultado = ValidacionDeCadenas(texto1, texto2);
  console.log(resultado);
} else {
  console.log("Las cadenas de texto no tienen la misma longitud.");
}
