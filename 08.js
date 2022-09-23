/*
  Importante:
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas.
  No comentar la funcion
*/
// ---- Recursión ----
// EJERCICIO 8
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
        // number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
        // la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16



function countDeep(arr) {
  // Tu código aca:

  let num = 0;
  let str = 0;
  let bool = 0;
  let und = 0;
  let arrays = 1;

  let resultados = []
  arr.forEach(curr => {
    if (typeof curr === 'number') {
      num++;
      resultados.push(num)
    }
    if (typeof curr === 'string') {
      str++
      resultados.push(str)
    }
    if (typeof curr === 'boolean') {
      bool++
      resultados.push(bool)
    }
    if (typeof curr === 'undefined') {
      und++
      resultados.push(und)
    }
    if (typeof curr === 'object') {
      arrays++
      countDeep(curr)
      resultados.push(arrays)
    }
  });

console.log(arrays - num)

  let result1 = arrays - num;
  let result2 = result1 * str;
  let result3 = bool ? result2 / bool :result2;
  let result4 = result3**und;

  // console.log('num: ', num)
  // console.log('str: ', str)
  // console.log('bool: ', bool)
  // console.log('und: ', und)
  // console.log('arrays: ', arrays)

  // console.log('result3: ', result3)

  return result4;
}
// No modifiques nada debajo de esta linea //

module.exports = countDeep