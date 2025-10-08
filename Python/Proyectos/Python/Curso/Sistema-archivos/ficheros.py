from io import open
import pathlib, shutil, os

# Abrir Archivo:
ruta = str(pathlib.Path().absolute()) + "/ficheros.txt" #Buscamos la ruta absoluta.
archivo = open(ruta, "+a")

# Escribir en un archivo.
archivo.write("Soy un texto ingresado desde python. \n")

# Cerrar archivo:
archivo.close()

# Abrir un archivo
ruta = str(pathlib.Path().absolute()) + "/ficheros.txt" #Buscamos la ruta absoluta.
archivo_lectura = open(ruta, "+r")

# leer contenido:
contenido = archivo_lectura.read()
print(contenido)

# Leer contenido y guardarlo en una lista:
lista = archivo_lectura.readlines()
archivo_lectura.close()

print(lista)

# copiar un archivo:
'''
ruta_original = str(pathlib.Path().absolute()) + "/ficheros.txt"
ruta_nueva = str(pathlib.Path().absolute()) + "/ficheros_copiado.txt"

shutil.copyfile(ruta_original, ruta_nueva)
'''

# Mover un archivo:
'''
ruta_original = str(pathlib.Path().absolute()) + "/ficheros.txt"
ruta_nueva = str(pathlib.Path().absolute()) + "/ficheros_copiado.txt"

shutil.move(ruta_original, ruta_nueva)
'''

#Eliminar un archivo.
ruta_original = str(pathlib.Path().absolute()) + "/ficheros.txt"
os.remove(ruta_original)

#Comprobar si un archivo existe.
import os.path
# print(os.path.abspath("./")) -> Nos da la ruta de un archivo.

ruta_comprobar = "/Users/davidhernandez/Desarrollo/variosLenguajes/Python/Proyectos/Python/Curso/Sistema-archivos/ficheros.py"

if os.path.isfile(ruta_comprobar):
  print("El archivo existe")

else:
  print("El archivo no existe.")
