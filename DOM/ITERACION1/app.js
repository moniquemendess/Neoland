/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme; */

const selecionarClasse = document.querySelector(".showme");
/*console.log("🚀 ~ selecionarClasse:", selecionarClasse);*/

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

const selecionarId = document.querySelector("#pillado");
/* console.log("🚀 ~ selecionarId:", selecionarId); */

/*1.3 Usa querySelector para mostrar por consola todos los p */

const selecionarTP = document.querySelectorAll("p");
/*console.log("🚀 ~ selecionarTP:", selecionarTP);*/

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

const selecionarPokes = document.querySelectorAll(".pokemon");
/*console.log("🚀 ~ selecionarPokes:", selecionarPokes); */

/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/

const selecionarDataFuctions = document.querySelectorAll(
  '[data-function="testMe"]'
);
console.log("🚀 ~ selecionarDataFuctions:", selecionarDataFuctions);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

console.log(selecionarDataFuctions[2]);
