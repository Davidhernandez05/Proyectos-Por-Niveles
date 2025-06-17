// Iterador MAP:

const numeros = [1, 2, 3, 4, 5];
const cuadradoNumeros = numeros.map((num) => num * num);

console.log(numeros);
console.log(cuadradoNumeros);

// ForEach
const colors = ["Red", "Yellow", "Orange"];
console.log(colors);

//El primier color es lo que se recibe del array y lo que esta despues de la => es lo que va hacer con lo que recibe.
const iteratedColor = colors.forEach((color) => console.log(color));
console.log(iteratedColor); //No crea ningun array por eso es indefinido.
