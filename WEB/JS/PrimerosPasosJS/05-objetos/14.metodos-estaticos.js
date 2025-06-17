// Metodos estaticos:

class MathOperations {
  // se encapsulan objetos que tengan una relacion en concreto para hacer solamente los llamados cuando sea necesario.
  static sum(a, b) {
    return a + b;
  }
}

// Al utilizar metodos estaticos nos evitamos tener que crear una instacia para esa clase o metodo.
// Por lo cual es muy util para ciertas cosas.

console.log(MathOperations.sum(5, 10));
