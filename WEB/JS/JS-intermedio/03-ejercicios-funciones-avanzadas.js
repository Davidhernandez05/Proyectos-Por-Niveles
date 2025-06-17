// 1. Crea una función que retorne a otra función

function crearSaludo(mensaje) {
  return function (nombre) {
    return console.log(`${mensaje}, ${nombre}`);
  };
}

const saludo = crearSaludo("Hola");
saludo("David");

// 2. Implementa una función currificada que multiplique 3 números

function multiplcar(num1) {
  return function (num2) {
    return function (num3) {
      return num1 * num2 * num3;
    };
  };
}

const multiplicacion = multiplcar(2)(3)(4);
console.log(multiplicacion);

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potencia(base, exponente) {
  if (exponente === 0) return 1;
  return base * potencia(base, exponente - 1);
}

const resultado = potencia(2, 3);
console.log(resultado);

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(valorFinal) {
  let valor = valorFinal;
  return {
    increment() {
      valor++;
      console.log(`Incremento: ${valor}`);
    },
    decrement() {
      valor--;
      console.log(`Decremento: ${valor}`);
    },
    getValue() {
      return valor;
    },
  };
}

const counter = createCounter(10);
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getValue());

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
  const suma = numbers.reduce((acc, num) => acc + num, 0);
  return suma * multiplier;
}

console.log(sumManyTimes(2, 1, 2, 3, 4)); // 20
console.log(sumManyTimes(3, 1, 2, 3, 4)); // 30

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumacallback(callback, ...numbers) {
  const suma = numbers.reduce((acc, num) => acc + num, 0);
  callback(suma);
}
function mostrarResultado(resultado) {
  console.log(`El resultado es: ${resultado}`);
}
sumacallback(mostrarResultado, 1, 2, 3, 4); // El resultado es: 10

// 7. Desarrolla una función parcial

function sumaParcial(a) {
  return function (b) {
    return a + b;
  };
}

const sumaCon5 = sumaParcial(5);
console.log(sumaCon5(3)); // 8

// 8. Implementa un ejemplo que haga uso de Spread

const vahiculos = {
  auto: "Ferrari",
  moto: "Ducati",
  camion: "Ford",
};

const vehiculosActualizados = {
  ...vahiculos,
  camion: "Chevrolet",
};
console.log(vehiculosActualizados); // { auto: 'Ferrari', moto: 'Ducati', camion: 'Chevrolet' }
// Destructuración de objetos
const { auto, moto } = vehiculosActualizados;
console.log(auto); // Ferrari
console.log(moto); // Ducati

// 9. Implementa un retorno implícito

const multiplicar = (a, b) => a * b;
const resultadoMultiplicar = multiplicar(5, 3);
console.log(resultadoMultiplicar); // 15

// 10. Haz uso del this léxico

const obj = {
  nombre: "David",
  saludo() {
    console.log(`Hola, ${this.nombre}`);
  },
};

obj.saludo(); // Hola, David
