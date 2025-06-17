/*
 * Crea una función que sea capaz de detectar si existe un viernes 13 en el mes y el año indicados.
 * - La función recibirá el mes y el año y retornará verdadero o falso.
 */

function viernestrece(month, year) {
  // Crear una fecha para el día 13 del mes y año especificados
  const fecha = new Date(year, month - 1, 13); // En JS los meses van de 0 a 11, por lo cual se tiene que colocar el -1

  //verifica si el dia de la semana es viernes (5)
  if (fecha.getDay() === 5) {
    return true;
  } else {
    return false;
  }
}

let mes = 1;
let year = 2023;

if (year.toString().length === 4) {
  const resultado = viernestrece(mes, year);

  if (resultado == true) {
    console.log(
      `En el mes ${mes} del año ${year}, Si existe un viernes trece.`
    );
  } else {
    console.log(
      `En el mes ${mes} del año ${year}, No existe un viernes trece.`
    );
  }
} else {
  console.log(`El año ${year}, No es valido`);
}
