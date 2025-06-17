const user = { id: 1 };

/**
 * Los valores en las constantes no se pueden cambiar.
 * Pero en los array si se pueden agregar modificar y eliminar elementos.
 */
user.Nombre = "Nicolas";

/** Se puede agregar una funcion asi.
  user.guardar = () => {
  console.log("Guardar", user.name);
};
 */

// Tambien se puede agregar una funcion a un objeto asi:

user.guardar = function () {
  console.log("Guardar", user.name);
};

user.guardar();

Object.freeze({}); // No permite agregar o modificar nada en el objeto.
Object.seal({}); // Permite modificar propiedades pero no agregar o eliminar elementos.
