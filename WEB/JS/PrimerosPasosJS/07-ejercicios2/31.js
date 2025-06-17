/**
 * Crea una función que valide si un objeto tiene las propiedades necesarias.
 * Si falta alguna propiedad, lanza un error personalizado.
 */

class PropiedadFaltanteError extends Error {
  constructor(propiedad) {
    super(`La propiedad: "${propiedad}" es requerida.`);
  }
}

function validarUsuario(usuario) {
  const propiedadesRequeridas = ["Nonbre", "Edad", "Email"];
  for (const element of propiedadesRequeridas) {
    //hasOwnProperty se utiliza para verificar si un objeto tiene una propiedad específica como una propiedad propia
    if (!usuario.hasOwnProperty(element)) {
      throw new PropiedadFaltanteError(element);
    }
  }
  return "Usuario Valido.";
}

try {
  const usuario = {
    Nonbre: "David",
    Edad: 22,
    //Falta el email.
  };

  console.log(validarUsuario(usuario));
} catch (error) {
  console.log("Error: ", error.message);
}
