const puntuacion = {
  0: "Love",
  15: 15,
  30: 30,
  40: 40,
  41: "ventaja",
  42: "ganador",
};

function elegir() {
  let resultado = Math.random();

  if (resultado < 0.5) {
    return "player1";
  } else return "player2";
}

function player1(p1) {
  switch (p1) {
    case 0:
      p1 = 15;
      return p1;
    case 15:
      p1 = 30;
      return p1;
    case 30:
      p1 = 40;
      return p1;
    case 40:
      p1 = 41;
      return p1;
    case 41:
      p1 = 42;
      return p1;
  }
}

function player2(p2) {
  switch (p2) {
    case 0:
      p2 = 15;
      return p2;
    case 15:
      p2 = 30;
      return p2;
    case 30:
      p2 = 40;
      return p2;
    case 40:
      p2 = 41;
      return p2;
    case 41:
      p2 = 42;
      return p2;
  }
}

let p1 = 0;
let p2 = 0;
ganador = " ";

while (ganador == " ") {
  let punto = elegir();
  console.log(punto);

  if (punto === "player1") {
    p1 = player1(p1);

    if (p1 == p2) {
      console.log(`Empatados a: ${puntuacion[p1]}`);
    } else if (p1 === 42) {
      console.log("Ganador Player 1.");
      console.log(`Player 1: ${puntuacion[p1]} - Player 2: ${puntuacion[p2]}`);
      break;
    } else {
      console.log(`Player 1: ${puntuacion[p1]} - Player 2: ${puntuacion[p2]}`);
    }
  } else {
    p2 = player2(p2);

    if (p2 == p1) {
      console.log(`Empatados a: ${puntuacion[p2]}`);
    } else if (p2 === 42) {
      console.log("Ganador Player 2.");
      console.log(`Player 1: ${puntuacion[p1]} - Player 2: ${puntuacion[p2]}`);
      break;
    } else {
      console.log(`Player 1: ${puntuacion[p1]} - Player 2: ${puntuacion[p2]}`);
    }
  }
}
