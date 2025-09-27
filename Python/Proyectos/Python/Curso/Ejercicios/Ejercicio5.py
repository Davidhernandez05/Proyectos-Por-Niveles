'''
Hacer un programa que pida numeros indefinidos al usuario hasta que escriba el numero: 111
'''


while True:
  number = int(input("Ingresa un numero: "))
  
  if number == 111:
    break

  else:
    print("El numero ingresado fue: ", number)