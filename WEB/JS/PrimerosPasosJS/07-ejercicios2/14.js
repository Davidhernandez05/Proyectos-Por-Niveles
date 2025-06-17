/*
Requerimientos del reto:
1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de
datos
3. Si el usuario y contraseña son correctos, el sistema
debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline
*/

const userDataBase = [
  {
    user: "david",
    password: "lakers",
  },
  {
    user: "erika",
    password: "Feliz123",
  },
  {
    user: "johan",
    password: "123",
  },
];

const userTimeLine = [
  {
    name: "david",
    timeLine: "Me gusta JavaScript.",
  },
  {
    name: "erika",
    timeLine: "Me gusta viajar.",
  },
  {
    name: "johan",
    timeLine: "Me gustan lo juegos de mesa.",
  },
];

function usuarioExistente(user, password) {
  // Recorremos el array y el objeto.
  for (const elemneto of userDataBase) {
    // validamos que tanto el user como el password sean correctos.
    if (user === elemneto.user && password === elemneto.password) {
      return true;
    }
  }
  return false;
}
function ingreso(user, password) {
  if (usuarioExistente(user, password)) {
    alert(`Bienvenido: ${user.toUpperCase()}`);

    for (let i = 0; i < userTimeLine.length; i++) {
      if (userTimeLine[i].name === user) {
        alert(userTimeLine[i].timeLine);
        break;
      }
    }
  } else {
    alert("El usuario o la contraseña no son correctos.");
  }
}

const user = prompt("Ingresa tu usuario: ");
const password = prompt("Ingresa tu contraseña: ");

ingreso(user, password);
