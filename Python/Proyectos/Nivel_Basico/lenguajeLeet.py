leet = {
    "a": 4,
    "e": 3,
    "g": 6,
    "i": "|",
    "l": 1,
    "o": 0,
    "s": 5,
    "t": 7,
    "z": 2
}
finalword = []

def lenguaje(word):
    
    for i in word:
        if i in leet: # Miramos si i se encuentra en el diccionario.
            i = leet[i] # Aqui hacemos que i sea el valor que representa en el diccionario.
            finalword.append(i) # Agregamos i a la lista.
        else:
            finalword.append(i)



words = input("Ingresa una palabra: ")
lenguaje(words.lower())

Palabraleet = "".join(map(str, finalword)) # Quitamos la lista y unimos los valores.
print(Palabraleet.upper())