
// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]
function insertAndSort(array, obj) {
  // Tu código acá
  
  // primero fusiono el array con los valores del objeto
  const mergeArrObj = array.concat(Object.values(obj))
  // --MUY IMPORTANTE-- sustituir el array original
  // por el que acabamos de crear
  array = mergeArrObj;

  // guardo en una función interna todo el proceso de ordenamiento
  // para no causar errores al llamar a recursión
  const sort = (array) => {
    // si el array tiene 0 elementos, lo retorno, 
    // cortando la recursión (caso base)
    if (array.length <= 1) return array;

    // defino el pivote como el primer elemento del array
    let pivote = array[0]
    // subarrays donde se guardarán las mitades ordenadas
    let a = []
    let b = []
    
    // itero sobre el array hasta que llego al final del mismo
    for (let i = 1; i < array.length; i++) {
      // si la posición i del array es menor al pivote
      // lo pusheo a la izquierda
      if (array[i] < pivote) a.push(array[i])
      // si no, a la derecha
      else b.push(array[i])
    }
  
    // a y b no serán fijos sino que deben almacenar
    // el valor de cada recursión, hasta que el array
    // no se pueda dividir más
    a = sort(a)
    b = sort(b)
  
    // debo concatenar el array ordenado izquierdo
    // con el pivote y con el array ordenado derecho
    return a.concat(pivote).concat(b)
  }

  // guardo el resultado de esta función ordenadora
  const result = sort(array)
  // retorno ese resultado
  return result;
}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
