
import requests

url = "https://pokeapi.co/api/v2/pokemon/?limit=151" #URL de la API a la que nos vamos a conectar.


respuesta = requests.get(url) #llamamos a la API con el metodo get. -> El resultado para que funcione debe ser 200.

for pokemon in respuesta.json()["results"]: #Transformamos el archivo a extension Json y llamamos a results que es donde esta la información.
    
    print(f"Nombre del pokemon: {pokemon["name"]}") #-> Imprimimos lo que esta en name en el archivo json.
    