// llamar/traer un elemento por el id - traer elementos que son unicos.
let getElement = document.getElementById("app-tittle");
console.log(getElement);

// document.querySelector -> En caso de traer un elemento que este muchas veces nos traera el primero que encuentre.
let selector = document.querySelector("#app-tittle"); //traer elemento por id. -> Es mas rapido
let etiqueta = document.querySelector("p"); //traer elemento por etiqueta. -> Es mas lento

console.log(selector);
console.log(etiqueta);

//Traer todos los elementos con el mismo nombre de clase: traer diferentes elemento que tengan la misma clase.
let clases = document.getElementsByClassName("menu-items"); //Lo trae como una coleccion html -> Es mas rapido
let otro = document.querySelectorAll(".menu-items"); // -> Es mas lento por que son mas nuevos.
console.log(clases);
console.log(otro);

//traer todos los lementos con la misma etiqueta:
let muchosElementosMismaEtiqueta = document.getElementsByTagName("p");

console.log(muchosElementosMismaEtiqueta);
