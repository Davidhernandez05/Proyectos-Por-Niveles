// Esto es lo que se utiliza en POO.
// clases
class Persona {
  constrcutor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(
      `hola, mi nombre es: ${this.nombre} y tengo ${this.edad} años.`
    );
  }
}

// sintaxis:
const persona1 = new Persona("Fernando", 30);
persona1.saludar();

// Valores por defecto:

class DefaultPerson {
  constructor(nombre = "Sin Nombre", edad = 0, alias = "Sin Alias") {
    (this.nombre = nombre), (this.edad = edad), (this.alias = alias);
  }
}
let persona2 = new DefaultPerson("David", 28);
console.log(persona2);

// Acceso a propiedades:

console.log(persona2.alias);
console.log(persona2["alias"]);

// Dar un nuevo valor a una propiedad:

persona2.alias = "Da";
console.log(persona2.alias);

// funciones en las clases:

class Carros {
  constructor(marca, modelo, año) {
    (this.marca = marca), (this.modelo = modelo), (this.año = año);
  }
  acelera() {
    console.log(`El auto ${this.modelo} esta acelerando.`);
  }
}

let carro = new Carros("Ford", "Mustang", 1964);
console.log(carro);
carro.acelera();

//Propiedades privadas:

class PrivatePerson {
  #bank; // Hace que la propiedad sea privada.

  constructor(nombre, edad, bank) {
    (this.nombre = nombre), (this.edad = edad), (this.#bank = bank);
  }
}
let persona5 = new PrivatePerson("david", 22, "Nk2131241212313");
// console.log(persona5.bank) -> No va a leer la propiedad bank por que es privada.
// persona5.bank = "askldalskncasklnc" -> Nos crea una nueva propiedad con ese nombre pero no modifica la ya existente por que es privada

console.log(persona5);

// GET y SET

class Person {
  #name;
  #age;
  #alias;
  #bank;

  constructor(name, age, alias, bank) {
    (this.#name = name),
      (this.#age = age),
      (this.#alias = alias),
      (this.#bank = bank);
  }
  get name() {
    // get nos permite leer la propiedad pero no permite que se modifique dicha propiedad.
    return this.#name;
  }
  set bank(newBank) {
    // Ser nos permite modificar un valor pero no permite visualizar dicho valor.
    this.#bank = newBank;
  }
}

let person1 = new Person("David", 28, "Da", "Nk2131241212313");
console.log(person1.name);

person1.bank = "19280192740127";
console.log(person1.bank);
