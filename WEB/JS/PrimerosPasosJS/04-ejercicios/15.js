/**
 * Dado un array de números, utiliza los métodos map, filter y reduce para:
 *
 * Crear un nuevo array con cada número multiplicado por 2.
 * Filtrar solo los números mayores que 10.
 * Sumar todos los números del array filtrado.
 */
const numeros = [5, 50, 15, 3, 35, 45, 10, 25, 30, 40];

// MAP: Multiplicar por 2
const multiplcado = numeros.map((numero) => numero * 2);
console.log(multiplcado);

// FILTER: Filtrar los números mayores que 10
const MayoresDe10 = numeros.filter((numero) => numero > 10);
console.log(MayoresDe10);

// REDUCE: Sumar todos los números del array filtrado
const suma = MayoresDe10.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma);
