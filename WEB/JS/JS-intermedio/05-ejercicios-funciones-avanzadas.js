// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
let usuario = new Map([
  ["Juan", 25],
  ["Pedro", 30],
  ["Maria", 20],
  ["David", 35],
]);

let edades = [...usuario.values()];
console.log(edades); // [25, 30, 20, 35]

let nombres = [...usuario.keys()]; // Obtiene los nombres de los usuarios
console.log(nombres); // ['Juan', 'Pedro', 'Maria']

let nombreComcreto = nombres.filter((nombre) => nombre.startsWith("D")); // Filtra los nombres que empiezan con "J"
console.log(nombreComcreto); // ['Juan']

let sumaEdades = edades.reduce((acumulado, edad) => acumulado + edad, 0); // Suma todas las edades
console.log(`La edad de todos suma: ${sumaEdades}`); // 110

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cubos = numeros.map((numero) => Math.pow(numero, 3)); // Eleva al cubo
console.log(`Cubos: ${cubos}`); // [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]

let cubosPares = cubos.filter((numero) => numero % 2 === 0); // Filtra los números pares
console.log(`Pares: ${cubosPares}`); // [8, 64, 216, 512]

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let arrayAnidado = [1, 2, [3, 4], [5, [6, 7]]];
let aplanado = arrayAnidado.flat(3); // Aplana el array 3 niveles
console.log(aplanado); // [1, 2, 3, 4, 5, 6, 7]

let frasesAnidadas = ["David Ricardo", "Hernandez Torres"];
let aplanadoFrases = frasesAnidadas.flatMap((frase) => frase.split(" ")); // Aplana y divide las frases en palabras
console.log(aplanadoFrases); // ['Hola', 'Mundo', 'adios', 'mundo']

// 4. Ordena un array de números de mayor a menor

console.log(aplanado.sort((a, b) => b - a)); // [7, 6, 5, 4, 3, 2, 1]

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

let unionSets = new Set([...set1, ...set2]); // Unión
console.log(unionSets); // Set(6) {1, 2, 3, 4, 5, 6}

let interseccionSets = new Set([...set1].filter((x) => set2.has(x))); // Intersección
console.log(interseccionSets); // Set(2) {3, 4}

let diferenciaSets = new Set([...set1].filter((x) => !set2.has(x))); // Diferencia
console.log(diferenciaSets); // Set(2) {1, 2}

// 6. Itera los resultados del ejercicio anterior

unionSets.forEach((elemento) => console.log(`Unión: ${elemento}`)); // Imprime cada elemento del set
interseccionSets.forEach((elemento) =>
  console.log(`Intersección: ${elemento}`)
); // Imprime cada elemento del set
diferenciaSets.forEach((elemento) => console.log(`Diferencia: ${elemento}`)); // Imprime cada elemento del set

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

let mapa1 = new Map([
  ["nombre", "Juan"],
  ["edad", 25],
  ["correo", "juan@juan.com"],
]);

// Iterar datos:
mapa1.forEach((valor, clave) => {
  console.log(`clave: ${clave}, valor: ${valor}`);
});

// 8. Dado el mapa anterior, crea un array con los nombres

let nombresMap = [...mapa1.keys()]; // Obtiene las claves del mapa
console.log(nombresMap); // ['nombre', 'edad', 'correo']

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

let usuarios = new Map([
  ["Juan", { edad: 25, email: "juan@juan.com" }],
  ["Pedro", { edad: 17, email: "pedro@pedro.com" }],
  ["Maria", { edad: 20, email: "maria@maria.com" }],
]);

let emailMayiresEdad = [...usuarios.values()]
  .filter((usuario) => usuario.edad >= 18)
  .map((usuario) => usuario.email); // Filtra los usuarios mayores de edad y obtiene sus emails

console.log(emailMayiresEdad);

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

let objetoUsuario = Object.fromEntries(usuarios); // Transforma el mapa en un objeto
console.log(objetoUsuario); // {Juan: {…}, Pedro: {…}, Maria: {…}}

let mapaConClaveEmail = new Map(
  [...usuarios].map(([nombre, datos]) => [datos.email, { nombre, ...datos }])
); // Transforma el objeto en un mapa con clave el email de cada usuario
console.log(mapaConClaveEmail);
