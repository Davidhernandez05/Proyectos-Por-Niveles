// Esta es una forma de hacerlo pero no es la mejor forma:

// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

// Esta es la mejor forma de hacer lo mismo:

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  // closest -> Elemento mas cercano.
  event.target.closest("li").classList.toggle("highlight");
});
