listanumeros = [4, 9, 7]
def generar_n_caracteres(numero, caracter):
    numeroGenerar = int(numero)
    caracterGenerar = str(caracter)

    if len(caracterGenerar) == 1:
        return caracterGenerar * numeroGenerar
    else:
        return "Tienes que ingresar solo 1 caracter. "

numero = int(input("Ingresa el número de veces que quieres que se repita el caracter: "))
caracter = input("Ingresa el caracter que quieres que se repita: ")

print("--" * 30)
print(f"Numero Ingresado: {numero}")
print(f"caracter Ingresado: {caracter}")
print("--" * 30)

resultado = generar_n_caracteres(numero, caracter)
print(resultado)
print("--" * 30, "\n")

for i in listanumeros: #Ejercicio de histograma.
    resultado = "*" * i
    print(resultado)

