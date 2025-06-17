// Ejercicio basico de manejo de errores con el Throw

function sumInteger(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Solamente se pueden sumar numeros enteros.");
  } else return a + b;
}

try {
  console.log(sumInteger(4, 5));
  console.log(sumInteger(4.5, 5));
  console.log(sumInteger("5", 5));
} catch (Error) {
  console.log("Se produjo un error: ", Error.message);
}
