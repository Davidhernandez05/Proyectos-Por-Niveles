/**
 * Nos permite iterar sobre objetos enumerables.
 * Propiedades que tengan un valor.
 */

let user = {
  id: 1,
  Nombre: 'David',
  Apellido: 'Hernandez',
  edad: 25,
};

//Iterar las propiedades de un objeto:
for (let prop in user){
  console.log(prop, user[prop]);
}

/**
 * Forma erronea de ingresar a los datos de un array:
 * Se debe ingresar por medio del for of.
 *  */ 

let animales = ['leon', 'Chanchito Feliz', 'Tigre'];

for (let indice in animales) {
  console.log(indice, animales[indice]);
}