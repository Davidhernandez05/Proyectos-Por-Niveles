
try:
  
  numero = int(input("Ingresa un numero para elearlo al cuadrado: "))
  print("El cualdrado es: " + str(numero * numero))

except TypeError:
  print("Debes convertir tus cadenas a enteros.")
except ValueError:
  print("Dato ingresado no valido, no es un numero.")
except Exception as e:
  print("ha ocurrido un error: ", type(e).__name__) #-> Nos indica por pantalla que tipo de error tenemos.