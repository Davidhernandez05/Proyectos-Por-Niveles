// Saber si un nombre se repite en un array.

let nombres = ["Ana", "Juan", "Carlos", "Ana", "Luisa"];
let frecuencias = {};

for (let nombre of nombres) {
  /**
   * 3. (frecuencias[nombre] || 0)
  Esta parte es un truco común en JavaScript para manejar casos en los que una propiedad no existe en un objeto.
  frecuencias[nombre] intenta obtener el valor de la propiedad nombre en el objeto frecuencias.
  Si la propiedad no existe, frecuencias[nombre] devuelve undefined.
  El operador || (OR lógico) se usa para proporcionar un valor predeterminado en caso de que frecuencias[nombre] sea undefined.
  En este caso, si frecuencias[nombre] es undefined, se usa 0 como valor predeterminado.
  Por ejemplo:
  Si frecuencias["Ana"] no existe, frecuencias["Ana"] || 0 devuelve 0.
  Si frecuencias["Ana"] existe y tiene un valor (por ejemplo, 1), frecuencias["Ana"] || 0 devuelve 1.
   */

  frecuencias[nombre] = (frecuencias[nombre] || 0) + 1;
}

for (let nombre in frecuencias) {
  if (frecuencias[nombre] > 1) {
    console.log(`El nombre ${nombre} se repite ${frecuencias[nombre]} veces.`);
  }
}
