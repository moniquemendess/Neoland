//!-------------------------------------------------------------------------
//? Iteración #1: Buscar el máximo
//? Completa la función que tomando dos números como argumento devuelva el más alto.
//!-------------------------------------------------------------------------

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

//const resultado = sum(5, 9);
//console.log(resultado);

//!------------------------------------------------------------------------------------------
//? Iteración #2: Buscar la palabra más larga
//? Completa la función que tomando un array de strings como argumento devuelva el más largo,
//?en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//!------------------------------------------------------------------------------------------
/*const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Capitão A.",
  "Homem-Aranha",
  "Capitão M.",
]; */

/*function encontrarPalabraMaisLonga(array) {
  let palavraMaisLonga = "";

  for (let i = 0; i < array.length; i++) {
    //console.log("ya estamos aqui otra vez - bucle", index);
    //console.log(array.length);

    if (array[i].length > palavraMaisLonga.length) {
      //console.log("antes =", palavraMaisLonga);
      //palavraMaisLonga = array[index];
      //console.log("despues =", palavraMaisLonga);
    }
    //console.log("");
  }

  return palavraMaisLonga;
}

const palavraMaisLonga = encontrarPalabraMaisLonga(avengers);

//console.log(palavraMaisLonga); */

//!------------------------------------------------------------------------------------------
//? **Iteración #3: Calcular la suma**
//? Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//? Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
//!------------------------------------------------------------------------------------------

//const numbers = [1, 2, 3, 5, 45, 37, 58];

/*function sumAll(param) {
  let suma = param.reduce((sum, item) => sum + item, 0);
  return suma;
}
//console.log(sumAll(numbers)); */

//!------------------------------------------------------------------------------------------
//? **Iteración #4: Calcular el promedio**
//? Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
//!------------------------------------------------------------------------------------------

/*const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let sumaNumber = param.reduce((sum, item) => sum + item, 0);
  let sumaPromedio = sumaNumber / numbers.length;
  return sumaPromedio;
}
console.log(average(numbers)) */

/* const numbers = [12, 21, 38, 5, 45, 37, 6];
let guardarValor = 0;

for (i = 0; i < numbers.length; i++) {
  guardarValor = numbers[i] + guardarValor;
}
const sumaPromedio = guardarValor / numbers.length;
console.log(sumaPromedio); */

//!------------------------------------------------------------------------------------------
//? **Iteración #5: Calcular promedio de strings**
//? Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y
//? de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar
//?tu función:
//!------------------------------------------------------------------------------------------

let mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(mixedElements) {
  let strings = 0;
  let numbers = 0;

  for (let i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] === "string") {
      strings += mixedElements[i].length;
    } else if (typeof mixedElements[i] === "number") {
      numbers += mixedElements[i];
    }
  }
  return strings + numbers;
}
let result = averageWord(mixedElements);
console.log("🚀 ~ result:", result);

//!------------------------------------------------------------------------------------------
//? **Iteración #6: Valores únicos**
//!------------------------------------------------------------------------------------------

/*const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

let guardarDuplicados = [];

duplicates.forEach((item) => {
  if (!guardarDuplicados.includes(item)) {
    guardarDuplicados.push(item);
  }
});
const duplicatess = guardarDuplicados;
console.log("🚀 ~ duplicatess:", duplicatess); */

/*//!------------------------------------------------------------------------------------------
//? **Iteración #7: Buscador de nombres**
//!------------------------------------------------------------------------------------------

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jicessa",
  "Marc",
]; */
