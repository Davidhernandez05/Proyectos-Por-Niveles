class Vehiculo:
  def __init__(self, marca, modelo, year):
    self.marca = marca
    self.modelo = modelo
    self.year = year

  def mostrar_info(self):
    return f"Marca: {self.marca}.\nModelo: {self.modelo}\nAño: {self.year}"
  
  def encender(self):
    print("El vehiculo está encendido.")
  
  def apagar(self):
    print("El vehiculo está apago.")


class Auto(Vehiculo):
  def __init__(self, marca, modelo, year, numeroPuertas):
    super().__init__(marca, modelo, year)
    self.numeroPuertas = numeroPuertas

  def tocar_bocina(self):
    print("Beep, Beep!.")

  def mostrar_info(self):
    return f"Marca: {self.marca}.\nModelo: {self.modelo}.\nAño: {self.year}.\nNumero de puertas: {self.numeroPuertas}."

class Motocicleta(Vehiculo):
  def __init__(self, marca, modelo, year, tipo):
    super().__init__(marca, modelo, year)
    self.tipo = tipo

  def caballito(self):
    print(f"La motocicleta {self.modelo}, esta haciendo caballito.")

  def mostrar_info(self):
    base = super().mostrar_info()
    return f"{base}\nTipo de moto: {self.tipo}."