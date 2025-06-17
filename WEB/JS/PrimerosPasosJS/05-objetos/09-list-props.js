const punto = {
  x: 29,
  y: 50,
  dibujar() {
    console.log('dibujando ...')
  }
};

// delete punto.dibujar;

if ('dibujar' in punto) {
  // Verificar si un objeto tiene algun elemento.
  punto.dibujar();
}

let keys = Object.keys(punto);
console.log(Object.keys(punto));

// Nos permite listar todos los elementos: 
console.log('Keys - Antigua: ');
for (let llave of Object.keys(punto)) {
  console.log(llave, punto[keys]);
}

/**
 * Esto sirve para ingresar a la propiedades de un objeto.
 * Cuando no conocemos sus propiedades.
 */
console.log('Entry - Antigua. ');

for (let entry of Object.entries(punto)) {
  console.log(entry);
}

// Siempre utilizar la nueva propiedad.
console.log('IN - Nueva Propiedad: ');
for (llaves in punto) {
  console.log(llaves, punto[llaves]);
}