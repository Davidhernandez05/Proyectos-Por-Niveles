/*
 * Crea un programa que analice texto y obtenga:
 * - Número total de palabras.
 * - Longitud media de las palabras.
 * - Número de oraciones del texto (cada vez que aparecen un punto).
 * - Encuentre la palabra más larga.
 *
 * Todo esto utilizando un único bucle.
 */

function analizartexto(text) {
  let totalPalabras = 1,
    totalotaciones = 0,
    longitudMedia = 0,
    palabraMasLarga = "",
    longitudtotal = 0;
  let palabraActual = "",
    longitudPalabraActual = 0;

  for (const letra of text) {
    if (letra === ".") {
      totalotaciones++;
    }
    if (letra === " ") {
      totalPalabras++;
    }
    if (letra) {
      if (letra !== ".") {
        palabraActual += letra;
        longitudPalabraActual++;
      }
      if (letra === " ") {
        palabraActual = "";
        longitudPalabraActual = 0;
      }
      if (letra !== "." && letra !== " ") {
        longitudtotal++;
      }
    }
    palabraMasLarga =
      palabraMasLarga.length > palabraActual.length
        ? palabraMasLarga
        : palabraActual;
  }

  longitudMedia = longitudtotal / totalPalabras;

  console.log(`Total palabras: ${totalPalabras}`);
  console.log(`Longitud media: ${longitudMedia}`);
  console.log(`Total oraciones: ${totalotaciones}`);
  console.log(`palabra mas larga: ${palabraMasLarga}`);
}

let text = "Hola mundo. Bienvenido.";
analizartexto(text.trimStart().trimEnd()); //Quitar espacios tanto al comienzo como al final de la palabra.
