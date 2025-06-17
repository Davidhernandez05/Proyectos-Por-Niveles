// 1. Captura una excepción utilizando try-catch

try {
  let nombre;
  console.log(nombre.edad);
} catch (error) {
  console.log("Se genero el error: ", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(nombre.email);
} catch (error) {
  console.log("Se genero el erro: ", error.message);
} finally {
  console.log("Final del programa.");
}

// 3. Lanza una excepción genérica

try {
  console.log(nombre.email);
} catch (error) {
  console.log("Se genero el erro: ", error.message);
}

// 4. Crea una excepción personalizada

function resta(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("El dato ingresado no es valido."); // Excepcion personalizada.
  } else return a + b;
}

// 5. Lanza una excepción personalizada

try {
  console.log(resta("5", 55));
} catch (error) {
  console.log("Se genero el error: ", error.message);
}

// 6. Lanza varias excepciones según una lógica definida

function compararNumerosEnteros(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operación solo compara numeros.");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("El numero no es entero.");
  } else {
    if (a >= b) {
      console.log(a);
    } else console.log(b);
  }
}

console.log("07");
// 7. Captura varias excepciones en un mismo try-catch

try {
  //compararNumerosEnteros(5, "20");
  compararNumerosEnteros(1.5, 50);
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se produjo el siguiente error de tipo: ", error.message);
  } else if (error instanceof Error) {
    console.log("Se produjo el siguiente error: ", error.message);
  }
}

console.log("08");
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

try {
  let numeroNuevo;
  for (let i = 1; i <= 10; i++) {
    numeroNuevo = parseFloat(i);
    console.log(i);
  }
} catch (error) {
  console.log("Se genero el error: ", error.message);
}

console.log("09");
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

const person = {
  nombre: "David",
  edad: "25",
  sexo: "masculino",
};

function validacionEdad(edad) {
  if (typeof edad !== "number") {
    throw new TypeError("La edad no tiene un valor valido.");
  }
  if (edad >= 18) {
    console.log("Eres mayor de edad.");
  } else console.log("No eres mayor de edad.");
}

try {
  validacionEdad(person.edad);
} catch (error) {
  console.log("Error: ", error.message);
}

console.log("10");
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function adivinaNumeroEnteros(num) {
  if (typeof num !== "number") {
    throw new TypeError("El valor ingresado no es valido.");
  }
  if (!Number.isInteger(num)) {
    throw new Error("El numero no es entero.");
  }
  const numero = 10;
  if (num === numero) {
    return true;
  } else return false;
}

let contadorIntentos = 1;

while (contadorIntentos <= 10) {
  try {
    let resultado;
    //resultado = adivinaNumeroEnteros("20");
    resultado = adivinaNumeroEnteros(20.5);
    //resultado = adivinaNumeroEnteros(20);

    if (resultado) {
      console.log("Acertaste el numero.");
      break;
    } else console.log("No acertaste el numero");
  } catch (error) {
    console.log(`${contadorIntentos}, Error: ${error.message}`);
  } finally {
    contadorIntentos++;
  }
}
