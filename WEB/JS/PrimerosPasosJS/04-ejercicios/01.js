// Cual numero es mayor:

let num1 = 6;
let num2 = 6;

function numeroMayor(numero1, numero2) {
  if (numero1 > numero2) {
    return console.log(`El numero ${numero1} es mayor que el numero ${numero2}.`);
  }
  else if (numero1 < numero2) {
    return console.log(`El numero ${numero2}, es mayor que el numero ${numero1}.`)
  }
  else {
    return console.log('Los numeros son iguales.')
  }
}

let resultado = numeroMayor(num1, num2);