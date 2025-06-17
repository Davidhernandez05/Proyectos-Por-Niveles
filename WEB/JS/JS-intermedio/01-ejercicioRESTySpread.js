// Ejercicio REST:

function sumarNumeros(...numeros) {
  let resultado = 0;
  for (const numero of numeros) {
    resultado += numero;
  }
  return resultado;
}

console.log(sumarNumeros(10, 5, 15, 20)); // Salida esperada: 50
console.log(sumarNumeros(3, 7, 2)); // Salida esperada: 12

// Ejercicio 1 Spread:
/**
 * Crea un nuevo objeto llamado personaActualizada, combinando persona con nuevosDatos,
 * de manera que sobrescriba los datos antiguos y agregue los nuevos.
 */

const persona = {
  nombre: "David",
  edad: 28,
  ciudad: "Bogota",
};

const datosActualizados = {
  edad: 22,
  profesion: "Desarrollador",
};

const personaActualizada = { ...persona, ...datosActualizados };
console.log(personaActualizada);

// Ejercicio 2 Spread:
//Crea un nuevo arreglo llamado todosLosNumeros combinando numeros y nuevosNumeros.

function todosLosNumeros(...numeros) {
  console.log(numeros);
}

const numeros = [1, 2, 3, 4, 5];
const nuevosNumeros = [6, 7, 8];
todosLosNumeros(...numeros, ...nuevosNumeros);
