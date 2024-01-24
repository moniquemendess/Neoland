/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

const body = document.querySelector("body"); // Acedendo el body
const btn = '<button id="btnToClick">CLIQUE</button>'; // creando el button + id
body.innerHTML += btn; // envié el button al html,

const btDom = document.querySelector("#btnToClick"); // accendendo el #ID
btDom.addEventListener("click", (e) => console.log(e)); //

/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/

const input = document.querySelector(".focus");
input.addEventListener("focus", (e) => console.log(e.target.value));

/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const input2 = document.querySelector(".click");
input2.addEventListener("input", (e) => console.log(e.target.value));
