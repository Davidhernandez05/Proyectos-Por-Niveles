import random as r
puntajes = {
    0: "Love",
    15: 15,
    30: 30,
    40: 40
}

def Resultados(jugador1, jugador2):

    jugador1 = puntajes[jugador1]
    jugador2 = puntajes[jugador2]

    if jugador1 == jugador2:
        print("\n")
        print("--" * 11)
        print(f"|Deuce a {jugador1} puntos.|")
    
    else:
        print("\n")
        print("--" * 13)
        print("|        Puntajes:      |")
        print("--" * 13)
        print(f"|Jugador 1: {jugador1} puntos. |")
        print(f"|Jugador 2: {jugador2} puntos. |")
        print("--" * 13)

def jugar():

    player1 = 0
    player2 = 0
    juego = True

    while juego == True:
        
        Resultados(player1, player2)

        punto = r.choice(["player1", "player2"])
        print("--" * 11)    
        print(f"|Punto para: {punto}.|")
        print("--" * 11)

        if punto == "player1":
            if player1 == 0:
                player1 += 15
                
            elif player1 == 15:
                player1 += 15

            elif player1 == 30:
                player1 += 10
        
        else:
            if player2 == 0:
                player2 += 15

            elif player2 == 15:
                player2 += 15

            elif player2 == 30:
                player2 += 10

        if player1 == 40:
            break
        elif player2 == 40:
            break
    
    return player1, player2


jugador1, jugador2 = jugar()

jugador1 = puntajes[jugador1]
jugador2 = puntajes[jugador2]

print("\n")
print("--" * 13)
print("|     Puntaje final:     |")
print("--" * 13)
print(f"| Jugador 1: {jugador1} puntos.  |")
print(f"| Jugador 2: {jugador2} puntos.  |")
print("--" * 13)