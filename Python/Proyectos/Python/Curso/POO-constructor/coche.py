class Coche:


  def __init__(self, marca, modelo, color, puestos):
    self.marca = marca
    self.modelo = modelo
    self.color = color
    self.puestos = puestos

  
  def coche(self):
    return f"Marca: {self.marca}\nModelo: {self.modelo}\nColor: {self.color}\nCapacidad: {self.puestos}"
