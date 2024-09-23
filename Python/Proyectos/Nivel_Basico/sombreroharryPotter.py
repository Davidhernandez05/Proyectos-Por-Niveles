opciones = ["A", "B", "C", "D"]
respuestas = []

def pregunta1():
    print("--" * 27)
    print("|                   Pregunta 1:                      |")
    print("--" * 27)
    print("| ¿Cuál de estas cualidades valoras más en un amigo?:|")
    print("| A. Valor y lealtad.                                |")
    print("| B. Ambición y astucia.                             |")
    print("| C. Sabiduría y creatividad.                        |")
    print("| D. Dedicación y lealtad.                           |")
    print("--" * 27)

    Sombrero()

def Pregunta2():
    print("--" * 27)
    print("|                   Pregunta 2:                      |")
    print("--" * 27)
    print("| ¿Qué te motiva a enfrentar un desafío?:            |")
    print("| A. Proteger a quienes amas.                        |")
    print("| B. Superarte a ti mismo.                           |")
    print("| C. Aprender algo nuevo.                            |")
    print("| D. Ayudar a otros en el camino.                    |")
    print("--" * 27)

    Sombrero()

def Pregunta3():
    print("--" * 27)
    print("|                   Pregunta 3:                      |")
    print("--" * 27)
    print("| Si tuvieras que elegir un lema, ¿cuál sería?       |")
    print("| A. La valentía es mi guía.                         |")
    print("| B. El poder es la clave.                           |")
    print("| C. El conocimiento es la verdadera fuerza.         |")
    print("| D. La amistad es la base del éxito.                |")
    print("--" * 27)

    Sombrero()

def Pregunta4():
    print("--" * 29)
    print("|                      Pregunta 4:                       |")
    print("--" * 29)
    print("| ¿Cuál es tu forma preferida de resolver un conflicto?  |")
    print("| A. Enfrentándolo con valentía.                         |")
    print("| B. Planeando una estrategia.                           |")
    print("| C. Buscando una solución lógica.                       |")
    print("| D. Mediante la comunicación y la empatía.              |")
    print("--" * 29)

    Sombrero()

def Pregunta5():
    print("--" * 27)
    print("|                   Pregunta 5:                      |")
    print("--" * 27)
    print("| ¿Qué tipo de actividad te entusiasma más?          |")
    print("| A. Participar en una aventura emocionante.         |")
    print("| B. Competir para ser el mejor.                     |")
    print("| C. Investigar un tema que te apasione.             |")
    print("| D. Colaborar en un proyecto comunitario.           |")
    print("--" * 27)

    Sombrero()


def Sombrero():

    opc = input("Escribre tu respuestas (A, B, C, D): ")
    opc = opc.upper()
    if opc in opciones:
        respuestas.append(opc)
    else:
        print("Error respuesta no valida.")

def conteo():
    A = 0
    B = 0
    C = 0
    D = 0
    
    for i in respuestas:
        
        if i == "A":
            A += 1
        
        elif i == "B":
            B += 1
        
        elif i == "C":
            C += 1
        
        else: 
            D += 1
    
    if A > B and A > C and A > D:
        return "Gryffindor"

    elif B > A and B > C and B > D:
        return "Slytherin"

    elif C > B and C > A and C > D:
        return "Ravenclaw"
    
    elif D > B and D > C and D > A: 
        return "Hufflepuff" 
    
    else:
        return "Error"


pregunta1()
Pregunta2()
Pregunta3()
Pregunta4()
Pregunta5()

Casa = conteo()

print("--" * 19)
print("|            ",Casa.upper(),"            |")
print("--" * 19)
print(f"| Perteneces a la casa de: {Casa}.")
print("--" * 19)