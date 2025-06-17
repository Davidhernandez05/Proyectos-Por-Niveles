// Con las funciones contructoras utilizamos siempre Upper Camel Case para nombrarlas.

function Usuario() {
  this.id = 1;
  this.recuperarClave = function () {
    // Dejan de ser funciones para ser metodos.
    console.log("Recuperando Clave...");
  };
}

let usuario = new Usuario();
console.log(usuario);

// Otro ejemplo de funciones contructorias:
function Persona(nombre = "null", apellido = "null", edad = null) {
  this.nombre = nombre;
  this.apellido = apellido; // El this hace referencia al objeto Persona por eso se tiene que colocar.
  this.edad = edad;
}

const persona = new Persona("David", "Hernandez", 27); // Estas son las instancias.
console.log(persona);
const persona2 = new Persona("Chachito", "Feliz", 26);
console.log(persona2);

// Agregar una instancia al prototype:
Persona.prototype.telefono = "555-555-5555"; // esto se agrega al proptopye de la función constructora.

// Agregar una instancia desde una instancia:
const persona3 = new Persona("Juan", "Perez", 10);
persona3.nacionalidad = "Mexicano";

console.log(persona3);

// Agregar un metodo a nuestro objeto:
Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};
persona.saludar();
