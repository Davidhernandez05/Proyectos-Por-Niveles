import Vehiculo

auto1 = Vehiculo.Auto("Porshe", 911, 1996, 2)
print(auto1.mostrar_info())
auto1.encender()
auto1.apagar()
auto1.tocar_bocina()

print("-----------------------MOTO-----------------------")

moto1 = Vehiculo.Motocicleta("Ducati", "Monster", 2022, "Deportiva")
moto1.encender()
moto1.apagar()
moto1.caballito()
print(moto1.mostrar_info())