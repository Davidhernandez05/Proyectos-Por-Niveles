// Los sets no admiten elementos duplicados, es decir, si añadimos un elemento que ya existe en el set, no se añadirá.
// Los sets son iterables, lo que significa que podemos recorrer sus elementos.
// Los sets son objetos, por lo que podemos añadir cualquier tipo de dato.
// Los sets no tienen índices, por lo que no podemos acceder a un elemento por su posición.

// Declarar un set:
const set = new Set();

// Inicializar un set con elementos:
const set2 = new Set([1, 2, 3]);
console.log(set2);
// Añadir elementos al set:
set.add(1);
set.add(2);
set.add("David");
console.log(set);

// Eliminar elementos del set:
set.delete("David"); //Le tenemos que pasar el valor del elemento a eliminar
console.log(set);

// has: Para saber si un elemento esta en el set:
set2.has(1); // Para saber si un elemento esta en el set
console.log(set2);

//size Para saber la longitud del set:
console.log(set.size); // Para saber la longitud del set

// Convertir un set a un array:
const arr = Array.from(set);
console.log(arr);

// clear: Para eliminar todos los elementos del set:
set.clear();
console.log(set);
