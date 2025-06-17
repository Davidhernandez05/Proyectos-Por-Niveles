// constador de bocales:

let vocales = ["a", "e", "i", "o", "u"];

function contadorVocales(word) {
  let contador = 0;

  vocales.map((letra) => {
    for (const letraPalabra of word) {
      if (letraPalabra === letra) {
        contador++;
      } else {
        contador = contador;
      }
    }
  });
  return contador;
}

let palabra = "Hernandez";

let resultado = contadorVocales(palabra.toLowerCase());
console.log(`La palabra/frase: ${palabra}, cuenta con: ${resultado} vocales.`);
