const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/* 
  EJERCICIO 3
  Implementar el método count dentro del prototype de LinkedList que deberá retornar la suma de todos los
  valores dentro de la lista.
  En caso de que la lista esté vacía, retornar 0
  Ejemplo:
  Dada esta lista: [4] --> [2] --> [7] -- > null
  LinkedList.count() --> 13
*/

LinkedList.prototype.count = function() {

  // guardo la cabecera de la lista
  let current = this.head;

  // si la lista está vacía retornar 0
  if (!current) return 0;
  // defino un contador para almacenar los resultados
  let counter = 0;

  // mientras haya elementos en la lista...
  while (current) {
    // el contador será igual a su valor acumulado más el nodo actual
    counter = counter + current.value;
    // sigo recorriendo la lista
    current = current.next;
  }

  // retorno el contador
  return counter;
}

// No modifiques nada debajo de esta linea //

module.exports = LinkedList;