// Iterar un listado de elementos:

let animales = ['Perro', 'Gato', 'Chanchito Feliz']; // -> Lista de elementos

console.log('For OF:');

//Iterar con el for of
for (let animal of animales){
  console.log(animal);
}

//Iterar con un while.

console.log('While:');

let i = 0;
while (i < animales.length) {
  console.log(animales[i]);
  i++;
}