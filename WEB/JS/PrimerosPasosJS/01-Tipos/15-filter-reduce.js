// filter:

const numbers = [1, 2, 3, 4, 5, 9, 6, 7, 8];

// Nos muestra los valores segun lo que le indiquemos.
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(numbers);
console.log(evenNumbers);

// Reduce:
const numbersReduce = [4, 2, 3, 1, 5];

const total = numbersReduce.reduce(
  // esta funcion recibe dos parametros para almacenar, y se operan segun lo que necesitemos.
  (acummulator, currentvalue) => acummulator + currentvalue,
  0
);

console.log(numbersReduce);
console.log(total);
