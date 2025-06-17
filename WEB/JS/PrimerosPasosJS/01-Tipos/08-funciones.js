/**
 * Son muy importantes y siempre se van a utilizar.
 * 
 * Son listados de instrucciones que se deben ejecutar.
 *  
 * 
 *  1. Pasar una funcion como argumento -> callback.
 *  2. Tambien se pueden retornar funciones.
 *  3. Tambien se pueden asignar funciones a variables -> En este caso no se le coloca nombre a la funcion 
 *  y esta tomaria el nombre de la varibale. -> Expresion de funcion.
 *  4. Pueden tener propiedades y metodos.
 *  5. Anidar funciones. -> Nested Functions
 */

//declarar una funcion:
function saludar() {
  let nombre = 'Hola mundo'
  console.log(nombre);
}
//Llamar una funcion:
saludar();

//Funciones que retorna un valor:
function suma() {
  return 2 + 3;
}
let resultado = suma();
console.log(resultado);

// Metodos -> Son funciones que se encuentran dentro de objetos
// Los metodos se llaman así: nombreobjeto.nombreFuncion La cual ya seria un metodo.