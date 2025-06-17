// clonar un elemento:

const clonar = document.querySelector("p");
const clon = clonar.cloneNode(true);
console.log(clon);

//remplazar un elemento: mueve el nodo completo.
const remplazar = document.querySelector("li");
clonar.replaceWith(remplazar); //Reemplaza el valor de clonar por el de remplazar.

// Inyectar clon:
remplazar.append(clon);
clon.textContent = "Este es un nuevo texto";
