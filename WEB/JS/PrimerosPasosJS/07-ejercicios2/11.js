const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";
let pokemon = {};

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    //Es el objeto JSON que obtienes de la API.
    // Acceder a propiedades del objeto JSON
    let datosCompletos = data.results; // Acceder a la propiedad "results"

    for (let i = 0; i < datosCompletos.length; i++) {
      //Iteramos todos los valores que se encuentran en results
      const element = datosCompletos[i]; // Guardamos lo valores en una constante
      const nombrePokemon = element.name; // Accedemos a la propiedad nombre.

      console.log(`El pokemon se llama: ${nombrePokemon}`);
    }
  })

  .catch((error) => {
    console.error("Error:", error);
  });
