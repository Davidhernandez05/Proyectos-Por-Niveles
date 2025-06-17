class ErrorDatos extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "Error en los datos.";
  }
}

function validacionDatos(obj) {
  if (!obj.nombre || obj.nombre.trim() === "") {
    throw new ErrorDatos("El nombre es requerido.");
  }
  if (!obj.email || !obj.email.includes("@")) {
    throw new ErrorDatos("El Email ingresado no es valido.");
  }
  if (
    !obj.edad ||
    isNaN(obj.edad) ||
    obj.edad < 18 ||
    typeof obj.edad !== "number"
  ) {
    throw new ErrorDatos("La edad ingresada no es valida.");
  }
  return "Formulario Valido.";
}

try {
  const formulario = {
    nombre: "David",
    email: "David@david.com",
    edad: "22",
  };

  console.log(validacionDatos(formulario));
} catch (error) {
  console.log(error.name);
  console.log("Error: ", error.message);
}
