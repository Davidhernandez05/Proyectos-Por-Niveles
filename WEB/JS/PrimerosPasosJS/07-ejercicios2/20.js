/*
 * Crea una función que dibuje una espiral como la del ejemplo.
 * - Únicamente se indica de forma dinámica el tamaño del lado.
 * - Símbolos permitidos: ═ ║ ╗ ╔ ╝ ╚
 *
 * Ejemplo espiral de lado 5 (5 filas y 5 columnas):
 * ════╗
 * ╔══╗║
 * ║╔╗║║
 * ║╚═╝║
 * ╚═══╝
 */

function dibujarEspiral(lado) {
  // Crear una matriz vacía de lado x lado
  // fill(" ") -> hace que todos los valores interiores tomen el valor indicado en el fill
  // Array.from() es un método estático que crea un nuevo array a partir de un objeto iterable o similar a un array.

  const matriz = Array.from({ length: lado }, () => Array(lado).fill(" "));

  // Definir los límites de la espiral
  let inicioFila = 0,
    finFila = lado - 1;
  let inicioCol = 0,
    finCol = lado - 1;

  // Símbolos a utilizar
  const simbolos = {
    horizontal: "═",
    vertical: "║",
    esquinaSuperiorDerecha: "╗",
    esquinaSuperiorIzquierda: "╔",
    esquinaInferiorDerecha: "╝",
    esquinaInferiorIzquierda: "╚",
  };
  let indicador = true;

  // Llenar la matriz con la espiral
  while (inicioFila <= finFila && inicioCol <= finCol) {
    // Dibujar la fila superior (de izquierda a derecha)
    for (let i = inicioCol; i <= finCol; i++) {
      matriz[inicioFila][i] = simbolos.horizontal;
    }
    matriz[inicioFila][finCol] = simbolos.esquinaSuperiorDerecha;
    indicador = false;

    // Dibujar la columna derecha (de arriba a abajo)
    for (let i = inicioFila + 1; i <= finFila; i++) {
      matriz[i][finCol] = simbolos.vertical;
      indicador = true;
    }
    if (indicador) {
      matriz[finFila][finCol] = simbolos.esquinaInferiorDerecha;
    }

    // Dibujar la fila inferior (de derecha a izquierda)
    if (inicioFila < finFila) {
      for (let i = finCol - 1; i >= inicioCol; i--) {
        matriz[finFila][i] = simbolos.horizontal;
      }
      matriz[finFila][inicioCol] = simbolos.esquinaInferiorIzquierda;
    }

    // Dibujar la columna izquierda (de abajo a arriba)
    if (inicioCol < finCol) {
      for (let i = finFila - 1; i > inicioFila; i--) {
        matriz[i][inicioCol] = simbolos.vertical;
      }
      matriz[inicioFila + 1][inicioCol] = simbolos.esquinaSuperiorIzquierda;
    }

    // Ajustar los límites para la siguiente vuelta de la espiral
    inicioFila++;
    finFila--;
    inicioCol++;
    finCol--;
  }

  // Imprimir la matriz
  for (const fila of matriz) {
    console.log(fila.join(""));
  }
}
dibujarEspiral(5);
