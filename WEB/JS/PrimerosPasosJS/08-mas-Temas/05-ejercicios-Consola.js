// 1. Crea un función que utilice error correctamente

function mayorEdad() {
  console.error("No Tienes acceso debido a que eres menor de edad.");
}

let age = 17;
if (age <= 17) {
  mayorEdad(age);
}

// 2. Crea una función que utilice warn correctamente

function ingresoCine(age) {
  if (age <= 15) {
    console.error("No puedes ingresar a la funcion eres muy pequeño.");
  } else if (age > 15 && age <= 17) {
    console.warn(
      "Puedes ingresar a la funcion pero son un adulto responsable."
    );
  } else {
    console.log("Si puedes ingresar a la funcion.");
  }
}

age = 18;
ingresoCine(age);

// 3. Crea una función que utilice info correctamente

console.info(
  "Si tienes 15 o menos años de edad no puedes ingresar a esta pelicula."
);

// 4. Utiliza table

const peliculas = [
  { "Nombre Pelicula": "El conjuro 4", clasificación: "R" },
  { "Nombre Pelicula": "IT", clasificación: "R" },
  { "Nombre Pelicula": "La monja", clasificación: "R" },
];

console.table(peliculas);

// 5. Utiliza group

console.group("Mundo de Harry potter:");
console.log("Harry Potter saga.");
console.log("Animales Fantasticos saga.");
console.log("Serie de Harry potter Anunciada por Max.");
console.groupEnd();

// 6. Utiliza time

console.time("Tiempo de ejecucion");

for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}
console.timeEnd("Tiempo de ejecucion");

// 7. Valida con assert si un número es positivo

function numeroPositivo(num) {
  console.assert(num < 0, "El numero es positivo");
}
numeroPositivo(10);

// 8. Utiliza count

console.count("click");
console.count("click");
console.count("click");
console.count("click");

// 9. Utiliza trace

function numeroPositivo2(num) {
  console.assert(num < 0, "El numero es positivo");
  trace();
}

function trace() {
  console.trace("Traza:");
}

// numeroPositivo2(10);

// 10. Utiliza clear

//console.clear();
