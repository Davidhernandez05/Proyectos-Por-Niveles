/**
 * Crea un objeto que represente a una persona con propiedades como nombre, edad, ciudad y profesión.
 * Luego, escribe una función que tome este objeto como parámetro y devuelva una cadena que describa a la persona.
 *
 * Por ejemplo: "Juan tiene 25 años, vive en Madrid y es ingeniero".
 */

class Persona {
  constructor(nombre, edad, ciudad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.profesion = profesion;
  }

  saludoPersona() {
    console.log(
      `Soy ${this.nombre}, tengo ${this.edad} años, actualmente vivo en ${this.ciudad} y soy ${this.profesion}.`
    );
  }
}

const persona1 = new Persona("David", 27, "Madrid", "Desarrollador Web");
persona1.saludoPersona();
