class Persona:
  
  # Getters:
  def getNombre(self): return self.nombre
  def getApellidos(self): return self.apellidos
  def getEdad(self): return self.edad
  def getAltura(self): return self.edad
  
  #Setters:
  def setNombre(self, nombre): 
    self.nombre = nombre 
  def setApellidos(self, apellidos): 
    self.apellidos = apellidos
  def setEdad(self, edad): 
    self.edad = edad
  def setAltura(self, altura): 
    self.altura = altura


  def hablar(self):
    return "Estoy hablando."
  
  def caminar(self):
    return "Estoy camninando."
  
  def dormir(self):
    return "Estoy durmiendo."
  

class Informatico(Persona):
  
  def __init__(self):
    self.lenguajes = "HTML, CSS, Java, Pyhton"
    self.experiencia = 5

  def getLenguajes(self): return self.lenguajes
  
  def aprender(self, lenguajes): 
    self.lenguajes = lenguajes
    return self.lenguajes
  
  def programar(self):
    return "Estoy programando"
  
  def reparar(self):
    return "He reparado tu ordenador."
  

class TecnicoRedes(Informatico):

  def __init__(self):
    super().__init__() # -> Hace que ingresemos el init de la clase padre y se ejecute.
    self.auditarRedes = "Experto"
    self.experienciaRedes = 15

  def auditoria(self):
    return "Estoy auditando una red en este momento."