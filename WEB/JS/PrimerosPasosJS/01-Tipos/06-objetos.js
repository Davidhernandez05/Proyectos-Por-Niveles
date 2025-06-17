/**
 * Objetos:
 * Son una agrupación de datos
 * que hace sentido tenerlos juntos.
 */

//Personaje de tv creado por variables: -No son objetos en si.
let nombre = "Tanjito";
let anime = "Demon Slayer";
let edad = 17;

//Mismo personaje pero creado por objetos:
let personaje = {
  anime: "Demon Slayer",
  nombre: "Tanjiro",
  edad: 17,
};
console.log(personaje);

//Imprimir por pantalla una propiedad en particular de nuestro objeto:
//De ambas formas se puede realizar
console.log(personaje.edad);
console.log(personaje["nombre"]);

//Modificar una propiedad de nuestro objeto:
//De ambas formas se puede realizar
personaje.edad = 20;
personaje["edad"] = 18;

//Eliminar una propiedad de nuestro objeto:
delete personaje.anime;

console.log(personaje);
