
try:
  nombre = input("Ingresa un nombre: ")

  if len(nombre) > 1:
    nombre_usuario = "El nombre es: " + nombre

  print(nombre_usuario)

except:
  print("Nombre no valido.")

else:
  print("Todo a funcionado correctamente.")

finally:
  print("Fin de la iteración!!.")