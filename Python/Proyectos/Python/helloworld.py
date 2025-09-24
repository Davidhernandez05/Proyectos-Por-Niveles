# Hola mundo:
print("Hola mundo.")

# Variables:

my_string = "Esto es una cadena de texto."
print(my_string)

# Saber de que tipo es una variable:
print(type(my_string))

my_int = 2
my_int = my_int + 8
print(my_int - 1)

my_float = 2.20
print(my_float + my_int)

my_bool = True
print(type(my_bool))
print(my_bool)

print(f"El valor de mi entero es: {my_int}, y el de mi bool es: {my_bool}") 

# Listas:
my_list = [my_string, my_int, my_float, my_bool]

print(my_list)
print(my_list[0])
print(my_list[3])

#diccionarios: clave - valor.
#En un diccionario la clave debe ser unica.
my_dict = {
  "String" : my_string, 
  "Int" : my_int, 
  "Float": my_float,
  "Bool": my_bool
}

print(my_dict)
print(my_dict["String"]) #Acceder a un valor de un diccionario.


# SET -> Guarda datos no repetidos.
my_set = {my_string, my_int, my_float, my_bool, my_bool, my_bool}

print(type(my_set))
print(my_set)

my_tuple = (my_string, my_int, my_float, my_bool, my_bool, my_bool)

print(type(my_tuple))
print(my_tuple)


# IF:

if my_int >= 18:
  print("Eres mayor de edad puedes acceder.")
elif my_int >= 15 and my_int <= 17:
  print("Puedes ingresar si traes un acompañante.")
else :
  print("Eres muy pequeño no puedes ingresar.")

# FOR:
for my_item in my_dict:
  print(my_item)

for my_item in range(1, 11):
  print(my_item)


# Funciones:

# Función que no recibe parametros ni retorna nada.
def my_function():
  print("Esto es una función nueva.")

# Llamamos nuestra función.
my_function()

for llamado in range(5):
  my_function()

# Función que retorna un valor.
def my_function_with_return():
  return 10
print(my_function_with_return())


# función que recibe parametros y returna un valor.
def sum(num1, num2):
  return num1 + num2

result = sum(1, 2)
print(result)

# Clases:

class MyClass:
  def __init__(self, my_name):
    self.my_name = my_name

  def print_name(self):
    print(self.my_name)

my_class = MyClass("David")
print(type(my_class))
print(my_class.my_name)

my_class.my_name = "Ricardo"
my_class.print_name()