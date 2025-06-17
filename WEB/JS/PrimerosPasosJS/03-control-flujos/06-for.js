
for (let i = 0; i <= 10; i++) {
  console.log(`Numero ${i}`);
}

// Numero impar:

function numeroImpar() {
  for (let j = 0; j < 10; j++) {
    if (j % 2 !== 0) {
      console.log(`El numero ${j}, es impar.`);
    }
  }
}

numeroImpar();