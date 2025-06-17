const menu = document.querySelector("menu");
const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", () => {
  menu.classList.toggle("invisible"); //classList -> Permite agregar mas de una clase a un elemnto.
  // toggle -> hace como un switch si una clase existe la quita y si no existe la agrega.
}); //addEventListener nos permite agregar un evento.

//classList.add -> Agrega una clase
//classList.remove -> eliminar una clase
//classList.toggle -> hace como un switch si una clase existe la quita y si no existe la agrega.
//classList.contains -> genera un true o false si el elemento contiene una clase o no.
