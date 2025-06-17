// MAP:
// Map es una estructura de datos que nos permite guardar información en pares de clave-valor.
// Las claves pueden ser de cualquier tipo, incluso objetos o funciones.
// Los valores también pueden ser de cualquier tipo.
// Los mapas son iterables, lo que significa que podemos recorrer sus elementos.
// Los mapas son objetos, por lo que podemos añadir cualquier tipo de dato.
// Los mapas no tienen índices, por lo que no podemos acceder a un elemento por su posición.

// Declaracion de un MAP
let mapa = new Map();

// Initializamos un MAP
let mapa2 = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
  ["ciudad", "Madrid"],
]);
console.log(mapa2);

// Añadir o modificar elementos a un MAP
mapa.set("nombre", "David"); // Si el elemento no existe lo añade
mapa.set("edad", 27);
mapa.set("ciudad", "Madrid");
console.log(mapa);

// Modify an element
mapa.set("nombre", "Brais"); // Si el elemento ya existe lo modifica
console.log(mapa);

// Eliminar elementos de un MAP
mapa.delete("ciudad"); //Le tenemos que pasar el valor del elemento a eliminar
console.log(mapa);

// has: Para saber si un elemento esta en el MAP
console.log(mapa.has("nombre")); // retorna true o false

// size: Para saber la longitud del MAP
console.log(mapa.size);

// Acceder a un valor de un MAP
console.log(mapa.get("nombre"));

// Keys, Values y entries de un MAP
console.log(mapa.values());
console.log(mapa.keys());
console.log(mapa.entries());

// Convertir un MAP a un array
const arr = Array.from(mapa);
console.log(arr);

// Iterar un MAP
for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

// clear: Para eliminar todos los elementos del MAP
mapa.clear();
console.log(mapa);
