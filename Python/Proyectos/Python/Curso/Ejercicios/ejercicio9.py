"""
Crear un Script que tenga 4 variables, una lista, un string, un entero y un booleano
y que imprima un mensaje segun el tipo de dato de cada variable.
- Usar funciones
"""

def traducirTipo(tipo):
  result = ""
  if tipo == int:
    result = "Numero"

  elif tipo == str:
    result = "Cade de texto"

  elif tipo == bool:
    result = "Booleano"

  elif tipo == list:
    result = "lista"
  
  return result.upper()


def comprobarTipado(data, tipo):
  test = isinstance(data, tipo)
  result = ""

  if test:
    result = f"Esta variable es del tipo: {traducirTipo(tipo)}"
  
  else:
    result = f"El tipo de dato no corresponde con el idicando."
    
  return result


lista = ["Hola mundo", 77]
entero = 89
string = "david"
boolean = True


print(comprobarTipado(lista, list))
print(comprobarTipado(entero, int))
print(comprobarTipado(string, str))
print(comprobarTipado(boolean, bool))
print(comprobarTipado(boolean, str))