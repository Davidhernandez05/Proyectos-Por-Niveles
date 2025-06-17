// 1. Crea un array que almacene cinco animales

const animales = ["gato", "Leon", "Tigre", "Puma", "Leopardo"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final

animales.push("jaguar");
animales.unshift("pantera");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1);
console.log(animales);

// 4. Crea un set que almacene cinco libros

const libros = new Set([
  "El Alquimista",
  "El Principito",
  "El Perfume",
  "Harry Potter",
  "El Señor de los Anillos",
]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido

libros.add("El Perfume");
libros.add("Habitos Atomicos");
console.log(libros);

// 6. Elimina uno concreto a tu elección

libros.delete("El Perfume");
console.log(libros);

// 7. Crea un map que asocie el número del mes a su nombre

const meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);
console.log(meses);

// 8. Comprueba si el mes número existe en el map e imprime su valor

console.log(meses.has(12));
console.log(meses.get(12));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

meses.set("Verano", ["Junio", "Julio", "Agosto"]);
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

const arr = [1, 2, 3, 4, 5];
const set = new Set(arr);
const nuevomap = new Map([set]);
console.log(nuevomap);
