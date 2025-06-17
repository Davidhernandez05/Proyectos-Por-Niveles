
function crearUsuario(Name, email) {
  return {
    id: 1,
    email,
    Name,
    direccion: {
      calle: 'Queen St',
      Numero: 10,
    },
    activo: true,
    recuperarContraseña: function(){
      console.log('Restaurando Clave...')
    },
  };
}

let user1 = crearUsuario('David', 'David@Holamundo.com');
let user2 = crearUsuario('Nicolas', 'Nicolas@Holamundo.com');

console.log(user1, user2);