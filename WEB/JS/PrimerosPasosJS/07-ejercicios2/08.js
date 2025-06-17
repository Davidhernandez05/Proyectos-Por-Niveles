/*
 * Crea un programa que simule el comportamiento del sombrero seleccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
 */
const validacion = ["A", "B", "C", "D"];
let respuestas = [];
const casas = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
let conteo = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
};

function validarRespuestas(p1, p2, p3, p4) {
  let resutado = validacion.map((valor) => {
    if (p1 === valor) {
      respuestas.push(p1);
    }
  });
  resutado = validacion.map((valor) => {
    if (p2 === valor) {
      respuestas.push(p2);
    }
  });
  resutado = validacion.map((valor) => {
    if (p3 === valor) {
      respuestas.push(p3);
    }
  });
  resutado = validacion.map((valor) => {
    if (p4 === valor) {
      respuestas.push(p4);
    }
  });
  if (respuestas.length !== 4) {
    console.log("Error vuelve a intentarlo.");
  } else return respuestas;
}

function sombrero() {
  for (i of respuestas) {
    switch (i) {
      case "A":
        conteo.A++;
        break;
      case "B":
        conteo.B++;
        break;
      case "C":
        conteo.C++;
        break;
      case "D":
        conteo.D++;
        break;
    }
  }
  if (conteo.A >= 2) {
    console.log(`Eres de: ${casas[0]}`);
  } else if (conteo.B >= 2) {
    console.log(`Eres de: ${casas[1]}`);
  } else if (conteo.C >= 2) {
    console.log(`Eres de: ${casas[2]}`);
  } else if (conteo.D >= 2) {
    console.log(`Eres de: ${casas[3]}`);
  } else {
    console.log(`Eres de: ${casas[3]}`);
  }
}
let pregunta1 = prompt(
  "1. ¿Qué cualidad valoras más en ti mismo?: \nA) Valentía y determinación para enfrentar desafíos. \nB) Lealtad y dedicación hacia tus amigos y seres queridos. \nC) Inteligencia y creatividad para resolver problemas. \nD) Ambición y astucia para alcanzar tus metas."
);

let pregunta2 = prompt(
  "2. ¿Cómo te describirían tus amigos? \n A) Audaz y aventurero, siempre dispuesto a tomar riesgos.\n B) Amable y confiable, alguien en quien siempre pueden contar.\n C) Ingenioso y curioso, con una mente llena de ideas. \nD) Determinado y astuto, con un fuerte sentido de propósito."
);

let pregunta3 = prompt(
  "3. ¿Qué tipo de actividad te gustaría hacer en tu tiempo libre? \n A) Explorar lugares nuevos y emocionantes.\n B) Pasar tiempo con amigos o ayudar a otros.\n C) Leer, estudiar o resolver acertijos.\n D) Planificar y trabajar en proyectos que te lleven al éxito."
);

let pregunta4 = prompt(
  '4. ¿Qué frase te identifica más?\n A) "Prefiero luchar por lo que creo, aunque sea difícil."\n B) "Siempre estaré ahí para quienes me necesiten."\n C) "El conocimiento es la clave para entender el mundo."\n D) "Haré lo que sea necesario para alcanzar mis objetivos."'
);

validarRespuestas(
  pregunta1.toLocaleUpperCase(),
  pregunta2.toLocaleUpperCase(),
  pregunta3.toLocaleUpperCase(),
  pregunta4.toLocaleUpperCase()
);
sombrero();
