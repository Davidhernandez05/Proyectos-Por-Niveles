// Funciones Avanzadas.

/**
 * Ciudadanos de primera clase:
 * Son Entidades que se pueden tratar como cualquier valor del lenguaje.
 * Se pueden almacenar en variables const y objetos.
 * Se pueden pasar como parametros.
 * Se pueden retornar.
 */
const greet = function (name) {
  console.log(`Hola, ${name}.`);
};

greet("David");

function processGreeting(greetFuntion, name) {
  greetFuntion(name);
}
processGreeting(greet, "David");

function returnGreeting() {
  return greet;
}

const greet2 = returnGreeting();
greet2("Ricardo");

// Arrow functions advanzed:

// - Retorno Implicito:
const multiplicar = (a, b) => a * b;
console.log(multiplicar(2, 2));

// - this léxico:
const handler = {
  name: "Onix",
  greeting() {
    console.log(`Hola, ${this.name}.`);
    // this en este caso si nos permite hacer referencia a la clase por lo cual si nos regresa el valor.
  },
  arrowGreeting: () => {
    console.log(`Hola, ${this.name}.`); // No reconoce la propiedad this.name la funcion de flecha.
  },
};

handler.greeting();
handler.arrowGreeting();

// IIFE: (Expresion de funcion invocada inmediatamente)
// Se ejecutan en el momento en el que se definan.
// Las IIFE: Nos ayudan a ejecutar un codigo en concreto y no contaminar el ambito global.

// - IIFE Clasico
// En caso de que no funcione se tiene que identidicar que es completamente independiente de lo demas.
(function () {
  console.log(" - IIFE Clasico.");
})();

// IIFE como si fuera una Arrow Function
(() => {
  console.log(" - IIFE con Arrow Function.");
})();

// Parametros REST: (...)
// Esto nos funciona si no sabemos el numero de parametros que queremos pasar.
function sum(...numbers) {
  let resultado = 0;
  for (let number of numbers) {
    resultado += number;
  }
  console.log(resultado);
  return resultado;
}
sum(1, 2, 3, 4, 5);
sum(10, 15);

// Operador Spread (...)
// Espandir los elementos de un array u otras estructuras.
// Desenpaqueta un array. -> toma los valores interiores por separado.
const numbers = [2, 2, 3];
function sumWithSpread(a, b, c) {
  return a + b + c;
}

console.log(sumWithSpread(1, 2, 3)); // Sin Spread.
console.log(sumWithSpread(...numbers)); // Con Spread

// Closures: (Clausuras)
// Es una caracteristica muy importante.
// Ocurre cuando una funcion interna a otra accede a variables de la funcion externa.
function createdCounter() {
  let counter = 0;
  return function () {
    counter++;
    console.log(`contador: ${counter}`);
  };
  // De esta forma no se pierde el valor de una funcion externa.
  // Nos permite encapsular datos y recordar los estados sin perder el contexto ni contaminar el global.
}

const contador = createdCounter();
contador();
contador();
contador();

const contador2 = createdCounter();
contador2();
contador2();
contador2();

// Recursividad:
// Es una funcion que se llama a si misma.
// Pero siempre se tiene que generar una condicion para que deje de llamarse.
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

// Funciones parciales:
// Es la idea de dividir una funcion con varios parametros en funciones mas pequeñas.
function partialSum(a) {
  // Primer parametro fijo.
  return function (b, c) {
    // Los demas parametros si se pueden cambiar de forma dinamica.
    return sum(a, b, c);
  };
}

const sumWith = partialSum(4); // Fijo.
sumWith(2, 3); // Se pueden modificar de forma dinamica.
sumWith(1, 2);

// Currying
function currySum(a) {
  return function (b) {
    return function (c) {
      return sum(a, b, c);
    };
  };
}

currySum(1)(2)(10);
const sumAB = currySum(1)(2);
sumAB(3);
sumAB(4);
sumAB(5);

// callBacks
function processData(data, callback) {
  const result = sum(...data);
  callback(result);
}

function processResult(r) {
  console.log(`El resultado es: ${r}`);
}

processData([1, 2, 3], processResult);
processData([1, 2, 3], (result) => {
  console.log(`El resultado en la arrow function es: ${result}`);
});
