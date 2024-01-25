/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
const body = document.querySelector("body");
const sendDiv = "<div>teste</div>";
body.innerHTML += sendDiv;

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

const newDiv = `
<div>
<p>Olá, teste</p>
</div>
`;
body.innerHTML += newDiv;

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/

const div = document.createElement("div"); // creando el div

for (let i = 0; i < 6; i++) {
  // bucle para adicionar 6 p

  const newP = document.createElement("p"); // creando el elemento p
  newP.textContent = "Monique";
  div.appendChild(newP);
}

document.body.appendChild(div);

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

const novaP = `<p>Soy dinámico!</p>`;
document.body.innerHTML += novaP; // enviado con inner porque es un template

/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

const h2 = document.querySelector("h2.fn-insert-here"); // acendí a classe
h2.textContent = "Wubba Lubba dub dub"; // envié al html

// o podria hacer así

// document.querySelector("h2.fn-insert-here").innerHTML += "Wubba Lubba dub dub";

/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ulLista = document.createElement("ul"); // creamos la ul (Padre)
apps.forEach((app) => {
  const elementLi = document.createElement("li"); // creando una li
  elementLi.textContent = app; // añadimos el array
  ulLista.appendChild(elementLi); // añadimos el elementLi(hijo) al ulLista(Padre)
});

document.body.appendChild(ulLista); // enviamos el UlLista al html

/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/

const removeClase = document.querySelectorAll(".fn-remove-me");
removeClase.forEach((element) => {
  // creeé un forEach para remover uno a uno dos elem
  element.remove(); // el metodo remove cada element de la clase.
});

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */

const pVoyMedio = document.createElement("p"); // creando el element p
pVoyMedio.textContent = "Voy en medio!"; // Editando el text de p

const todosDivs = document.querySelectorAll("div.fn-insert-here"); // acendendo al los divs
console.log("🚀 ~ todosDivs:", todosDivs);

const secoondDiv = todosDivs[1]; // definimos la posicao

document.body.insertBefore(pVoyMedio, secoondDiv); // recebe variable, el text y la posicao (inserimos el div en medio)

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/

const insertHere = document.querySelectorAll(".fn-insert-here");
const novotemplate = `<p>Voy dentro!<p>`; // creé el template con el p

insertHere.forEach((element) => {
  // bucle para enserir
  element.innerHTML += novotemplate;
});
