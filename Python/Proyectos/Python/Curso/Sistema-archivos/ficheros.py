from io import open
import pathlib, shutil

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
ruta_original = str(pathlib.Path().absolute()) + "/ficheros.txt"
ruta_nueva = str(pathlib.Path().absolute()) + "/ficheros_copiado.txt"

shutil.copyfile(ruta_original, ruta_nueva)
