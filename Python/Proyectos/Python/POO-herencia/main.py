import clases

persona = clases.Persona()

persona.setNombre("David")
persona.setApellidos("Hernandez")
persona.setEdad(28)
persona.setAltura(1.75)

print(f"Bienvenido: {persona.getNombre()} {persona.getApellidos()}")
print(persona.dormir())

print("-------------------------------")

informatio = clases.Informatico()

informatio.setNombre("Andres")
informatio.setApellidos("Martinez")

print(f"El informatico es: {informatio.getNombre()} {informatio.getApellidos()}.")
print(informatio.getLenguajes())