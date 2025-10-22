# Programación orientada a objetos (POO - OOP)

# Definir una clase:

class Coche:

  # Atributos o propiedades de una clase.
  color = "Negro"
  marca = "Porche"
  modelo = "911"
  velocidad = 50
  asientos = 2

  #Metodos -> Son acciones que hace un objeto.
  def acelerar(self):
    self.velocidad += 10
    print("El auto esta acelerando.")

  def frenar(self):
    self.velocidad -= 10
    print("El auto esta frenando.")

  def getVelocidad(self):
    if self.velocidad <= 0:
      return 0
    
    else:
      return self.velocidad


# Fin de la definicion de la clase.

# Instanciar la clase:
auto = Coche();
print(auto)
print(auto.marca, auto.color)

print("Velocidad actual: ",auto.getVelocidad)

auto.acelerar()
auto.acelerar()
auto.acelerar()
auto.acelerar()
auto.frenar()

print("Velocidad nueva: ", auto.getVelocidad())