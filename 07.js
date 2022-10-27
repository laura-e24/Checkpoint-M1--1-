/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 7
// Implementar la función restArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [3, [7, [5,6]], [9,6], 4];
//    restArray(array); --> Debería devolver 40 y al resultado lo restas por la cantidad de arrays, sin contar al padre.
// Ejemplo:
//      40-3 = 37
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var restArray = function(array){
  
  // defino un contador
  let arraysCount = 0;

  // guardo en una variable la sumatoria de los números
  const sum = array.reduce((acc, curr) => {
    // si el elemento actual es un array
    // debo sumar primero los números dentro de él
    if (Array.isArray(curr)) {
      // incremento el contador
      arraysCount++;
      // el valor acumulado hasta el momento es sumado
      // al resultado de la recursión
      return acc + restArray(curr)
    }
    // si no es un array, sólo sumo el acumulador y valor actual
    return acc + curr;
  }, 0)

  // finalmente, al resultado de la suma le resto la cantidad de arrays
  return sum - arraysCount;
}

// No modifiques nada debajo de esta linea //

module.exports = restArray