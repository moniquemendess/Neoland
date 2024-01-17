//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #1: Arrows
//? 1.1 Ejecuta esta función sin pasar ningún parametro
//? 1.2 Ejecuta esta función pasando un solo parametro
//? 1.3 Ejecuta esta función pasando dos parametros
//? a = 10 y de b = 5
//!---------------------------------------------------------------------------------------------------------------------

/* let a = 10;
let b = 5;

const suma = () => a + b;

const sumaArrow = suma();
console.log("🚀 ~ sumaArrow:", sumaArrow); */

//!---------------------------------------------------------------------------------------------------------------------
//? 1.2 Ejecuta esta función pasando un solo parametro
//!---------------------------------------------------------------------------------------------------------------------

/* const suma = (a) => a + 5;
const sumaArrow = suma(10);
console.log("🚀 ~ sumaArrow:", sumaArrow);*/

//!---------------------------------------------------------------------------------------------------------------------
//? 1.3 Ejecuta esta función pasando dos parametros
//!---------------------------------------------------------------------------------------------------------------------

/*const suma = (a, b) => a + b;

const result = suma(10, 5);
console.log("🚀 ~ result:", result); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #2: Destructuring
//? 2.1 En base al siguiente javascript, crea variables en base a las propiedades
//? del objeto usando object destructuring e imprimelas por consola. Cuidado,
//? no hace falta hacer destructuring del array, solo del objeto.
//!-----------------------------------------------------------------------------------------------------------------------

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, year } = game;
console.log("🚀 ~ year:", year);
console.log("🚀 ~ title:", title);

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #2: Destructuring
//? 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
//? llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//? imprimelo por consola.
//!-----------------------------------------------------------------------------------------------------------------------

const fruits = ["Banana", "Strawberry", "Orange"];

const fruitsCopy = fruits; // Hice referencia a la copia
const [fruit1, fruit2, fruit3] = fruitsCopy; // he modificado la copia
console.log("🚀 ~ fruit3:", fruit3);
console.log("🚀 ~ fruit2:", fruit2);
console.log("🚀 ~ fruit1:", fruit1);

console.log(fruits); // El original no esta modificado
