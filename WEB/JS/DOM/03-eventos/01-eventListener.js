const container = document.querySelector(".container");
const boton = document.querySelector("button");

// mouseover -> Cuando el mouse pasa por encima del obj
container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "black";
  container.style.color = "white";
});

//mouseout -> Cuando el mouse ya no esta sobre el obj
container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "red";
  container.style.color = "black";
});

//boton.addEventListener("click ", () => {
// alert("Button Clicked!");
//});

//Quitar eventos:
const botonClickCallback = () => {
  alert("Haz oprimido el boton");
};
boton.addEventListener("click", botonClickCallback);

setTimeout(() => {
  boton.removeEventListener("click", botonClickCallback);
}, 2000);
