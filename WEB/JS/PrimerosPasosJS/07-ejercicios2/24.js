/*
 * Crea una función que reciba una expresión matemática (String)
 * y compruebe si es correcta. Retornará true o false.
 * - Para que una expresión matemática sea correcta debe poseer
 *   un número, una operación y otro número separados por espacios.
 *   Tantos números y operaciones como queramos.
 * - Números positivos, negativos, enteros o decimales.
 * - Operaciones soportadas: + - * / %
 *
 * Ejemplos:
 * "5 + 6 / 7 - 4" -> true
 * "5 a 6" -> false
 */

const operacionesPermitidas = ["+", "-", "*", "/", "%"];
const opc = [];

function validacionOperacionMatematica(arr) {
  for (const elemento of arr) {
    if (operacionesPermitidas.includes(elemento)) {
      let resultado = validacionNumeros(elemento);
      return resultado;
    }
  }
}
function validacionNumeros(elemento) {
  const operador = opc.indexOf(elemento);

  // Se valida que desde el index 0 hasta el el index guardado en operador haya un typeof = number
  const numeroIzquierda = opc
    .slice(0, operador)
    .some((value) => typeof value === "number");

  // Se valida que desde el index guardado en operador hasta el ultimo index  haya un typeof = number
  const numeroDerecha = opc
    .slice(operador + 1)
    .some((value) => typeof value === "number");

  return numeroDerecha && numeroIzquierda;
}

function valores(operacion) {
  const numeros = "1234567890";
  for (const i of operacion) {
    if (numeros.includes(i)) {
      let numero = parseInt(i);
      opc.push(numero);
    } else {
      opc.push(i);
    }
  }
}

const operacion = "2 % 2";
valores(operacion);
const resultado = validacionOperacionMatematica(opc);
if (resultado) {
  console.log(operacion);
  console.log("Si, es una expresión matemática");
} else {
  console.log(operacion);
  console.log("No, es una expresión matemática");
}
