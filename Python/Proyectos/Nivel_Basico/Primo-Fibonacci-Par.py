def validacionprimo(numero):
    contador = 0
    for i in range(1, numero):
        if numero % i == 0:
            contador += 1

    if contador == 1:
        return True
    else:
        return False
        

def validacionpar(numero):
    if numero % 2 == 0:
        return True

    else:
        return False

def validacionfibo(num, numero1 = 1, numero2 = 1):
    ciclo = True

    while ciclo == True:

        resultado = numero1 + numero2
 
        if resultado == num:
            return True
        
        elif resultado >= num:
            return False

        numero1 = numero2
        numero2 = resultado
        

num = int(input("ingresa un numero: "))
primo = validacionprimo(num)
par = validacionpar(num)
fibonacci = validacionfibo(num)

if primo == True and par == True and fibonacci == True:
    print(f"El numero {num} es: primo, par y fibonacci.")

elif primo == True and par == True and fibonacci == False:
    print(f"El numero {num} es: primo, par.")

elif primo == True and par == False and fibonacci == True:
    print(f"El numero {num} es: primo, fibonacci.")

elif primo == True and par == False and fibonacci == False:
    print(f"El numero {num} es: primo.")

elif primo == False and par == True and fibonacci == True:
    print(f"El numero {num} es: Par y fibonacci.")

elif primo == False and par == True and fibonacci == False:
    print(f"El numero {num} es: Par.")

elif primo == False and par == False and fibonacci == True:
    print(f"El numero {num} es: fibonacci.")

else:
    print(f"El numero {num}: no es primo, par y fibonacci.")