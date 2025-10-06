from io import open
import pathlib

# Abrir Archivo:
ruta = str(pathlib.Path().absolute()) + "/ficheros.txt" #Buscamos la ruta absoluta.
archivo = open(ruta, "+a")

# Escribir en un archivo.
archivo.write("Soy un texto ingresado desde python.")

# Cerrar archivo:
archivo.close()