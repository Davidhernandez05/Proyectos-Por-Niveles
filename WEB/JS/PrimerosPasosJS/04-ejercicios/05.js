/**
 * Crear un algoritmo que regrese el numero 
 * mayor y el numero menor de un array.
 */

let numeros = [1, 20, -10, 100, 200, -1000];

function mayorMenor(arr) {
  
  let numeroMenor = arr[0];
  let numeroMayor = arr[0];
  
  for (let i of arr ) {
    if (i > numeroMayor) {
      numeroMayor = i;
    }

    if (i < numeroMenor) {
      numeroMenor = i;
    }
  }

  return [numeroMenor, numeroMayor];
}

let resultado = mayorMenor(numeros);
console.log(resultado);