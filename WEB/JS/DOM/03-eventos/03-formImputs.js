const formulario = document.getElementById("myForm");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = formulario.elements["name"].value; // Traer el valor de un elemento name.
  console.log(name);
});
