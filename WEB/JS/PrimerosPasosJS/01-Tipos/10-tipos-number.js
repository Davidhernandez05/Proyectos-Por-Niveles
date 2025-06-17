//Precision:
const resultado = 0.1 + 0.2;
console.log(resultado);

//Imprimir ciertos numeros despues de decimal:
console.log(resultado.toFixed(1)); // -> Nos retorna solamente un decimal.

//Operaciones avanzadas:

//Raiz cuadrada de un numero:
const raiz = Math.sqrt(16);
console.log('Raiz: ', raiz)

//Valor absoluto de un numero:
const absoluto = Math.abs(-4);
console.log('valor absoluto: ', absoluto);

//Numeros aleatorios:
const numeroAleatorio = Math.random();
console.log('Numero Aleatorio: ', numeroAleatorio);

//Redondear un numero asia abajo:
const redondear = Math.floor(23.6);
console.log('Redondear Numero:', redondear)

// Numero aleatorio entero:
const aleatorioEntero = Math.floor(Math.random() * 10) + 1;
console.log(aleatorioEntero);