import random #Importamos la libreria Random para los numeros aleatorios.

def MenuAdicional():
    print("1. Continuar.")
    print("2. Salir")
    opc = int(input("Ingrese una opcion: "))

    if opc == 1:
        return True
    else:
        return False

def validacionNumeros(Numero1, Numero2, Op):

    if Numero1 <= Numero2:
        if Op == 1:
            NumeroFinal = NumeroEntero(Numero1, Numero2)
            return NumeroFinal
        elif Op == 2:
            NumeroFinal = NumeroDecimal(Numero1, Numero2)
            return NumeroFinal
        else:
            return "Ingresaste Otra Opcion."
    else:
        return "Los numeros ingresados no son correctos."


def NumeroEntero(Numero1, Numero2):
    NumeroFinalEntero = random.randint(Numero1, Numero2)
    return NumeroFinalEntero


def NumeroDecimal(Numero1, Numero2):
    NumeroFinalDecimal = random.uniform(Numero1, Numero2)
    return NumeroFinalDecimal



while True:

    print("--" * 16)
    print("|  Menu:                       |")
    print("--" * 16)
    print("| 1. Numero aleatorio Entero.  |")
    print("| 2. Numero Aleatorio decimal. |")
    print("| 3. Salir.                    |")
    print("--" * 16)
    print("\n")

    opcion = int(input("Ingresa la Opción: "))
    if opcion == 1:

        NumeroA = int(input("Ingresa el primer número: "))
        NumeroB = int(input("Ingresa el segundo Numero: "))
        NumeroINT = validacionNumeros(NumeroA, NumeroB, opcion)

        print("--" * 16)
        print("| Resultado: ", NumeroINT)
        print("--" * 16)
        print("\n")
        
        opc = MenuAdicional()
        if opc == False:
            break

    elif opcion == 2:

        NumeroA = float(input("Ingresa el primer número: "))
        NumeroB = float(input("Ingresa el segundo Numero: "))
        Numerodecimal = validacionNumeros(NumeroA, NumeroB, opcion)
        
        print("--" * 16)
        print("| Resultado: ", Numerodecimal)
        print("--" * 16)
        print("\n")
        
        opc = MenuAdicional()
        if opc == False:
            break

    elif opcion == 3:
        break

    else:
        print("Opcion Incorrecta intentalo nuevamente.")


print("--" * 12)
print("|  Fin del programa... |")
print("--" * 12)