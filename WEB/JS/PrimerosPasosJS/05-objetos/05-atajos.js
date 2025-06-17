// Atajos Constructores:

let obj = {};
let obj2 = new Object();

/**
 * new array(); -> []
 * new string(); -> "" - '' - ``
 * new number(); -> 12
 * new boolean(); -> true - false
 */

function Nombre() {
  this.name = 'Chanchito Feliz'
}

let user = new Nombre();
console.log(user.constructor);