class Vehiculo:
  def __init__(self, marca, modelo, year):
    self.marca = marca
    self.modelo = modelo
    self.year = year

  def MostrarInfo(self):
    return f"Marca: {self.marca}.\nModelo: {self.modelo}\nAño: {self.year}"
  
  def encender(self):
    print("El vehiculo esta encendido.")
  
  def apagar(self):
    print("El vehiculo esta apago.")


class Auto(Vehiculo):
  def __init__(self, marca, modelo, year, numeroPuertas):
    super().__init__(marca, modelo, year)
    self.numeroPuertas = numeroPuertas

  def tocarVocina(self):
    print("Beep, Beep!.")

  def MostrarInfo(self):
    return f"Marca: {self.marca}.\nModelo: {self.modelo}.\nAño: {self.year}.\nNumero de puertas: {self.numeroPuertas}."

class Motocicleta(Vehiculo):
  def __init__(self, marca, modelo, year, tipo):
    super().__init__(marca, modelo, year)
    self.tipo = tipo

  def caballito(self):
    print(f"La motocicleta {self.modelo}, esta haciendo caballito.")

  def MostrarInfo(self):
    return f"Marca: {self.marca}.\nModelo: {self.modelo}.\nTipo de moto: {self.tipo}.\nAño: {self.year}."