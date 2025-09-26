'''
Crea un ejercicio en donde se impriman todos los numeros desde un rango que el usuario ingrese por pantalla.
'''

num1 = int(input("Ingresa el primer numero: "))
num2 = int(input("Ingresa el segundo numero: "))

if num1 < num2:
  for finalnum in range(num1, num2 + 1):
    print(finalnum)
  
else:
  print("El número 1 debe ser mayor que el número 2")