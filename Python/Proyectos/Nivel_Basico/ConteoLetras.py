vocales = ["a", "e", "i", "o", "u"]

def menu():
    print("--" * 14)
    print("|            MENU:         |")
    print("--" * 14)
    print("| 1. Conteo de caracteres. |")
    print("| 2. Conteo de vocales.    |")
    print("| 3. Salir.                |")
    print("--" * 14)

    opc = int(input("\nIngresa la opción: "))
    return opc

def CaracteresPalabra(Pablabra):
    Contador = 0
    for i in Pablabra:
        Contador += 1   
    return Contador

def Vocales(Palabra):
    Vocal = 0
    for i in Palabra:
        if i in vocales:
            Vocal += 1
        else:
            Vocal += 0
    
    return Vocal

ciclo = True
while ciclo == True:
    seleccion = menu()

    if seleccion == 1:
        palabra = input("Inhresa la pablabla: ")
        caracteres = CaracteresPalabra(palabra)
        print("\n")
        print("--" * 24)
        print(f"|La palabra: {palabra}, cuenta con: {caracteres} Letras.")
        print("--" * 24, "\n")

    elif seleccion == 2:
        palabra = input("Ingresa la palabra: ")
        ConteoVocal = Vocales(palabra)
        print("\n")
        print("--" * 24)
        print(f"La palabra: {palabra}, tiene: {ConteoVocal} Vocales.")
        print("--" * 24, "\n")

    elif seleccion == 3:
        break

    else:
        print("Opcion no disponible intentalo nuevamente.")

print("--" * 11)
print("| Fin del Programa.. |")
print("--" * 11, "\n")