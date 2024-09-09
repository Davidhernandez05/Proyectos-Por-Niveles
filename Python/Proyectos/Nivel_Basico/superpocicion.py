lista1 = ["hola", "mundo", "como estas"]
lista2 = ["HOLA", "como estas", "bien"]

contadorcoinciden = 0
contadorno = 0

for palabra1 in lista1:

    for palabra2 in lista2:

        palabra1 = palabra1.capitalize() #-> Nos coloca la primer letra de una palabra en payusculas.
        palabra2 = palabra2.capitalize()
        if palabra1 == palabra2:
            
            print(f"{palabra1}, Coincide con: {palabra2}")
            contadorcoinciden += 1
        else:
            print(f"{palabra1}, No coincide con: {palabra2}")
            contadorno += 1
        

print("\n")
print("--" * 30)
print(f"coincidieron: {contadorcoinciden} palabras de las dos listas.")
print("--" * 30)
print(f"No coincideron: {contadorno} palabras de las dos listas.")
print("--" * 30)
print("\n")
            