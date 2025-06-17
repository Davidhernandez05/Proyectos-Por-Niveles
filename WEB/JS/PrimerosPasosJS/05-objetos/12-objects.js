// sintaxis de objetos
let persona = {
  nombre: "Brais",
  edad: 37,
  alias: "Mouredev",
};

// Acceder a las propiedades de un objeto
console.log(persona.nombre); // Brais
console.log(persona.edad); // 37

//Notaciones de punto y corchetes
console.log(persona.nombre); // Brais
console.log(persona["nombre"]); // Brais

// Modificar propiedades de un objeto
persona.edad = 18;
console.log(persona.edad); // 18

// Eliminar propiedades de un objeto
delete persona.alias;
console.log(persona); // {nombre: "Brais", edad: 18}

// Agregar una propiedad:
persona.email = "brais.mouredev@gmail.com";
console.log(persona); // {nombre: "Brais", edad: 18, email: "

// Comprobar si una propiedad existe
console.log("nombre" in persona); // true
console.log("alias" in persona); // false

// metodos en funciones

let person2 = {
  nombre: "David",
  edad: 28,
  alias: "Da",

  saludar: () => {
    console.log(`La persona saluda.`);
  },
};

person2.saludar(); // Hola, soy undefined

// objeto dentro de un objeto:

let persona3 = {
  nombre: "David Hernandez",
  edad: 28,
  alias: "Da",

  saludar: () => {
    console.log(`La persona saluda.`);
  },
  job: {
    title: "FullStack Developer",
    company: "Google",

    work: () => {
      console.log(`La persona trabaja.`);
    },
  },
};

console.log(persona3);
console.log(persona3.job);
console.log(persona3.job.title); // FullStack Developer
persona3.job.work(); // La persona trabaja.

// igualdad de objetos
let persona4 = {
  nombre: "Brais",
  edad: 37,
  alias: "Mouredev",
};

console.log(persona);
console.log(persona4);

console.log(persona === persona4); // false - referencia a la memoria

console.log(persona.nombre === persona4.nombre); // true - comparación de valores

// iterar un objeto:

for (const key in persona4) {
  console.log(`${key}: ${persona4[key]}`);
}
