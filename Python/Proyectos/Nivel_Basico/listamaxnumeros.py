listaNumeros = [100, 20, 3, 4, 5, 6, 7]

def Menu():
    print("--" * 24)
    print("|                    Menu:                     |")
    print("--" * 24)
    print("| 1. Agregar valores.                          |")
    print("| 2. Eliminar valores.                         |")
    print("| 3. Mostrar lista actual.                     |")
    print("| 4. Buscar el valor mas grande en la lista.   |")
    print("| 5. Salir.                                    |")
    print("--" * 24, "\n")

    opc = int(input("Ingrese una opción: "))
    return opc

def max_in_List(): #Identificamos cual es el numero mas grande.

    numerogrande = 0

    for i in listaNumeros: #Recorremos toda nuestra lista de numeros.
        if i > numerogrande: #identificamos si i es mayor que nuestro numero guardado en la variable.
            numerogrande = i #Si i es mayor que el numero giardado reemplaza este por numero en i.
        
        else:
            numerogrande = numerogrande #Si i es menor que el numero guardado nos deja el numero que ya teniamos guardado.
    
    return numerogrande

def AgregarNumero():
    numero = int(input("ingresa el numero que quieres agregar: "))
    listaNumeros.append(numero) #Agregamos un numero al final de nuestra lista.
    return numero

def Lista(): #Imprimimos todos los valores que se encuentran actualmente en la lista.
    print("--" * 14)
    for i in listaNumeros:
        print("|            ", i)
        print("--" * 14)

def EliminarNumero():
    Lista()
    numero = int(input("Ingrese el numero que quiere eliminar: "))
    listaNumeros.remove(numero) #Eliminamos un numero de nuestra lista.
    return numero

ciclo = True
while ciclo == True:
    opc = Menu()

    if opc == 1:
        numero = AgregarNumero()
        print("\n")
        print("--" * 24)
        print(f"| Se agregro correctamente el numero {numero} a la lista")
        print("--" * 24)
        print("\n")

    elif opc == 2:
        numero = EliminarNumero()
        print("\n")
        print("--" * 24)
        print(f"| Se elimino correctamente el numero {numero} de la lista.")
        print("--" * 24)
        print("\n")

    elif opc == 3:
        Lista()

    elif opc == 4:
        numero = max_in_List()
        print("\n")
        print("--" * 24)
        print(f"| El numero mas grande es el: {numero}.")
        print("--" * 24)
        print("\n")

    elif opc == 5:
        break

    else:
        print("Opcion no valida intentalo nuevamente.")


print("--" * 12)
print("|  Fin del programa... |")
print("--" * 12)