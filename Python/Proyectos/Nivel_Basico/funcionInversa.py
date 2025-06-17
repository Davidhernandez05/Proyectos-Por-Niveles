def inversa(palabra):
    palabra = palabra.upper() #Volvemos el string a mayusculas.
    return palabra[::-1] #Invertimos la palabra diciendole que no tenga en cuenta el inicio ni el final pero que la reescriba de atras hacia adelante.
        
def palindromo(palindro):
    frase = palindro.upper()
    palabra1 = inversa(palindro)

    if frase == palabra1:
        return print("Es un palindromo.")
    else:
        return print("No es palindromo.")
    

frase = input("Ingresa la palabra: ")
Palabra = inversa(frase)
print(Palabra)
print("--" * 30)
palindro = palindromo(frase)