/*
 * Crea una función que sea capaz de transformar Español al lenguaje básico del universo
 * Star Wars: el "Aurebesh".
 * - Puedes dejar sin transformar los caracteres que no existan en "Aurebesh".
 * - También tiene que ser capaz de traducir en sentido contrario.
 *
 *
 * ¡Que la fuerza os acompañe!
 */

const abcedario = {
  a: "Aurek",
  b: "Besh",
  c: "Cresh",
  d: "Dorn",
  e: "Esk",
  f: "Forn",
  g: "Grek",
  h: "Herf",
  i: "Isk",
  j: "Jenth",
  k: "Krill",
  l: "Leth",
  m: "Mern",
  n: "Nern",
  ñ: "Nen",
  o: "Osk",
  p: "Peth",
  q: "Qek",
  r: "Resh",
  s: "Senth",
  t: "Trill",
  u: "Usk",
  v: "Vev",
  w: "Wesk",
  x: "Xesh",
  y: "Yirt",
  z: "Zerek",
  " ": " ",
  ".": ".",
  ",": ",",
};

function traductor(word) {
  let traduccion = [];

  for (const palabra of word) {
    if (abcedario[palabra]) {
      traduccion.push(abcedario[palabra]);
    } else {
      traduccion.push(palabra);
    }
  }
  return traduccion;
}

const palabra = "yo soy tu padre?";
let aurebesh = traductor(palabra.toLowerCase());
console.log(aurebesh.join(""));
