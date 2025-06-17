/*
 * Crea 3 funciones, cada una encargada de detectar si una cadena de
 * texto es un heterograma, un isograma o un pangrama.
 * - Debes buscar la definición de cada uno de estos términos.
 */
const letrasDiccionario = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  ñ: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

function heterograma(frase) {
  let letras = [];

  for (i of frase) {
    letras.push(i);
  }

  // Set quita los duplicado de un array.
  let duplicados = new Set(letras).size !== letras.length;

  if (duplicados) {
    console.log(`La frase o palabra ${frase}, no es: heterograma.`);
  } else {
    console.log(`La frase/palabra ${frase}, si es: heterograma.`);
  }
}

function isograma(frase) {
  let letras = {};

  for (let j of frase) {
    letras[j] = (letras[j] || 0) + 1;
  }
  console.log(letras);
  let valores = Object.values(letras); // Obtiene los valores del objeto
  let todosIguales = valores.every((valor) => valor === valores[0]); // Compara todos con el primero

  if (todosIguales == true) {
    console.log(`La frase/palabra: ${frase}, Si es: isograma.`);
  } else {
    console.log(`La frase/palabra: ${frase}, No es: isograma.`);
  }
}

function pangrama(frase) {
  let valorEspecifico = 1;

  for (const i of frase) {
    letrasDiccionario[i] = (letrasDiccionario[i] || 0) + 1;
  }
  let validacion = Object.values(letrasDiccionario).every(
    (valor) => valor >= valorEspecifico
  );

  if (validacion == true) {
    console.log(`La frase/palabra SI es: pangrama.`);
  } else {
    console.log(`La frase/palabra NO es: pangrama.`);
  }
}

const palabra = prompt("Ingresa una frase: ");

const fraseHeterograma = heterograma(palabra.toLowerCase());
const fraseIsograma = isograma(palabra.toLowerCase());
const frasePangrama = pangrama(palabra.toLowerCase());
