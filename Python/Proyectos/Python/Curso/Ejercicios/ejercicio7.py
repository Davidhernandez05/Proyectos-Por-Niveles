'''
Hacer un programa que tenga una lista de 8 numeros enteros y haga lo siguiente:
- Recorrer la lista y mostrarla.
- Ordenar la lista.
- Mostrar su longitud.
- Buscar un elemento (Que el usuario ingrese por pantalla).
'''

numbers = [1, 2, 10, 50, 20, 80, 100]

def mostrarLista(lista):
  resultado = ""

  for elemento in lista:
    resultado += str(elemento)
    resultado += "\n"

  return resultado

# recorrer la lista y mostrarla:
print(mostrarLista(numbers))

# Ordenar la lista:
numbers.sort()
print(numbers)

# Mostrar la longitud de la lista:
print("Longitud de la lista: ", len(numbers))

# Mostrar elemento de la lista:
num = int(input("Ingresa el numero que vas a buscar: "))

if num in numbers:
  print(f"Se encontro el número: {num} en la lista.")

else:
  print(f"No se encontro el número: {num} en la lista.")