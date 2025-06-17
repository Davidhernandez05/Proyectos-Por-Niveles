/*
 * Crea una función que dibuje una escalera según su número de escalones.
 * - Si el número es positivo, será ascendente de izquiera a derecha.
 * - Si el número es negativo, será descendente de izquiera a derecha.
 * - Si el número es cero, se dibujarán dos guiones bajos (__).
 */

function escaleras(num) {
  let ascendente = " ";
  const escalon = "_|";
  const piso = "_";
  const otroEscalon = "|_";

  if (num > 0) {
    for (let i = num; i >= 0; i--) {
      if (i == num) {
        console.log(ascendente.repeat(i + (i - 1)), piso);
      } else if (i > 1 && i < num) {
        console.log(ascendente.repeat(i + (i - 1)), escalon);
      } else if (i === 0) {
        console.log(ascendente, escalon);
      }
    }
  } else if (num === 0) {
    console.log(piso.repeat(2));
  } else {
    num = Math.abs(num);
    for (let j = 0; j <= num; j++) {
      if (j === 0) {
        console.log(ascendente.repeat(j + (j + 1)), piso);
      } else if (j >= 1 && j < num) {
        console.log(ascendente.repeat(j + j), otroEscalon);
      } else {
        console.log(piso);
      }
    }
  }
}
let numero = 4;
escaleras(numero);
