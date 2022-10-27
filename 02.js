const { LinkedList } = require('./DS');
// No modifiques nada arriba de esta linea //
  
/*
EJERCICIO 2
Agregar el método simplifyList al prototipo de LinkedList. Este método deberá filtrar 
los elementos repetidos de nuestra lista enlazada y crear una nueva lista con los elementos 
extraídos para finalmente reemplazar la lista original.
Si la lista está vacía, debe retornar false
Ejemplo:
    Suponiendo que la lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
    lista.simplifyList();
    Ahora la lista resultante es: Head --> [2] --> [5] --> [1] --> [7] --> null
ACLARACIÓN: Se debe reemplazar la lista original por la nueva.
Pista: Podes usar el metodo search() ya incorporado dentro del prototype de LinkedList
  */
 
LinkedList.prototype.simplifyList = function () { 
  
  // guardo la cabecera de la lista
  let current = this.head;
  // creo una nueva lista donde irán los valores
  // NO repetidos
  let newList  = new LinkedList()
  
  // si current es null, retornar false
  if (!current) return false;

  // mientras current sea distinto de null...
  while (current) {
    // si en la lista no existe el valor buscado,
    // lo pusheo en esa lista
    if (!newList.search(current.value)) newList.add(current.value)

    // sigo recorriendo la lista
    current = current.next;
  }

  // finalmente, la lista original es reemplazada por la nueva
  this.head = newList.head
}
// No modifiques nada debajo de esta linea //
module.exports = {
  LinkedList
};