// 1. Crea una clase que reciba dos propiedades

class Persona {
  constructor(nombre, edad) {
    (this.nombre = nombre), (this.edad = edad);
  }
}

// 2. Añade un método a la clase que utilice las propiedades

class Persona1 {
  constructor(nombre, edad) {
    (this.nombre = nombre), (this.edad = edad);
  }

  saludar() {
    console.log(
      `Hola mi nombre es ${this.nombre}, y tengo: ${this.edad} años.`
    );
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función

const person = new Persona1("David", 28);
console.log(person);
person.saludar();

// 4. Añade un método estático a la primera clase

class Math {
  static resta(a, b) {
    return a - b;
  }
}

// 5. Haz uso del método estático

console.log(Math.resta(2, 1));

// 6. Crea una clase que haga uso de herencia

class Animal {
  constructor(name) {
    this.name = name;
  }

  sonido() {
    console.log("El animal hace un sonido.");
  }
}

class Perro extends Animal {
  constructor(name, age) {
    super(name), (this.age = age);
  }
  jugar() {
    console.log(`El perro ${this.name}, juega todo el día.`);
  }
}

let perro1 = new Perro("Onix", 12);
console.log(perro1);
perro1.jugar();
perro1.sonido();

// 7. Crea una clase que haga uso de getters y setters

class Persona2 {
  #nombre;
  #edad;
  #bank;
  constructor(nombre, edad, bank) {
    (this.#nombre = nombre), (this.#edad = edad), (this.#bank = bank);
  }

  get nombre() {
    return this.#nombre;
  }

  set bank(newBank) {
    this.#bank = newBank;
  }
}

// 8. Utiliza los get y set y muestra sus valores

let persona3 = new Persona2("David", 22, "9128310983091n");
console.log(persona3);
console.log(persona3.nombre);

// 9. Sobrescribe un método de una clase que utilice herencia

class Animales {
  constructor(nombre, tipo) {
    this.name = nombre;
    this.type = tipo;
  }
  emitirSonido() {
    console.log("Los animales hacen un sonido.");
  }
}

class Leon extends Animales {
  constructor(name, type, sonido) {
    super(name, type), (this.sonido = sonido);
  }
  emitirSonido() {
    console.log(`Los leones: ${this.sonido}`);
  }
}

let leon1 = new Leon("Simba", "normal", "Rugen");
console.log(leon1);
leon1.emitirSonido();
