import clases

persona = clases.Persona()

persona.setNombre("David")
persona.setApellidos("Hernandez")
persona.setEdad(28)
persona.setAltura(1.75)

print(f"Bienvenido: {persona.getNombre()} {persona.getApellidos()}")
print(persona.dormir())

print("-------------------------------")

informatico = clases.Informatico()

informatico.setNombre("Andres")
informatico.setApellidos("Martinez")

print(f"El informatico es: {informatico.getNombre()} {informatico.getApellidos()}.")
print(informatico.getLenguajes())
print(informatico.caminar())

print("-------------------------------")

tecnico = clases.TecnicoRedes()
tecnico.setNombre("Many")
print(f"Tecnico: {tecnico.getNombre()}, Nivel de Experto: {tecnico.auditarRedes}")
print(f"Lenguajes: {tecnico.getLenguajes()}")