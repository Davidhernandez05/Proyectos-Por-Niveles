import random as r
letas = ["q", "w", "e", "r","t","y","u","i","o","p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ", "z", "x", "c", "v", "b", "n", "m" ":", ",", ".", "-", "_", "!", "?", "$", "%", "&", "/", "+", "¿", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
opc = ["M", "m"]

def mayus(password):
    Contra = ""
    for caracter in password:
        
        opcion = r.choice(opc)

        if opcion == "M":
            caracter = caracter.upper()
            Contra += caracter

        else:
            caracter = caracter.lower()
            Contra += caracter
    
    return Contra
    


def password(longitud):
    password = ""

    for i in range(1, longitud + 1):
        caracter = r.choice(letas)
        password += caracter
        
    nuevopasswords = mayus(password)
    return nuevopasswords


long = int(input("Ingrese el numero que caracteres que quiere en la contraseña: "))

resultado = password(long)
print(resultado)