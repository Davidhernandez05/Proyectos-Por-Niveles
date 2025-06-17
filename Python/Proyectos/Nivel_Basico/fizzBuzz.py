palabras = ("fizz", "buzz", "fizzbuzz")

def Menu():
    print("--" * 24)
    print("|                    Menu:                     |")
    print("--" * 24)
    print("|Ingresa fizz para multiplos de 3.             |")
    print("|Inglesa buzz para multiplos de 5.             |")
    print("|Ingresa fizzbuzz para multiplos de 3 y de 5.  |")
    print("--" * 24, "\n")

    opc = input("Ingresa tu opción: ")
    opc = opc.replace(' ', '') #Eliminamos todos los espacios en blanco de una palabra.
    return opc.lower() #Transformamos la variable a minusculas.

def multiplos3():
    for i in range(1, 101): #Rango de numeros iterables.
        numero = i % 3
        
        if numero == 0:
            print(f"El numero: {i} es multiplo de 3.")

def multiplos5():
        for i in range(1, 101):
            operacion = i % 5
            
            if operacion == 0:
                print(f"El numero: {i} es multiplo de 5.")

def multiplos3and5():
    """ 
opción mas facil y rapida:
    for i in range(1, 11):
        numero = i % 3 or i % 5
        if numero == 0:
            print(i)
"""
    for i in range(1, 101):
        numero = i % 3 #Pedimos que en la varible se guarde el reciduo (del numero iteble por 3).

        if numero == 0: #Validamos si el reciduo es 0 o no lo es.
            print(f"El numero: {i} es multiplo de 3.")
        numero = i % 5
        if numero == 0:
            print(f"El numero: {i} es multiplo de 5.")


opc = Menu()
if opc in palabras: #Busca en la lista si la palabra existe.
    if opc == "fizz":
        print("\n")
        print("Estos numeros son multiplos de 3:")
        multiplos3() #Llamamos a nuestra funcion.

    elif opc == "buzz":
        print("\n")
        print("Estos numeros son multiplos de 3:")
        multiplos5()

    else: 
        print("\n")
        print("Estos numeros son multiplos de 3 y de 5:")
        multiplos3and5()

else:
    print("Palabra no valida.")