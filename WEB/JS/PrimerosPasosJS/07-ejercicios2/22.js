/*
 * Crea un programa que realize el cifrado César de un texto y lo imprima.
 * También debe ser capaz de descifrarlo cuando así se lo indiquemos.
 *
 * Te recomiendo que busques información para conocer en profundidad cómo
 * realizar el cifrado. Esto también forma parte del reto.
 */

const { text } = require("stream/consumers");

function cifradoCesar(text, num, cifrar = true) {
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Abcedario
  const longitud = alfabeto.length; //Longitud del Abcedario incia en 0

  let resultado = "";

  for (let i = 0; i < text.length; i++) {
    let caracter = text[i]; //Tomamos caracter del text y lo ingresamos en la variable.

    // Validamos si el caracter existe en nuestro alfabero.
    if (alfabeto.includes(caracter)) {
      const posicionActual = alfabeto.indexOf(caracter); //Sacamos el index del caracter en el alfabeto

      let nuevaPosicion;

      // Validamos si queremos cifrar o no
      if (cifrar) {
        //El módulo se usa para asegurar que, si el desplazamiento excede la longitud del alfabeto, se vuelva a empezar desde el principio.
        nuevaPosicion = (posicionActual + num) % longitud;
      } else {
        //Se suma longitudAlfabeto antes de aplicar el módulo para evitar resultados negativos.
        //El módulo asegura que el resultado esté dentro del rango del alfabeto.
        nuevaPosicion = (posicionActual - num + longitud) % longitud;
      }
      // Agregamos cada caracter a nuestro resultado.
      resultado += alfabeto[nuevaPosicion];

      //En caso de no existir va a dejar el caracter igual que como estaba en el texto.
    } else {
      resultado += text[i];
    }
  }
  return resultado;
}

const frase = "Hola Mundo, Soy david.";
const num = 22;
const cifrar = true;
const fraseCifrada = cifradoCesar(frase.toUpperCase(), num, cifrar);

console.log(frase);
console.log(fraseCifrada);
