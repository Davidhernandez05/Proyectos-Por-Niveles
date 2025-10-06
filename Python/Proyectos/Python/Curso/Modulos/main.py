# Importa todo pero al momento de llamar una función tenemos que poner mi modulo.
#import miModulo

#Importar solamente un afunción:
#from miModulo import holamundo

#Importamos todas las funciones de miModulo pero ya no tenemos que llamar al modulo.
from miModulo import *

#print(miModulo.holamundo("David Hernandez"))
#print(holamundo("Miguel"))
print(holamundo("David"))

# Modulo de fecha:
import datetime
print(datetime.date.today())

fecha_completa = datetime.datetime.now()
print(fecha_completa)
print(fecha_completa.year)

fecha_personalizada = fecha_completa.strftime("%d/%m/%Y, %H:%M:%S") #Nos permite formatear la fecha segun lo que necesitemos.
print(fecha_personalizada)

print(datetime.datetime.now().timestamp())
print(datetime.datetime.now().time())


#Modulo de matematicas:
import math

print("Raiz cuadrada de 10: ", math.sqrt(10))
print("Numero pi: ", float(math.pi))
print("Redondear: ", math.ceil(6.12894123846)) # Redondea hacia arriba
print("Redondear: ", math.floor(6.12894123846)) # Redondea hacia abajo

# Modulo random:
import random
print("Numero aleatorio entre 15 y 67: ", random.randint(15, 67))