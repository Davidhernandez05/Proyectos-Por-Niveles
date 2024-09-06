listasumar = [1, 2, 3, 4, 5]
listamultiplicar = [1, 2, 3, 4]

def Multiplicarlista(): #Multiplicamos todos los valores de una lista.   
    resultado = 1
    for i in listamultiplicar:
        resultado = resultado * i
    
    return resultado

def sumarLista(): #Sumamos todos los valores de una lista.
    resultado = sum(listasumar)
    return resultado


Numero1 = int(input("ingresa un numero: "))

for i in range(1, 11): #Creamos la tabla de multiplicar del numero que se escriba por consola.
    resultado = Numero1 * i
    print(f"{Numero1} x {i} = {resultado}")
    i += 1


print("--" * 30)


resultado = print(sumarLista())
print("--" * 30)
resultado = print(Multiplicarlista())
print("--" * 30)