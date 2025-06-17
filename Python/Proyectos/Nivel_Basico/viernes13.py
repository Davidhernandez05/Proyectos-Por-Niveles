import calendar as calendario

def validacion(año, mes):

    cal = calendario.monthcalendar(year=año, month=mes)

    for i in cal:
        valor = i
        
        for e in valor:

            if valor[4] == e:
                if valor[4] != 0:
                    if valor[4] == 13:
                        print("Si tiene un Viernes: ", e)

"""
Si se habilita este pedazo del codigo nos muestra todos los dias de la semana y a que dia corresponde cada uno de estos.
            if valor[0] == e:
                if valor[0] != 0:
                    print("Lunes: ", e)    
            
            elif valor[1] == e:
                if valor[1] != 0:
                    print("Martes: ", e)
            
            elif valor[2] == e:
                if valor[2] != 0:
                    print("miercoles: ", e)
            
            elif valor[3] == e:
                if valor[3] != 0:
                    print("Jueves: ", e)
            elif valor[5] == e:
                if valor[5] != 0:
                    print("Sabado: ", e)
            
            elif valor[6] == e:
                if valor[6] != 0:
                    print("Domingo: ", e)
"""

año = input("Ingresa un año: ")
mes = input("Ingresa el numero del mes: ")

valaño = len(año)
valmes = len(mes)

if int(valaño) == 4 and (int(valmes) == 2 or int(valmes) == 1):
    validacion(int(año), int(mes))

elif int(valaño) == 4 and (int(valmes) != 2 or int(valmes) != 1):
    print("El Mes no es correcto. ", mes)

elif int(valaño) != 4 and (int(valmes) == 2 or int(valmes) == 1):
    print("El año no es correcto. ", año)

else:
    print("Ni el año ni el mes son correctos.")