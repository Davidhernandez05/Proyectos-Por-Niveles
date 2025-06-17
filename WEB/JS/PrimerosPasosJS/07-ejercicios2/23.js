/*
 * Crea un programa que detecte cuando el famoso "Código Konami" se ha introducido correctamente
 * desde el teclado. Si sucede esto, debe notificarse mostrando un mensaje en la terminal.
 */

const codigo = ["arriba", "abajo", "izquierda", "derecha", "b", "a"];
const codigoUsuario = [];

// push en el array codigoUsuario
function codigoKonami(codigoIngresadoUsuario) {
  // Si la palabra ingresada por teclado no existe en el codigo no la sube a nuestro array
  if (codigo.includes(codigoIngresadoUsuario)) {
    codigoUsuario.push(codigoIngresadoUsuario);
  }
}

function validacionCodigo(arr) {
  const konami =
    "arriba, arriba, abajo, abajo, izquierda, derecha, izquierda, derecha, b, a";

  const codigoFinal = arr.join(", ");

  // Verificamos si el codigo konami se activo o no
  if (codigoFinal === konami) {
    console.log("Se utilizo el codigo Konami");
    console.log(codigoFinal);
  } else {
    console.log("No se activo el codigo Konami");
    console.log(codigoFinal);
  }
}

let validacion = true;
let codigoIngresadoUsuario = "";

// Hacemos un ciclo hasta que el usuario ingrese start.
while (validacion) {
  codigoIngresadoUsuario = prompt("Ingresa codigo");

  if (codigoIngresadoUsuario !== "start") {
    console.log(codigoIngresadoUsuario);
    codigoKonami(codigoIngresadoUsuario.toLowerCase());
    validacion = true;
  } else {
    validacion = false;
  }
}
let validarCodigo = validacionCodigo(codigoUsuario);
