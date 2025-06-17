/**
 * Crear un array de longitud N,
 * Y que sus elementos sean de numeros hasta N
 */

let longitud = 5;

function crearArray(numero) {
  let arr = [];

  if (numero <= 0) {
    return [];
  }

  for (let i = 0; i <= numero; i++) {
    arr[i] = i;
  }
  return arr;
}

let result = crearArray(longitud);
console.log(result);