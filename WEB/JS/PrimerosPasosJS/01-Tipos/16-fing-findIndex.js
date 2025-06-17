// find:

const numbers = [1, 2, 10, 15, 30, 50];

const firsNumberGreaterthan10 = numbers.find((numero) => numero > 10);

console.log(numbers);
console.log(firsNumberGreaterthan10);

// FindIndex:

// Arroja la pocision donde se encuentra el numero que cunple con la condicion.
const indexNumber = numbers.findIndex((num) => num > 30);
console.log(indexNumber);
