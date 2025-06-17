function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.name); // regresa el nombre de la funcion.
console.log(Usuario.length);

const U = Usuario; // Inicialisamos la funcion en una variable constante.
let user = new U('nicolas'); 

console.log(user);

function of(Fn, arg) {
  return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function returned() {
  return function (){
    console.log('Hola Mundo');
  }
}

let saludo = returned(); // inicializamos una funcion en una variable.
saludo(); // Llamamos a esa variable.