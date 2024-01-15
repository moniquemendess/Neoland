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
console.log(resultado);

//!------------------------------------------------------------------------------------------
//? Iteración #2: Buscar la palabra más larga
//? Completa la función que tomando un array de strings como argumento devuelva el más largo,
//?en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//!------------------------------------------------------------------------------------------