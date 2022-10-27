const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();                     
                                                
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {

  // guardo la cabecera de la lista
  let current = this.head;
  // defino un array donde se guardarán
  // los valores de la lista
  const array = []

  // si la lista está vacía retorno false
  if (!current) return false;
   
  // mientras haya elementos en la lista...
  while (current) {
    // pusheo al array el valor actual
    array.push(current.value)
    // sigo recorriendo la lista
    current = current.next;
  }

  // ordeno el array con todos los valores de la lista
  array.sort((a, b) => b - a)
  // redefino la lista original eliminando la referencia
  // a la cabecera, por lo cual también se eliminan
  // las referencias a los demás elementos.
  // (esto es para luego poder reinsertar los valores en orden)
  this.head = null;

  // por cada elemento del array...
  array.forEach(element => {
    // agrego el valor actual a la lista, ya en orden
    this.add(element)
  });
};
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};