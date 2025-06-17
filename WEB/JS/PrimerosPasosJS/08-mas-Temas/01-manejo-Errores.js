// Excepcion::

// caotura de Errores:
// try - catch:

try {
  // Codigo que intenta ejecutar
  let myObject;
  console.log(myObject.email);
} catch (error) {
  // Codigo que se ejecuta si tiene algun arror.
  console.log("Se presento un error.");
}

// capturar error
try {
  // Codigo que intenta ejecutar
  let myObject;
  console.log(myObject.email);
} catch (error) {
  // Codigo que se ejecuta si tiene algun arror.
  console.log("Se presento un error.", error.message);
}

// finally:
try {
  // Codigo que intenta ejecutar
  let myObject;
  console.log(myObject.email);
  console.log("final");
} catch (error) {
  // Codigo que se ejecuta si tiene algun arror.
  console.log("Se presento un error.");
} finally {
  // este codigo se ejecuta siempre al final.
  // sin importar si encuentra un error o no.
  console.log("Este codigo se ejecuta siempre.");
}

// lanzamiento de errores:

// throw:
function sum(a, b) {
  if (Number.isInteger(a)) {
    // Number.isInteger(b) -> Nos permite validar si el numero que se encuentra en la variable a es entero.
    console.log(`El numero  ${a} es entero.`);
  }
  if (Number.isInteger(b)) {
    // Number.isInteger(b) -> Nos permite validar si el numero que se encuentra en la variable b es entero.
    console.log(`El numero  ${b} es entero.`);
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Los numeros no son validos.");
  } else {
    console.log("El resultado de la suma es: ", a + b);
  }
}

sum(4, 5);

// capturar varios tipos de errores:

function sumar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operación solo suma numeros.");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operacion solamente acepta numeros enteros.");
  }
  if (a === 0 || b === 0) {
    zeroInteger("Realizando la operacion...", a, b);
  } else console.log(a + b);
}

try {
  //sumar("5", 20);
  sumar(5.5, 10);
  sumar(10, 10);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se produjo el siguiente error de tipo: ", error.message);
  }
  if (error instanceof Error) {
    console.log("Se produjo el siguiente error: ", error.message);
  }
} finally {
  console.log("Fin del programa.");
}

// Crear excepciones personalizadas:

class zeroInteger extends Error {
  constructor(mensaje, a, b) {
    super(mensaje), (this.a = a);
    this.b = b;
  }

  imprimirNumeros() {
    console.log(`${this.a} + ${this.b}`);
  }
}

try {
  console.log(0, 10);
} catch (error) {
  console.log("Se ha producido un error personalizado");
  error.imprimirNumeros();
}
