from coche import Coche

carro = Coche("Porche", "911", "Rojo", 4)
print(carro.coche())


# Detectar tipado:

if type(carro) == Coche:
  print("Es un objeto de tipo coche.")
else:
  print("No es un objero de tipo coche.")


# Visibilidad -> Publicos y provados.
carro.getPribado()