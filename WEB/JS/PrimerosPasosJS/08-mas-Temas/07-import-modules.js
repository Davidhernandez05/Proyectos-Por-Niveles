// importar:

import { add, PI, name, Circle } from "./06-exportacion-modulos.js";
import defaultImport from "./06-exportacion-modulos.js";
// Esta es una importacion por defecto, por este motivo no se tienen que llamar de la misma manera.

// Funciones

console.log(add(5, 10));

// Propiedades

console.log(PI);
console.log(name);

// Clases

let circle = new Circle(10);
console.log(circle.radius);
console.log(circle.area().toFixed(2));
console.log(circle.perimeter().toFixed(2));

// Importación por defecto

console.log(defaultImport(5, 10));

// let myClass = new defaultImport()
// myClass.func()

// Proyecto modular

// import { MyImport } from "./directory/file.js"
