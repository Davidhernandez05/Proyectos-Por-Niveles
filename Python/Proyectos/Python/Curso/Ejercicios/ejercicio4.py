'''
Cuanto es el x por ciento de un numero x indicado por el usuario.
'''

number = int(input("Ingresa un numero:  "))
percentage = int(input(f"Ingresa el porcentaje que quieres sacar de {number}: "))

result = (percentage * number) / 100
print(f"El: {percentage}% de {number} es: {result}")