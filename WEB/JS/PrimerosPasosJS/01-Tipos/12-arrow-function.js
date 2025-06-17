
// Funcion tradicional - expresion de funcion:
const saludar = function (name){
  return `Hi, ${name}`
}

// Arrow Function: - Explicit Return 
const newSaludar = (name) => {
  return `Hi, ${name}.`  
}

// Arrow function: - implicit return
const newSaludarImplicit = name => `Hi, ${name}`;

//Cuando son mas de un parametro si se tienen que poner los () si solo es un parametro no es necesario:
const newSaludarImplicitomultiplesparametros = (name, lastname) => `Hi, i am ${name} ${lastname}.`;

//Enlace Lexico - Lexical Binding.
const caracter = {
  name: 'David',
  mensaje: function(mensaj) {
    console.log(`${this.name} dice: ${mensaj}.`)
    // Si existe el this, por lo cual si cuenta con la vinculacion con nuestro objeto.
  }, 
  mensajearrowfunction: mensaj => console.log(`${this.name}, dice: ${mensaj}.`) // En este caso no reconoce en si el this.
  // Es como si no tomara la vinculacion con nuestro objeto.
}

caracter.mensaje('Soy trabajador.')
caracter.mensajearrowfunction('Hola mundo.')