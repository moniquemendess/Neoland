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

/* const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car; // crie duas variables do array car 

const [ano01, ano02, ano03] = itv; // crie 3 variables del itv con los valores de 2015, 2011 y 2020

console.log("🚀 ~ ano03:", ano03);
console.log("🚀 ~ ano02:", ano02);
console.log("🚀 ~ ano01:", ano01); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #3: Spread Operator
//? 3.1 Dado el siguiente array, crea una copia usando spread operators.
//!-----------------------------------------------------------------------------------------------------------------------

/* const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList]; // hecho una copia 
console.log("🚀 ~ pointsListCopy:", pointsListCopy); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #3: Spread Operator
//? 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
//!-----------------------------------------------------------------------------------------------------------------------

/* const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toyCopy = { ...toy }; // hecho una referencia al array original 
console.log("🚀 ~ toyCopy:", toyCopy); */ // La copia me sale todo el array toy

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #3: Spread Operator
//? 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.
//!-----------------------------------------------------------------------------------------------------------------------

/*const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

const point2Copy = [...pointsList, ...pointsLis2]; // hecho una copia y dentro del point2Copy tiene 2 array juntos
console.log("🚀 ~ point2Copy:", point2Copy); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #3: Spread Operator
//? 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operator
//!-----------------------------------------------------------------------------------------------------------------------

/* const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const toyUpdateCopy = { ...toy, ...toyUpdate };
console.log("🚀 ~ toyUpdateCopy:", toyUpdateCopy); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #3: Spread Operator
//? 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo,
//? pero sin editar el array inicial. De nuevo, usando spread operatos.
//!-----------------------------------------------------------------------------------------------------------------------

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorCopy = [...colors];
colorCopy.splice(2, 1);
console.log("🚀 ~ colorCopy:", colorCopy);
