// Ejercicio pasar de fahrenheit a celsius:

const temperaturasFahrenheit = [32, 58, 95, 100, 200, 500];
const valor = 5 / 9;

console.log(temperaturasFahrenheit);

const temperaturasCelsius = temperaturasFahrenheit.map(
  (temp) => (temp - 32) * valor
);

console.log(temperaturasCelsius);
