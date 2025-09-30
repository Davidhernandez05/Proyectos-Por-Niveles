'''
Escribir un programa que añada alores a una lista,
mientras que su longitud sea menor a 120 y luego mostrar la lista.
'''

lista = []
long = 5

# Con ciclo FOR:
def agregarElemento(elemto):
  lista.append(elemto)


for valor in range(1, (long + 1)):
  if len(lista) < long:
    elem = input("Ingresa el valor que vas a ingresar a la lista: ")
    agregarElemento(elem)

else:
  print("No es posible ingresar mas elementos a la lista.")

print(lista)


# Con ciclo While:

valor = 0
long = 2
lista2 = []

while valor <= long:
  if len(lista2) < long:
    elem = input("Ingresa el valor que vas a ingresar a la lista: ")
    lista2.append(elem)
    
  else:
    print("No es posible ingresar mas elementos a la lista.")

  valor += 1

print(lista2)