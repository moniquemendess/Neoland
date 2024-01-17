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

/* const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, year } = game;
console.log("🚀 ~ year:", year);
console.log("🚀 ~ title:", title); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #2: Destructuring
//? 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
//? llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//? imprimelo por consola.
//!-----------------------------------------------------------------------------------------------------------------------

/* const fruits = ["Banana", "Strawberry", "Orange"];

const fruitsCopy = fruits; // Hice referencia a la copia
const [fruit1, fruit2, fruit3] = fruitsCopy; // he modificado la copia
console.log("🚀 ~ fruit3:", fruit3);
console.log("🚀 ~ fruit2:", fruit2);
console.log("🚀 ~ fruit1:", fruit1);

console.log(fruits); // El original no esta modificado */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #2: Destructuring
//? 2.3 En base al siguiente javascript, usa destructuring para crear 2
//? variables igualandolo a la función e imprimiendolo por consola.
//!-----------------------------------------------------------------------------------------------------------------------

/*const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

let { name, race } = animalFunction();
console.log("🚀 ~ race:", race);
console.log("🚀 ~ name:", name); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #2: Destructuring
//? 2.4 En base al siguiente javascript, usa destructuring para crear las
//? variables name y itv con sus respectivos valores. Posteriormente crea
//? 3 variables usando igualmente el destructuring para cada uno de los años
//? y comprueba que todo esta bien imprimiendolo.
//!-----------------------------------------------------------------------------------------------------------------------

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car;

const [ano01, ano02, ano03] = itv;
console.log("🚀 ~ ano03:", ano03);
console.log("🚀 ~ ano02:", ano02);
console.log("🚀 ~ ano01:", ano01);
