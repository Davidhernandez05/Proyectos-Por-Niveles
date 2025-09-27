'''
El programa tiene que pedir la nota de 15 alumnos
y sacar por pantalla cuantos han aprobado y cuantos han suspendido.
'''

estuantes = 2
aprobados = 0
reprobados = 0
notaaprob = 60
contador = 1

while contador <= estuantes:

  nota = int(input(f"Ingresa la nota del estudiante {contador}: "))

  if nota >= notaaprob:
    print("El estudiante aprobo.")
    aprobados += 1
  
  else:
    print("El estudiante reprobo")
    reprobados += 1

  contador += 1


print("\nTotal estudiantes aprobados: ", aprobados)
print("Total estudiantes reprobados: ", reprobados, "\n")