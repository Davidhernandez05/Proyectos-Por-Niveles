
tabla = [
  {
    "CATEGORIA": "ACCION",
    "JUEGOS": ["GTA", "COD", "PUGB"]
  },
  {
    "CATEGORIA": "AVENTURAS",
    "JUEGOS": ["ASSESING", "CRASH", "Prince Of Persia"]
  },
  {
    "CATEGORIA": "DEPORTES",
    "JUEGOS": ["FIFA 21", "PRO 21", "MOTO GP 21"]
  }
]

for categoria in tabla:
  # Recorremos el nombre de las categorias y lo imprimimos.
  print(f"--------- {categoria['CATEGORIA']} ---------")
  
  for juego in categoria['JUEGOS']:
    # Recorremos el nombre de cada juego y lo imprimimos.
    print(juego)