
import re #importamos la libreria re que funciona para expresiones regulares.

url = "https://retosdeprogramacion.com?year=2023&challenge=0&challenge=Python"

components = url.split("&") #separamos la ulr en donde encuentre el "&"

for component in components:
    if "=" in component:
        param = component.split("=") #Separamos component donde encuentre el "="
        if len(param) == 2 and component != "":
            print(param[1]) # Imprimimos por pantalla el valor que se encuentra en la primera posición.


regex = r"=([a-zA-Z0-9]+)" #Aqui le decimos a r (Expresion regular) que busque todo lo que esta despues del valor (=) ya sean (minusculas mayusculas o numeros).
#El (+) permite que tome mas de un solo valor.

parametro = re.findall(regex, url) #Le decimos que en parametro guarde todo lo que encuentre teniendo en cuenta la expresión regular (regex) en el str (url)
#findall busca todos los resultados que sean iguales a la expresion regular que creamos en el str que necesitemos.

print(parametro)