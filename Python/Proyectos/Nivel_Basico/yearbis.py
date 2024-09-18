def bis(year):
    
    if year % 4 == 0:
        
        if year % 100 == 0:
            
            if year % 400 == 0:
                return "Es un año Bisiesto."
            
            elif year % 400 != 0:
                return "No es un año Bisiesto."
        else:
            return "Es un año bisiesto."

    
    else:
        return "No es un año Bisiesto"
        

year = int(input("Ingresa el año que quieres evaluar: "))
if len(str(year)) == 4:
    bisiento = bis(year)
    print(bisiento)
else:
    print("El año ingresado no es valido.")

