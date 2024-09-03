def menu():
    print("--" * 14)
    print("|            MENU:         |")
    print("--" * 14)
    print("| 1. Comparar dos numeros  |")
    print("| 2. Comparar tres numeros |")
    print("| 3. Salir.                |")
    print("--" * 14)

    opc = int(input("Ingresa la opción: "))
    return opc

def dosNumeros(Numero1, Numero2):
    if Numero1 > Numero2: #Validamos si el numero 1 es mayor que el numero 2
        return f"El numero: {Numero1} es Mayor que el Numero {Numero2}"
    
    elif Numero1 < Numero2:
        return f"El numero: {Numero1} es Menor que el Numero {Numero2}"
    
    else:
        return "Los numeros son iguales."

def tresNumeros(Numero1, Numero2, Numero3):
    if Numero1 > Numero2 and Numero1 > Numero3:
        return f"El numero: {Numero1} es Mayor que el Numero: {Numero2} y que el Numero: {Numero3}"

    elif Numero1 < Numero2 and Numero2 > Numero3:
        return f"El numero: {Numero2} es Mayor que el Numero: {Numero1}, y que el Numero: {Numero3}"
    
    elif Numero1 < Numero3 and Numero2 < Numero3:
        return f"El numero: {Numero3} es Mayor que el Numero: {Numero1}, y que el Numero: {Numero2}"

    else:
        return "Los numeros son iguales."
    


ciclo = True
while ciclo == True:
    seleccion = menu()

    if seleccion == 1:
        Numero1 = int(input("Ingresa el primer numero: "))
        Numero2 = int(input("Ingresa el segundo numero: "))
        Resultado = dosNumeros(Numero1, Numero2) #Llamamos a nuestra función.
        print("\n")
        print("--" * 20)
        print("|", Resultado)
        print("--" * 20)
        print("\n")
    
    elif seleccion == 2:
        Numero1 = int(input("Ingresa el primer numero: "))
        Numero2 = int(input("Ingresa el Segundo numero: "))
        Numero3 = int(input("Ingresa el Tercer numero: "))
        Resultado = tresNumeros(Numero1, Numero2, Numero3)
        print("\n")
        print("--" * 34)
        print("|", Resultado)
        print("--" * 34)
        print("\n")
    
    elif seleccion == 3:
        break #Forzamos la salida del ciclo.
    
    else:
        print("Opción no valida intenta nuevamente.")
    

print("\n")
print("--" * 11)
print("| Fin del Programa.. |")
print("--" * 11)
print("\n")

