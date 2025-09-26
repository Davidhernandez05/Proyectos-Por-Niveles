'''
hacer un programa que muestre todos los numeros impares entre dos numeros que decida el usuario.
'''

def menu():
  num1 = int(input("ingresa el primer numero: "))
  num2 = int(input("ingresa el segundo numero numero: "))

  if num1 < num2:
    impares(num1, num2)
  else:
    print("El primer numero no puede ser menor que el segundo numero.")


def impares(num1, num2):

  print(f"El rango de numeros indicado es: {num1} - {num2}")
  for num in range(num1, (num2 + 1)):
    if num % 2 == 1:
      print(f"El numero: {num} es impar.")


menu()