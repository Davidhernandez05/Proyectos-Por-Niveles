import random as r
opc = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"]

def opciones():
    print("Piedra.")
    print("Papel.")
    print("Tijera.")
    print("Lagarto.")
    print("Spock.")

def jugadores():
        maquina = r.choice(opc)
        
        jugador = input("Ingresa una opción: ")
        jugador = jugador.capitalize()
        
        print(f"Opcion jugador: {jugador}")
        if jugador in opc:
            
            return jugador, maquina

        else:
            print("Opción no valida.")

def juego():
    
    puntosMaquina = 0
    puntosJugador = 0
    ciclo = True

    while ciclo == True:
        
        print("-" * 30)
        print(f"| El jugador tiene: {puntosJugador} punto. |")
        print(f"| La maquina tiene: {puntosMaquina} punto. |")
        print("-" * 30)

        Opcion1, Opcion2 = jugadores()
        
        print("--" * 20)
        print(f"| Jugador: {Opcion1}, maquina: {Opcion2}.")
        print("--" * 20, "\n")

        if Opcion1 == "Lagarto" and Opcion2 == "Papel":
            print("Lagarto le gana a Papel. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Lagarto" and Opcion2 == "Spock":
            print("Lagarto le gana a Spock. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Spock" and Opcion2 == "Tijera":
            print("Spock le gana a tijera. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Spock" and Opcion2 == "Piedra":
            print("Spock le gana a Piedra. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Tijera" and Opcion2 == "Papel":
            print("Tijera le gana a Papel. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Tijera" and Opcion2 == "Lagarto":
            print("Tijeras le gana a Lagarto. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Papel" and Opcion2 == "Piedra":
            print("Papel le gana a Piedra. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Papel" and Opcion2 == "Spock":
            print("Papel le gana a Spock. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Piedra" and Opcion2 == "Lagarto":
            print("Piedra le gana a Lagarto. \n")
            puntosJugador += 1
        
        elif Opcion1 == "Piedra" and Opcion2 == "Tijera":
            print("Piedra le gana a Tijera. \n")
            puntosJugador += 1

        elif Opcion2 == "Lagarto" and Opcion1 == "Papel":
            print("Lagarto le gana a Papel. \n")
            puntosMaquina += 1
        
        elif Opcion2 == "Lagarto" and Opcion1 == "Spock":
            print("Lagarto le gana a Spock. \n")
            puntosMaquina += 1
        
        elif Opcion2 == "Spock" and Opcion1 == "Tijera":
            print("Spock le gana a tijera. \n")
            puntosMaquina += 1
        
        elif Opcion2 == "Spock" and Opcion1 == "Piedra":
            print("Spock le gana a Piedra. \n")
            puntosMaquina += 1
        
        elif Opcion2 == "Tijera" and Opcion1 == "Papel":
            print("Tijera le gana a Papel. \n")
            puntosMaquina += 1
        
        elif Opcion2 == "Tijera" and Opcion1 == "Lagarto.":
            print("Tijeras le gana a Lagarto. \n")
            puntosMaquina += 1
        
        elif Opcion2 == "Papel" and Opcion1 == "Piedra":
            print("Papel le gana a Piedra. \n")
            puntosMaquina += 1
        
        elif Opcion2 == "Papel" and Opcion1 == "Spock":
            print("Papel le gana a Spock. \n")
            puntosMaquina += 1
        
        elif Opcion2 == "Piedra" and Opcion1 == "Lagarto":
            print("Piedra le gana a Lagarto \n")
            puntosMaquina += 1        
        elif Opcion2 == "Piedra" and Opcion1 == "Tijera":
            print("Piedra le gana a Tijera. \n")
            puntosMaquina += 1


        elif Opcion1 == Opcion2:
            print("Empate.")
            
        if puntosJugador == 3 or puntosMaquina == 3:
            return puntosJugador, puntosMaquina
        

opciones()
player, mach = juego()

if player == 3:
    print("--" * 19)
    print(f"| Gana el jugador.                     |")
    print(f"| Puntos jugador: {player}, puntos maquina {mach}. |")
    print("--" * 19)

else:
    print("--" * 20)
    print(f"| Gana la maquina.                     |")
    print(f"| Puntos jugador: {player}, puntos maquina {mach}. |")
    print("--" * 20)