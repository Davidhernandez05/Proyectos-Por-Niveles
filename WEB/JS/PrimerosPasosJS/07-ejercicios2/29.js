/*
 * Crea una función que calcule el número de la columna de una hoja de Excel
 * teniendo en cuenta su nombre.
 * - Las columnas se designan por letras de la "A" a la "Z" de forma infinita.
 * - Ejemplos: A = 1, Z = 26, AA = 27, CA = 79.
 */

function calcularColumna(columna) {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let resultado = 0;
  let potencia = 0;

  for (let i = columna.length - 1; i >= 0; i--) {
    const letra = columna[i];
    const indice = letras.indexOf(letra) + 1;
    resultado += indice * Math.pow(26, potencia);
    potencia++;
  }

  return resultado;
}

const columna = "CA";
const resultado = calcularColumna(columna);
console.log(resultado);
