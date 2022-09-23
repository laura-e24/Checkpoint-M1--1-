
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
  
 
  
  if (array.length <= 1) return array;

  let merged = []

  array = merged;

  let objArr = Object.values(obj)


  let a = merged.slice(0, Math.floor(merged.length / 2))
  let b = merged.slice(Math.floor(merged.length / 2))



  a = insertAndSort(a, obj)
  b = insertAndSort(b, obj)

  while (a.length && b.length) {
    if (a[0] < b[0]) {
      merged.push(a.shift())
    } else {
      merged.push(b.shift())
    }
  }

  array = merged;

  array = array.concat(a, b)

  return array;
}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
