import random as r

words = ["hola", "mañana", "david"]

cadenaOriginal = r.choice(words)

numero = len(cadenaOriginal)
porcentaje = int((numero / 100) * 60) #Identificamos cuantas letras reprenta el 60% de la palabra.

rango = r.sample(range(numero), porcentaje) #Le decimos que nos regrese un pocision teniendo en cuenta la longitud de la palabra y el valor del % de la palabra.
cadenafinal = ""


for index, letter in enumerate(cadenaOriginal):
    cadenafinal += "_" if index in rango else letter #Le decimos si el tango es igual a la pocicion del index nos agrege _ de lo contrario la deje como esta en el letter.

vidas = 4

while vidas > 0:
    
    print(f"Tienes: {vidas} Vidas.")
    print(cadenafinal)
    palabraLeta = input("Ingresa la palabra o una letra: ")

    if len(palabraLeta) == 1:
        
        nuevacadena = ""
        validacion = False

        for index, letter in enumerate(cadenaOriginal):

            if palabraLeta == letter and cadenafinal[index] == "_":
                 nuevacadena += palabraLeta
                 validacion = True
                
            else: 
                nuevacadena += cadenafinal[index]
        
        cadenafinal = nuevacadena
        
        if validacion == True:

            if cadenaOriginal == cadenafinal:
                print(f"La palabra coincide.\nLa palabra {palabraLeta} es correcta.")
                break
            
            else:
                print("Has acertado la letra...")
        
        else: 
            print("No encontraste ninguna letra.")
            vidas -= 1

    elif len(palabraLeta) == len(cadenaOriginal):
        
        if palabraLeta == cadenaOriginal:
            
            print(f"La palabra coincide.\nLa palabra {palabraLeta} es correcta.")
            break
        
        else:
            
            print("La palabro no es correcta.")
            vidas -= 1

    else:
        
        print("La cantidad de letras no coinciden.")
        vidas -= 1

if vidas == 0:
    print("Lo siento.\nPerdiste...")