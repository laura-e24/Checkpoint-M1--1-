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

  // defino los contadores de cada tipo de dato
  let num = 0;
  let str = 0;
  let bool = 0;
  let und = 0;
  // arrays empieza en 1 para tomar en cuenta 
  // también el array padre
  let arrays = 1;

  // la funci´ón encargada de incrementar los contadores
  // la encierro en otra función para que no se pierdan
  // o sobreescriban los resultados obtenidos tras cada recursión
  const counting = (array) => {
    // por cada elemento del array ejecuto una función...
    array.forEach(curr => {
      // dependiendo del tipo de dato del elemento actual,
      // incremento su contador correspondiente
      switch (typeof curr) {
        case 'object':
          arrays = arrays + 1;
          // si sólo si el elemento es un array (objeto)
          // debo llamar a esta funcion recursiva para
          // contar los datos que tenga dentro
          counting(curr)
        break;

        case 'number':
          num = num + 1;
        break;

        case 'string':
          str = str + 1
        break;

        case 'boolean':
          bool = bool + 1
        break;

        case 'undefined':
          und = und + 1
        break;
      }
    });
  }

  // llamo a la función recursiva pasándole el array de parámetro 
  // para que se incrementen los contadores
  counting(arr)

  // retorno el resultado de las operaciones que dicta el enunciado
  return (((arrays - num) * str) / bool)**und;
}
// No modifiques nada debajo de esta linea //

module.exports = countDeep