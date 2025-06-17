/**
 * Async y await -> Regresa una promesa.
 */

// Nos regresa una API con todos sus valores internos.
function fetchData() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((responde) => responde.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// Nos regresa una API con todos sus valores internos en formato de promesa.
async function data() {
  try {
    // await Espera que el codigo resuelva la promesa
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let datos = await response.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
}
data();
