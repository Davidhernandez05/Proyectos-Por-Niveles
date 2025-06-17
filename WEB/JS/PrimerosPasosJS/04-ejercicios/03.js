/**
 * Validar que el indice no sea menor que cero.
 * Que el elemento del indice exista en el array.
 */
function getByIndex(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return 'Elemento no existe.'
  }
  else {
    return arr[idx];
  }
}

let busqueda = getByIndex([1, 2 ,10, 20], 3);
console.log(busqueda);