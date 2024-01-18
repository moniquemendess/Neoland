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

/* const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorCopy = [...colors];
colorCopy.splice(2, 1); // splice elimina elemento con la posicao dentro del array,
console.log("🚀 ~ colorCopy:", colorCopy); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #4: Map
//? 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando
//!-----------------------------------------------------------------------------------------------------------------------

/* const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const nameusers = users.map((user) => user.name); // declare una variable y usé  un map() para acceder al valor de name.
console.log("🚀 ~ nameusers:", nameusers);  */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #4: Map
//? 4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre
//? a Anacleto en caso de que empiece por 'A'.
//!-----------------------------------------------------------------------------------------------------------------------

/* const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const userName = users.map((users) => { // he criado una nueva variable y usé map para acceder el array users.
  if (users.name.startsWith("A")) { // hecho una condición, se users.name empieza con la letra A.
    return "Anacleto"; // me retorna  Anacleto
  } else {  // se no, retorna el array original
    return users.name;
  }
});

const userNameNovo = userName; // creé una nueva variable para ver el resultado con Anacleto
console.log("🚀 ~ userNameNovo:", userNameNovo); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #4: Map
//? 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
//? de la propiedad .name y añade al valor de .name el string cuando el valor de la propiedad isVisited = true. (Visitado)'
//!-----------------------------------------------------------------------------------------------------------------------

/* const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

    const citiesNew = cities.map((city) => {
  // nueva variable y map para acceder al array (city) es el parametro
  if (city.isVisited === true) {
    // si city es igual a true
    return { ...city, name: city.name + " VISITADO" }; // returnar con +visitado se for true
  } else {
    return city; // si no esta con true, retorna el original.
  }
});

const citiesNewResult = citiesNew;
console.log("🚀 ~ citiesNewResult:", citiesNewResult); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #5: Filter
//? 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los v
//? alores que sean mayor que 18.
//!-----------------------------------------------------------------------------------------------------------------------
/* const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesModified = ages.filter((array) => array > 18); // crei una variabel para que el array tenga los numeros +18
console.log("🚀 ~ agesModified:", agesModified); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #5: Filter
//? 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//? con los valores que sean par.
//!-----------------------------------------------------------------------------------------------------------------------

/* const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesNew = ages.filter((array) => array % 2 === 0);
console.log("🚀 ~ agesNew:", agesNew); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #5: Filter
//? 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//? con los streamers que tengan el gameMorePlayed = 'League of Legends'.
//!-----------------------------------------------------------------------------------------------------------------------

/* const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersNew = streamers.filter(
  (array) => array.gameMorePlayed === "League of Legends"
);

console.log(streamersNew); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #5: Filter
//? 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan
//? el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
//!-----------------------------------------------------------------------------------------------------------------------

/* const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersNew = streamers.filter((element) => element.name.includes("u"));
console.log("🚀 ~ streamersNew:", streamersNew); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #5: Filter
//? 5.5  utiliza .filter() para generar un nuevo array con los streamers que incluyan
//? el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
//? .includes() para la comprobación. Además, pon el valor de la propiedad .gameMorePlayed
//?  a MAYUSCULAS cuando.gameMorePlayed a MAYUSCULAS cuando age sea mayor que 35.
//!-----------------------------------------------------------------------------------------------------------------------

/* const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersNovo = streamers.filter((Element) =>
  Element.gameMorePlayed.includes("Legends")
); // resultado solamente los que tenga League como valores

const streamersMap = streamersNovo.map((streamersNovo) => {
  if (streamersNovo.age > 35) {
    streamersNovo.gameMorePlayed = streamersNovo.gameMorePlayed.toUpperCase();
  }
  return streamersNovo; 
});

console.log(streamersMap); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #5: Filter
//? 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
//? los streamers que incluyan la palabra introducida en el input. De esta forma, si
//? introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//? introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
//!-----------------------------------------------------------------------------------------------------------------------

/* const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamerNew = document.querySelector("#toFilterStreamers");
console.log("🚀 ~ streamerNew:", streamerNew); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #6: Find
//? 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
//!-----------------------------------------------------------------------------------------------------------------------

/* const numbers = [32, 21, 63, 95, 100, 67, 43];

const numberNew = numbers.find((number) => number === 100);
console.log("🚀 ~ numberNew:", numberNew); */

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #6: Find
//? 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
//!-----------------------------------------------------------------------------------------------------------------------

const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const moviesNew = movies.find((movie) => movie.date === 2010); // returna el seg array del año de 2010
console.log("🚀 ~ moviesNew:", moviesNew);

//!---------------------------------------------------------------------------------------------------------------------
//? Iteración #6: Find
//?  Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
//? 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
//? spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
//? lo queremos meter en la propiedad .mutation del objeto fusionado.
//!-----------------------------------------------------------------------------------------------------------------------

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const alienNew = aliens.find((alien) => alien.name === "Cucushumushu");

const mutationNew = mutations.find(
  (mutation) => mutation.name === "Porompompero"
);

const objectJuntos = { ...alienNew, ...mutationNew };
console.log("🚀 ~ objectJuntos:", objectJuntos);
