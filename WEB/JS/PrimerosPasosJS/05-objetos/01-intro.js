//POO -> Programacion Orientada a Objetos

let user = {
  email: 'nicolas@holamundo.com',
  name: 'Nicolas',
  direccion: {
    calle: 'Queen st',
    numero: 10,
  },
  activo: true,

  //Creamos una funcion dentro de un obj:
  recuperarclave: function () {
    console.log('Recuperando clave...');
  }
}