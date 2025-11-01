import Vehiculo

auto1 = Vehiculo.Auto("Porshe", 911, 1996, 2)
print(auto1.MostrarInfo())
auto1.encender()
auto1.apagar()
auto1.tocarVocina()

print("-----------------------MOTO-----------------------")

moto1 = Vehiculo.Motocicleta("Ducati", "Monster", 2022, "Deportiva")
moto1.encender()
moto1.apagar()
moto1.caballito()
print(moto1.MostrarInfo())