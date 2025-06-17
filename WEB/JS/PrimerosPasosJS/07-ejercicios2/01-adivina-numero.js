const numero = Math.floor(Math.random() * 100 + 1);
console.log(numero);

let numeroJugador = 0;

while (numeroJugador !== numero) {

  numeroJugador = parseInt(prompt('Ingresa un numero entre el 1 y el 100: ')); //prompt -> Pide ingresar al usuario algo por pantalla.

  if (numeroJugador === numero) {
    console.log('correcto en número es: ' + numero);
    break;
  }
  else if (numero < numeroJugador) {
    console.log(`El numero ${numeroJugador}, es mayor.`)
  }
  else if (numero > numeroJugador) {
    console.log(`El numero ${numeroJugador}, es menor.`)
  }
  else {
    console.log('Incorrecto el número no es: ' + numeroJugador);
  }
}
console.log('Fin del juego.');