/*

CLOSURE: función que tiene acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse.

Ámbito léxico: cada vez que se declara una función, crea su propio ámbito léxico, y puede acceder a las variables
dentro de ese ámbito y a las variables en ámbitos superiores.

*/

function otherFunction() {
  let outhervarible = 'Hola Mundo.';

  function newFunction() {
    // Es una funcion local que utiliza una variable externa o global.
    console.log(outhervarible);
  }
  return newFunction;
} 

let llamado = otherFunction();
llamado();


// Funcion flexible:
function contador (){
  let count = 0;

  function suma (){
    count++;
    console.log(count);
  }
  return suma;
}

let contadorA = contador();
contadorA();
contadorA();
contadorA();
// Hay que tener cuidado por que en este caso guarda las operacione en diferentes contextos,
// por este motivo el contador se reinicio.
let contadorB = contador();
contadorB();


// Diferentes tipos de contexto:
function other() {
  let mensaje = 'Hola, ';

  function nombre(name) {
    console.log(mensaje + name);
  }
  return nombre;
}

let otraA = other();
let otraB = other();

otraA("David")
otraB("Nicolas")

// Hay que tener cuidado con los CLOSURE para no exederse con el uso de la memoria. 