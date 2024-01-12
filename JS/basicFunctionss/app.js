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

const resultado = sum(5, 9);
//console.log(resultado);

//!------------------------------------------------------------------------------------------
//? Iteración #2: Buscar la palabra más larga
//? Completa la función que tomando un array de strings como argumento devuelva el más largo,
//?en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//!------------------------------------------------------------------------------------------
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Capitão A.",
  "Homem-Aranha",
  "Capitão M.",
];

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

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let suma = param.reduce((sum, item) => sum + item, 0);
  return suma;
}
console.log(sumAll(numbers));
