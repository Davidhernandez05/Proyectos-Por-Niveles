/**
 * Crear un algoritmo
 * Que regrese la cantidad de numeros positivos de un array.
 */

let lista = [1, -50, 20, 55, -1000, 100, 200, -20];

function numerosPositivos(arr) {
  let contador = 0;

  for (numero of arr){
    if (numero >= 0){
      contador++;
    }
    else {
      contador = contador;
    }
  }
  return contador;
}

function numerosNegativos(arr) {
  let contador = 0;

  for (numero of arr) {
    if (numero <= 0) {
      contador++;
    }
    else {
      contador = contador;
    }
  }
  return contador;
}

let resultado = numerosPositivos(lista);
console.log(`La cantidad de numeros positivos es: ${resultado}`);

let resultadoNegativos = numerosNegativos(lista);
console.log(`La cantidad de numeros Negativos es: ${resultadoNegativos}`);