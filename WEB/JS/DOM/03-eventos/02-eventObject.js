const button = document.querySelector("button");

const buttonClick = (event) => {
  // Nos permite tener acceso a las propiedades del boton.
  console.log(event);
  console.log(event.target);
  console.log(event.target.id);
  button.innerText = "No click";
  button.style.backgroundColor = "black";
  button.style.color = "white";
};

button.addEventListener("click", buttonClick);
