// false
// 0
// ''
// null
// undefolse
// NaN

let nombre = 'Chanchito Feliz.';

//OR:
let userName = nombre || 'Anonimo';
console.log(userName);

//AND:
function fn1(){
  console.log('Soy funcion 1.');
  return false;
}

function fn2(){
  console.log('Soy funcion 2.');
  return true;
}

let z = fn1() && fn2();