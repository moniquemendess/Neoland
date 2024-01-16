//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? **Iteración #1: Usa includes**

//? Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.
//!----------------------------------------------------------------------------------------------------------------------------------------------------

/*const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

for (let i = 0; i < products.length; i++) {
  if (products[i].includes("Camiseta")) {
    console.log(products[i]);
  }
} */

//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? ***Iteración #2: Condicionales avanzados**

//!---------------------------------------------------------------------------------------------------------------------------------------------------------

//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? ***Iteración #3: Iteración #3: Probando For...of

//!---------------------------------------------------------------------------------------------------------------------------------------------------------

/*const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const places of placesToTravel) {
  console.log(`El viaje es para ${places}`);
} 

//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? ***Iteración #4: Iteración #4: Probando For...in
//!---------------------------------------------------------------------------------------------------------------------------------------------------------

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (const terra in alien) {
  console.log(alien[terra]);
} */

//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? Iteración #5: Probando For
//!---------------------------------------------------------------------------------------------------------------------------------------------------------

/* const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const placesArray = []; // guardar los ID nuevo

for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    //al percorrer por el placesToTravel se fueron iguales
    delete placesToTravel[i]; // ID 11 Y 40, removidos
  } else {
    placesArray.push(placesToTravel[i]); // empura los nuvevos valores para placeArray.
  }
}

console.log(placesArray); */

//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? Iteración #6: Probando For
//!---------------------------------------------------------------------------------------------------------------------------------------------------------

/*const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const toysArray = [];

for (const juguetes of toys) {
  if (!juguetes.name.includes("gato")) {
    toysArray.push(juguetes);
  }
}
console.log(toysArray); */

//!---------------------------------------------------------------------------------------------------------------------------------------------------------
//? Iteración #7: For...of avanzado
//!---------------------------------------------------------------------------------------------------------------------------------------------------------

const toyss = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];

const popularToys = [];

for (const toysArray of toyss) {
  if (toysArray.sellCount > 15) {
    popularToys.push(toysArray);
  }
}

console.log(popularToys);
