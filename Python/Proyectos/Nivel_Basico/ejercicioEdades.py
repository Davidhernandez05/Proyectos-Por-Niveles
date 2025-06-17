tupla = (11, 20, 50, 14, 18, 21, 59, 10, 40, 32)

def edades(edad):
    contador = 0
    for i in tupla:
        if i >= edad:
            contador += 1
    
    return contador


edad = int(input("Ingresa el filtro de edad que necesitas: "))
personas = edades(edad)

print(f"{personas} personas, son mayores de: {edad} años.")
