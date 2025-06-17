const myArray = [1, 2, 3, 4, 5];

const myArray2 = [6, 7, 8, 9, 10];

const auto = {
  marca: "Ford",
  modelo: "Mustang",
  year: 1969,
};

const auto2 = {
  marca: "ferrari",
  modelo: "f40",
  year: 1990,
};

const persona = {
  nombre: "David",
  edad: 28,
  alias: "Da",
  job: {
    title: "FullStack Developer",
    company: "Google",
  },
};

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

const [first, second] = myArray;
console.log(first, second);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

const [uno = 0, dos = 0, tres = 0, cuatro = 0, cinco = 0, seis = 1] = myArray;
console.log(uno, dos, tres, cuatro, cinco, seis);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

const { marca, modelo } = auto;
console.log(marca, modelo);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

const { modelo: model, year: yearLanzamiento } = auto;
console.log(model, yearLanzamiento);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

const { title: cargo, company: empresa } = persona.job;
console.log(cargo, empresa);

// 6. Usa propagación para combinar dos arrays en uno nuevo

const arr3 = [...myArray, ...myArray2];
console.log(arr3);

// 7. Usa propagación para crear una copia de un array

const copiamyArray = [...myArray];
console.log(copiamyArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};

const obj = { ...obj1, ...obj2 };
console.log(obj);

// 9. Usa propagación para crear una copia de un objeto

const copiaAuto = { ...auto };
console.log(copiaAuto);

// 10. Combina desestructuración y propagación

const { modelo: modeloAuto, ...restoAuto } = auto; // Resultado esperado: Ford {modelo: "Mustang", year: 1969}
console.log(modeloAuto, restoAuto);
