const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {

  // ya que necesito los valores MAYORES, sólo debo
  // buscar en right, porque en left están los menores
  let root = this.value;
  let right = this.right;

  // variables que almacenarán los máximos
  let max1;
  let max2;

  // me posiciono en el ante último nodo,
  // es decir, aquel cuyo right no tiene right
  if (right && !right.right) {
    // el segundo valor máximo será el nodo actual, el ante último del árbol
    max2 = root;
    // y el primer valor máximo será el último nodo del árbol
    max1 = right.value;

    // los retorno en un array para cortar la recursión
    // una vez alcanzado el ante último nodo
    return [max1, max2]
  }

  // retorno la recursión sobre la rama right para continuar
  // buscando valores hasta que se entre al bloque if
  return right.searchMaxTwo()
};

// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
