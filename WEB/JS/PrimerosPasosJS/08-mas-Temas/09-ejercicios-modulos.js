// Exporta una función

export function dividir(a, b) {
  return a / b;
}

// Exporta una constante

export const num = 10;

// Exporta una clase

export let Persona = {
  nombre: "David",
  edad: 28,
};

// Exporta una función, una constante y una clase por defecto (en caso de que lo permita)

// funcion:

//export default function multiplicar(a, b) {
//  return a * b;
//}

// clase:

export default class auto {
  acelerar() {
    console.log("El auto acelera.");
  }
}
