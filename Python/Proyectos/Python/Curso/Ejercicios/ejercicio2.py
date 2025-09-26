'''
Mostrar las tablas de multiplicar del 1 al 10.
Mostrar el titulo de la tabla de multiplicar y las multiplicaciones del 1 al 10.
'''


for num1 in range(1, 11):
  print("\n----------------")
  print(f"| Tabla del: {num1} |")
  print("----------------")

  for num2 in range(1, 11):
    result = num1 * num2
    print(f"{num1} x {num2} = {result}")