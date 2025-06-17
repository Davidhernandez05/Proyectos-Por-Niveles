/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
 */

const opcionesJuego = ["piedra", "papel", "tijera", "lagarto", "spock"];

function juego(p1, p2) {
  switch (p1) {
    case "piedra":
      if (p1 === "piedra" && p2 === "lagarto") {
        console.log(`Piedra aplasta lagarto.`);
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      } else if (p1 === "piedra" && p2 === "tijeras") {
        console.log("Piedra aplasta tijeras");
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      }
      break;
    case "papel":
      if (p1 === "papel" && p2 === "piedra") {
        console.log(`Papel cubre piedra`);
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      } else if (p1 === "papel" && p2 === "spock") {
        console.log("Papel desaprueba Spock");
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      }
      break;
    case "tijera":
      if (p1 === "tijeras" && p2 === "papel") {
        console.log(`Tijeras cortan papel: Gana el jugador 1`);
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      } else if (p1 === "tijeras" && p2 === "lagarto") {
        console.log("Tijeras decapitan lagarto: Gana el jugador 1");
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      }
      break;
    case "lagarto":
      if (p1 === "lagarto" && p2 === "spock") {
        console.log(`Lagarto envenena Spock`);
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      } else if (p1 === "lagarto" && p2 === "papel") {
        console.log("Lagarto come papel");
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      }
      break;
    case "spock":
      if (p1 === "spock" && p2 === "tijeras") {
        console.log(`Spock destruye tijeras`);
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      } else if (p1 === "spock" && p2 === "piedra") {
        console.log("Spock vaporiza piedra");
        console.log(`gana el jugador 1 con la opcion: ${p1}`);
      }
      break;
  }
  switch (p2) {
    case "piedra":
      if (p2 === "piedra" && p1 === "lagarto") {
        console.log(`Piedra aplasta lagarto.`);
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      } else if (p2 === "piedra" && p1 === "tijeras") {
        console.log("Piedra aplasta tijeras");
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      }
      break;
    case "papel":
      if (p2 === "papel" && p1 === "piedra") {
        console.log(`Papel cubre piedra`);
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      } else if (p2 === "papel" && p1 === "spock") {
        console.log("Papel desaprueba Spock");
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      }
      break;
    case "tijera":
      if (p2 === "tijeras" && p1 === "papel") {
        console.log(`Tijeras cortan papel: Gana el jugador 1`);
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      } else if (p2 === "tijeras" && p1 === "lagarto") {
        console.log("Tijeras decapitan lagarto: Gana el jugador 1");
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      }
      break;
    case "lagarto":
      if (p2 === "lagarto" && p1 === "spock") {
        console.log(`Lagarto envenena Spock`);
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      } else if (p2 === "lagarto" && p1 === "papel") {
        console.log("Lagarto come papel");
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      }
      break;
    case "spock":
      if (p2 === "spock" && p1 === "tijeras") {
        console.log(`spock destruye tijeras`);
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      } else if (p2 === "spock" && p1 === "piedra") {
        console.log("Spock vaporiza piedra");
        console.log(`Gana el jugador 2, con la opcion: ${p2}`);
      }
      break;
  }
}

let player1 = prompt(
  " Opciones: piedra, papel, tijera, lagarto , spock. Ingrese una opcione: "
);
let player2 = prompt(
  "Opciones: piedra, papel, tijera, lagarto , spock. Ingrese una opcione: "
);
console.log(player1);
console.log(player2);

if (player1 !== player2) {
  const resultado = juego(player1.toLowerCase(), player2.toLowerCase());
} else {
  console.log(`Es un empate ambos jugadores eligieron: ${player1}`);
}
