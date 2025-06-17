// Creamos el evento de click en el botón "Agregar"
document.getElementById("Agregar").addEventListener("click", function () {
  // Obtenemos el valor del input
  let nuevoItem = document.getElementById("nuevoelemento").value;

  // Validamos que el nuevo item no venga vacio.
  if (nuevoItem.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = nuevoItem;
    document.getElementById("lista").appendChild(li);
    document.getElementById("nuevo-item").value = "";
  }
});
