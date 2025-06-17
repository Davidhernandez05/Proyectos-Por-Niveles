// Estructuras avanzadas:

// Arrays Avanzados:

// Medotos funcionales:

// 1. forEach: Recorre un array y ejecuta una función por cada elemento.

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

// 2. map: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.

let doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 3. filter: Crea un nuevo array con los elementos que cumplen una condición.

let parNumber = numbers.filter((number) => number % 2 === 0);
console.log(parNumber); // [2, 4]

// 4. reduce: Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un solo valor.

let sum = numbers.reduce((acumulado, number) => acumulado + number, 0);
console.log(sum); // 15

// 6. some: Comprueba si al menos un elemento cumple una condición.
let hayPar = numbers.some((number) => number % 2 === 0);
console.log(hayPar); // true

// 7. every: Comprueba si todos los elementos cumplen una condición.
let todosSonPares = numbers.every((number) => number % 2 === 0);
console.log(todosSonPares); // false

// Manipulación de Arrays:

// 1. flat: Aplana un array de arrays en un solo array.
let nestedArray = [1, 2, [3, [4]], [5, [6]]];

let flattened = nestedArray.flat(2); // El número indica cuántos niveles de profundidad aplanar.
// En este caso, aplanamos 2 niveles de profundidad.
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// 2. flatMap: Aplica una función a cada elemento y luego aplana el resultado.
let phrases = ["Hola Mundo", "Adios Mundo"];
let flatMapped = phrases.flatMap((phrase) => phrase.split(" ")); // Divide cada frase en palabras y aplana el resultado.
console.log(flatMapped); // ["Hola", "Mundo", "Adios", "Mundo"]

// Ordenar un array:
let numbersDesordenados = [5, 3, 1, 4, 2];

// 1. sort: Ordena los elementos de un array.
let sorted = numbersDesordenados.sort((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4, 5]

// 2. reverse: Invierte el orden de los elementos de un array.
numbersDesordenados.reverse();
console.log(numbersDesordenados); // [5, 4, 3, 2, 1]

// Busquedas:

// 1. indexOf: Devuelve el índice del primer elemento que coincide con el valor especificado.
let index = numbersDesordenados.indexOf(4);
console.log(index); // 1

// 2. includes: Comprueba si un array contiene un elemento.

console.log(numbersDesordenados.includes(4)); // true
console.log(numbersDesordenados.includes(10)); // false

// 3. find: Devuelve el primer elemento que cumple una condición.
let mayor = numbers.find((number) => number % 2 === 0);
console.log(mayor); // 3

// 4. findIndex: Devuelve el índice del primer elemento que cumple una condición.
let indexMayor = numbers.findIndex((number) => number % 2 === 0);
console.log(indexMayor); // 1

// 5. lastIndexOf: Devuelve el índice del último elemento que coincide con el valor especificado.
let lastIndex = numbersDesordenados.lastIndexOf(4);
console.log(lastIndex); // 1

// Sets Avanzados:

// Operaciones con Conjuntos:

// 1. eliminar duplicados:

let nombersArray = [1, 2, 3, 4, 5, 6, 6];
nombersArray = [...new Set(nombersArray)]; // Elimina duplicados y convierte a array.
console.log(nombersArray); // Set(6) { 1, 2, 3, 4, 5, 6 }

// 2. union: Combina dos conjuntos y elimina duplicados.
let A = new Set([1, 2, 3]);
let b = new Set([2, 3, 4, 5]);
let union = new Set([...A, ...b]);
console.log(union); // Set(5) { 1, 2, 3, 4, 5 }

// 3. intersección: Encuentra los elementos comunes entre dos conjuntos.
let interseccion = new Set([...A].filter((num) => b.has(num))); // has verifica si el elemento está en el conjunto indicado.
console.log(interseccion); // Set(1) { 2, 3 }

// 4. diferencia: Encuentra los elementos que están en un conjunto pero no en el otro.
let diferencia = new Set([...A].filter((num) => !b.has(num))); //En este caso negamos la condición has.
// Son los elementos que están en un conjunto pero no en el otro.
console.log(diferencia); // Set(1) { 1 }

// Conversión:
let nuevoSet = new Set([10, 20, 30, 40, 50]);
let nuevoArray = [...nuevoSet]; // Convierte el conjunto a un array.
console.log(nuevoArray); // [10, 20, 30, 40, 50]

// Iteración:

nuevoSet.forEach((elemento) => {
  console.log(elemento);
}); // 10, 20, 30, 40, 50

// Mapas Avanzados:
// 1. Crear un mapa:
let mapa = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
  ["ciudad", "Madrid"],
]);
console.log(mapa); // Map(3) { 'nombre' => 'Juan', 'edad' => 30, 'ciudad' => 'Madrid' }

// 2. Iteración:
mapa.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
});

// 3. conversión a array:
let mapaArray = [...mapa]; // Convierte el mapa a un array de pares clave-valor.
console.log(mapaArray); // [ [ 'nombre', 'Juan' ], [ 'edad', 30 ], [ 'ciudad', 'Madrid' ] ]

let arrayFromMapa = Array.from(mapa); // Convierte el mapa a un array de pares clave-valor.
console.log(arrayFromMapa); // [ [ 'nombre', 'Juan' ], [ 'edad', 30 ], [ 'ciudad', 'Madrid' ] ]
// ambos son equivalentes.

// 4. Map a objeto:
let diccionario = Object.fromEntries(mapa); // Convierte el mapa a un objeto.
console.log(diccionario); // { nombre: 'Juan', edad: 30, ciudad: 'Madrid' }

// 5. Objeto a map:
const mapFromObject = new Map(Object.entries(diccionario));
console.log(mapFromObject); // Map(3) { 'nombre' => 'Juan', 'edad' => 30, 'ciudad' => 'Madrid' }
