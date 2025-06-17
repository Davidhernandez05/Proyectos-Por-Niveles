// Slice -> Permite crear una copia superficial de una parte de un array.

const arr = ["David", "Ricardo", "Erika", "Johan"];

/**
 * El numero es el indice desde donde queremos empezar a crear el nuevo array.
 * Si se tienen dos parametros es desde donde queremos empezar hasta donde queremos terminar.
 * No incluye el valor final.
 *
 * para tomar de atras hacia adelante lo hacemos con numeros negativos.
 */
const nuevo = arr.slice(0, 2);
console.log(nuevo);
