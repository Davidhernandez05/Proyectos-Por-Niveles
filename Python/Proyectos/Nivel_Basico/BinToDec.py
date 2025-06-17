def ValidacionNumerosBin(NumeroBinario, CantidadNumeroBin):
    ListaValidacion = [int (x) for x in str(NumeroBinario)]
    
    for x in ListaValidacion:
        if x == 0 or x == 1: #Veridicamos que el numero sea 1 o 0 esto por que en el sistema Binario son los dos unicos numeros validos.
            
            Resultado = BinToDec(NumeroBinario, CantidadNumeroBin)           
            return f"El valor del número binario: {NumeroBinario}, en Decimal es: {Resultado}"    
        
        else:
            return "El Numero ingresado no es Binario.."


def BinToDec(NumeroBin, CantidadNumero):
    
    NuevaLista = []
    ListaNumeros = [int (x) for x in str(NumeroBin)] #Creamos nuestra lista de numero que sea cada numero un valor

    for element in ListaNumeros:
        
        Numero = int(element)
        CantidadNumero -= 1
        Operacion = Numero * (2 ** CantidadNumero)
        
        NuevaLista.append(Operacion) #Agregamos el numero a la lista.

    return sum(NuevaLista) #Sumamos todos los valores que tenemos en nuestra lista.


def DecToBin(Numero):
    ListaBinarios = []

    if Numero >= 2:
        while Numero >= 1:        
            Operacion = int(Numero) % 2
            Numero = int(Numero) / 2
            ListaBinarios.append(Operacion)
    

    elif Numero == 1:
        ListaBinarios.append(1)

    elif Numero == 0:
        ListaBinarios.append(0)

    ListaBinarios.reverse() #Aqui le decimos que la lista debe ser de atras hacia adelante.
    Binario = "".join(map(str, ListaBinarios)) #Aqui estamos quitando la lista de numero y uniendo los numeros para que se vuelvan uno solo.
    return Binario

bucle = True
while bucle == True:
    print("--" * 14)
    print("| Menu:                    |")
    print("| 1. De binario a decimal. |")
    print("| 2. De decimal a binario. |")
    print("| 3. Salir                 |")
    print("--" * 14)

    seleccion = int(input("Ingresa la opción que requieres: "))

    if seleccion == 1:
        print("\n")
        print("--" * 34)
        print("|Seleccionaste la opción de pasar un número de BINARIO a DECIMAL...|")
        print("--" * 34)

        Numero = input("Ingresa el numero Binario que quieres transformar: ")
        
        Cantidad = int(len(Numero))
        Numero_Decimal = ValidacionNumerosBin(int(Numero), int(Cantidad))
        
        print("\n")
        print("--" * 30)
        print("| ", Numero_Decimal)
        print("--" * 30)
        print("\n")

    elif seleccion == 2:
        print("\n")
        print("--" * 33)
        print("Seleccionaste la opción de pasar un número de DECIMAL a BINARIO...")
        print("--" * 33)

        NumeroDec = int(input("Ingrese el numero Decimal que quiere transformar: "))
        NumeroBinario = DecToBin(NumeroDec)

        print("\n")
        print("--" * 30)
        print(f"| El número decimal {NumeroDec}, en vinario es {NumeroBinario}.")
        print("--" * 30)
        print("\n")

    elif seleccion == 3:
        break

    else:
        print("\n")
        print("--" * 30)
        print("Opción no valida ingrsa una opción valida.")
        print("--" * 30)
        print("\n")

print("--" * 12)
print("|  Fin del programa... |")
print("--" * 12)