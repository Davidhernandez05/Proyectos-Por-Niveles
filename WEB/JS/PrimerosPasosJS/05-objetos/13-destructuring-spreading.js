// Destructuración:
// Nos permite extraer valores de un objeto o array y asignarlos a variables

const myArray = [1, 2, 3, 4, 5];
const person = {
  name: "David",
  age: 28,
  alias: "Da",
  job: {
    title: "FullStack Developer",
    company: "Google",
  },
};

// Array destructuring
const [first, second, third] = myArray;
console.log(first, second, third); // 1 2 3

// Arrays con valores por defecto
const [uno = 0, dos = 0, tres = 0, cuatro = 0, cinco = 0, seis = 6] = myArray;
console.log(uno, dos, tres, cuatro, cinco, seis); // 1 2 3 4 5 6

// Ignorar valores
const [primero, , tercero] = myArray;
console.log(primero, tercero); // 1 3

// Object destructuring
const { name, age, alias } = person; // Tienen que coincidir los nombres de las propiedades
console.log(name, age, alias); // David 28 Da

// Cambiar el nombre de las variables y asignar valores por defecto
const {
  name: nombre,
  age: edad,
  alias: apodo,
  email = "David@david.com",
} = person;
console.log(nombre, edad, apodo, email); // David 28 Da

// Destructuring de objetos anidados
const {
  job: { title, company },
} = person;
console.log(title, company); // FullStack Developer Google

// Destructuring en funciones
function mostrarInfo({ name, age }) {
  console.log(`El nombre es ${name} y tiene ${age} años.`);
}

mostrarInfo(person); // El nombre es David y tiene 28 años.

// Propagacion: (...)
// Nos permite combinar arrays y objetos de una forma más sencilla

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Copiar arrays
const arr3 = [...arr1];
console.log(arr3); // [1, 2, 3]

// Combinar arrays y añadir elementos:
const arr = [...arr1, ...arr2, 7, 8];
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]

// Sintaxis de objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Copiar objetos
const obj3 = { ...obj1 };
console.log(obj3); // {a: 1, b: 2}

// Combinar objetos y añadir propiedades
const obj = { ...obj1, ...obj2, e: 5, f: 6 };
console.log(obj); // {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}
