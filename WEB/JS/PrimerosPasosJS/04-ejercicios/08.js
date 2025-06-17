/**
 *  Crear un algoritmo que tome un array y de
 * objetos y que devuelva un array de pares.
 */

// Array de objetos:
let arr = [{
  id: 1,
  name: 'Nicolas'
}, {
  id: 2,
  name: 'David'
}, {
  id: 3,
  name: 'Chanchito'
}];

function toPairs(arr){
  let pairs = []

  for (idx in arr){
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
  }
  return pairs
}

let resultado = toPairs(arr);
console.log(resultado);