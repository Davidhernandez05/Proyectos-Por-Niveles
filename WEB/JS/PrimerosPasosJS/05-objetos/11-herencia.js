// Herencia.

class Animal {
  // Objeto Principal
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }
  emitirSonido() {
    console.log("El animal emite un sonido.");
  }
}

// Objetos que estan heredando del obj principal:
// Expends permite que heredemos valores de otra clase.
class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo); // -> Llamamos los valores de la otra clase.
    this.raza = raza;
  }
  emitirSonido() {
    console.log("El perro ladra.");
  }
  correr() {
    console.log(`${this.nombre}, corre alegremente.`);
  }
}

class Gato extends Animal {
  constructor(nombre, tipo, raza, color) {
    super(nombre, tipo);
    this.raza = raza;
    this.color = color;
  }
  emitirSonido() {
    //Metodo que sobre escribe el metrodo que se encuentra en el padre.
    console.log("Los gatos maullan.");
  }
  actividadFavorita() {
    //Metodo Nuevo
    console.log(`A ${this.nombre}, Le gusta mucho dormir.`); // this.nombre nos permite acceder al valor que se encuentra en nombre.
  }
}

const perro1 = new Perro("Samy", "Perro", "Pug"); // Instancia.
console.log(perro1);
perro1.correr();

// Siempre cuando creamos un objetos tenemos que poner el New.
const gato1 = new Gato("Jack", "Gato Domestico", "Bombay", "Negro");
console.log(gato1);
gato1.emitirSonido();
gato1.actividadFavorita();

// Inyectar un metodo al prototipo de nuestro objeto.
Gato.prototype.jugar = () => {
  console.log(`${gato1.nombre}, esta jugando.`);
};

gato1.jugar();
