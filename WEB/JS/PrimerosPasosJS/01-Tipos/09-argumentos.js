
//Funciones que solicita un valor por parametro.
function restar(num, num2){
  return num - num2;
}
let numero = 3
let result = restar(numero, 2);
console.log(result);


//Las funciones pueden recibir multiples argumentos o parametros:
function suma(num3, num4) {
  console.log(arguments);
  return num3 + num4;
}
let resultado = suma(5, 6, 1, 9);
console.log(resultado);
console.log(typeof suma);