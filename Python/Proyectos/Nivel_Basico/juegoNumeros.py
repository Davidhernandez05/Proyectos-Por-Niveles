import random

def Menu():
    print("--" * 12)
    print("|        Menu:         |")
    print("--" * 12)
    print("|1. Jugar.             |")
    print("|2, Reglas del juego.  |")
    print("|3. Salir.             |")
    print("--" * 12)

    opc = int(input("Ingresa una opción: "))
    return opc

def submenu():
    print("--" * 12)
    print("|        SubMenu:      |")
    print("--" * 12)
    print("| 1. Volver a Jugar.   |")
    print("| 2. Salir.            |")
    print("--" * 12)
    
    opc = int(input("Ingresa una opción: "))
    return opc

def reglas():
    print("\n")
    print("--" * 37)
    print("|                    Estas son las reglas del juego:                     |")    
    print("--" * 37)
    print("| Tienes que adivinar el numero, este se encuentra entre el 1 y el 100.  |")
    print("| Tienes tres vidas para lograrlo.                                       |")
    print("--" * 37)
    print("\n")

def juego():
    numero = random.randint(1, 100)
    vidas = 3

    print(numero)
    while vidas > 0:
        
        print("--" * 10)
        print(f"| Tienes {vidas} vidas.  |")
        print("--" * 10)
        
        NumeroUsuario = int(input("Ingresa un numero: "))
        if NumeroUsuario >= 0 and NumeroUsuario <= 100:
            if numero != NumeroUsuario:
                print("--" * 18)
                print(f"| Lo siento el {NumeroUsuario} no es el numero.  |")
                print("--" * 18, "\n")
                vidas -= 1

            elif NumeroUsuario == numero:
                break

    if vidas == 0:
        return "Perdiste..."
    
    else:
        return "Ganste..."

print("Bienvenido a este juego de numeros.")

ciclo = True
while ciclo == True:
    opc = Menu()

    if opc == 1:
        print("Inicia el juego.")
        Resultado = juego()
        
        print("--" * 9)
        print("|   ",Resultado)
        print("--" * 9)

        opc2 = submenu()        
        if opc2 == 2:
            break

    elif opc == 2:
        reglas()

    elif opc == 3:
        break

    else:
        print("Opción invalida vuelve a intentarlo.")