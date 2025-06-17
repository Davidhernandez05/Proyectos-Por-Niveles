// 1. Crea un objeto con 3 propiedades

let persona = {
  nombre: "David",
  edad: 28,
  alias: "Da",
};

// 2. Accede y muestra su valor

console.log(persona.alias);

// 3. Agrega una nueva propiedad

persona.email = "david@gmail.com";
console.log(persona);

// 4. Elimina una de las 3 primeras propiedades

delete persona.edad;
console.log(persona);

// 5. Agrega una función e invócala

persona.saludar = () => {
  console.log("Persona saludando.");
};

// 6. Itera las propiedades del objeto

for (const key in persona) {
  console.log(`${key}: ${persona[key]}`);
}
// 7. Crea un objeto anidado

let persona2 = {
  nombre: "Miguel",
  edad: 30,
  alias: "Migue",
  trabajo: {
    puesto: "Desarrollador",
    empresa: "Google",
  },
};

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(persona2.trabajo.puesto);
console.log(persona2.trabajo.empresa);

// 9. Comprueba si los dos objetos creados son iguales

console.log(persona === persona2);

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(persona.nombre === persona2.nombre);
console.log(persona.edad === persona2.edad);
console.log(persona.alias === persona2.alias);
