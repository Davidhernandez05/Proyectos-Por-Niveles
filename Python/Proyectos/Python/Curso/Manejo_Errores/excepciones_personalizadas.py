# Excepciones personalizadas o lanzar excepciones:

try:
  nombre = input("Ingresa tu nombre: ")
  edad = int(input("Ingresa tu edad: "))

  if edad < 5 or edad > 110:
    raise ValueError("La edad introducida no es valida.")
  elif len(nombre) <= 1:
    raise ValueError("El nombre no esta completo.")
  else:
    print(f"Bienvenido al master en python: {nombre}!!")

except ValueError:
  print("Los datos ingresados no son valido.")

except Exception as e:
  print("Error: ", e)