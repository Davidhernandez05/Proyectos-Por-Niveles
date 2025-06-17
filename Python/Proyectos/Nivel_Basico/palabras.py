frase = []
iso = []
abc = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "z", "x", "c", "v", "b", "n", "m"]

def menu():
    print("--" * 14)
    print("| Menu:                    |")
    print("--" * 14)
    print("| 1.  Heterograma.         |")
    print("| 2.  Isograma.            |")
    print("| 3.  Pangrama.            |")
    print("--" * 14)

    opc = int(input("Ingresa tu opción: "))
    return opc

def heterograma(palabra):
    palabra = palabra.lower()
    palabrafin = palabra.replace(' ', '')
    
    for letra in palabrafin:
        contador = palabrafin.count(letra) #Nos permite saber cuantas veces se repite una letra en una palabra en concreto.
    
        if contador < 2:
            frase.append("SI") #Agregamos Si si es un heterograma a la lista.
            
        else:
            frase.append("No")#Agregamos No si no es un heterograma a la lista.
    
    if "No" in frase:
        print(f"La palabra: {palabra}.\nNo es un heterograma.")
    
    else:
        print(f"La palabra: {palabra}.\nSi es un heterograma.")
            

def isograma(palabra):
    palabra = palabra.lower()
    palabrafin = palabra.replace(' ', '')
    
    for letra in palabrafin:
        contador = palabrafin.count(letra)
        iso.append(contador) #Agregamos cada contador de letras a nuestra lista.

    for i in iso:
        for e in iso:
            if i == e:
                frase.append("Si")
            
            else:
                frase.append("No")
    
    if "No" in frase:
        print(f"La palabra: {palabra}.\nNo es un isograma.")
    
    else:
        print(f"La palabra: {palabra}.\nSi es un isograma.")

def pangrama(palabra):
    contador = 0
    palabra = palabra.lower()
    palabrafin = palabra.replace(' ', '')
    
    for i in abc:
        if i in palabra:            
            contador += palabrafin.count(i)
            iso.append("Si")
        
        else:
            contador = 0
            iso.append("No")
    

    if "No" in iso:
        print(f"La Palabra:\n{palabra}.\nNo es un pangrama.")
    else:
        print(f"La Palabra:\n{palabra}.\nSi es un pangrama.")



opcion = menu()
word = input("Ingresa una frase: ")

if opcion == 1:
    heterograma(word)

elif opcion == 2:
    isograma(word)

elif opcion == 3:
    pangrama(word)

else:
    print("Opcion no valida...")