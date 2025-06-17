// Convertir de tipos de forma explicita:

//Convertir a un entero:
const numero = '55';
const convert = parseInt(numero);

console.log(convert);
console.log(typeof convert);

//Convertir a un flotante:
const numeroDec = '29.8';
const flotante = parseFloat(numeroDec);

console.log(flotante);
console.log(typeof flotante);

// Convertir de binario a decimal:

const bin = '1010';
const dec = parseInt(bin, 2);
console.log(dec);
console.log(typeof dec);

// Convertir de tipos de forma implicita: 