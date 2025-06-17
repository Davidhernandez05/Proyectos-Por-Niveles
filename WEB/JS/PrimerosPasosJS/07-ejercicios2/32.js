/**
 * Descripción: Crea una clase Animal y una clase Perro que herede de Animal.
 * Luego, implementa un método en Perro que lance un error si el perro no tiene un nombre.
 */

class Animal {
  constructor(nombre, raza, edad) {
    (this.nombre = nombre), (this.raza = raza), (this.edad = edad);
  }
}

class Perro extends Animal {
  constructor(nombre, raza, edad) {
    super(nombre, raza, edad);
  }
  llamar() {
    if (this.nombre === "") {
      throw new Error("El perro no tiene nombre.");
    } else {
      console.log(`Ven ${this.nombre}`);
    }
  }
}

try {
  let perro1 = new Perro("", "Pug", 8);
  console.log(perro1);

  perro1.llamar();
} catch (error) {
  console.log("Error", error.message);
}
