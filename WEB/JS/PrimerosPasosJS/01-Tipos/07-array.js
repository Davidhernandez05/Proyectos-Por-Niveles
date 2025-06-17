//Array tambien se pueden conocer como listas:

let animales = ["Chanchito", "Perro"];
console.log(animales);
/**
 * Agregar elementos a nuestro array:
 * Tener mucho cuidado con la posicion en la cual agregamos nuestro elemento,
 */

animales[2] = "Gato";
console.log(animales);
console.log(typeof animales);

// Para conocer la longitud de un array:
console.log(animales.length);

// Agregar valor a un array.
animales.push("Loro");
console.log(animales);

// inmutabilidad:
const animales2 = animales.concat("Leon", "Tigre");
console.log(animales);
console.log(animales2);

// Para eliminar el ultimo elemento de un array:
animales.pop();
console.log(animales);

// Para eliminar el primer elemento de un array:
animales.shift();
console.log(animales);

// Para eliminar uno o varios elementos en las posiciones indicadas:
animales.splice(1, 1);
animales.splice(1, 2, "Nuevo valor", "Otro valor");
console.log(animales);

// Para saber si un elemento esta en un array:
console.log(animales.indexOf("Perro"));

// Para agregar uno o varios elementos al principio de un array:
animales.unshift("Gallina", "Pato");
console.log(animales);

// Para obtener un subarray de un array: con los parametros de inicio y fin
console.log(animales.slice(0, 2)); // No incluye el ultimo valor
let nuewAnimals = animales.slice(1, 2);
console.log(nuewAnimals);
