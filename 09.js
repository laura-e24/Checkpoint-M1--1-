const { BinarySearchTree } = require("./DS");
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// EJERCICIO 09
// Implementar el método insertWord en el prototype de BinarySearchTree
// El método será similar al método insert ya implementado, pero en lugar
// de agregar valores numéricos al árbol, se encargará de insertar palabras
// que tomarán posición basándose en la cantidad de caracteres que posean.
//
// EJEMPLO:
//
// Iniciando con el árbol llamado arbolDePalabras:
//
//                          "Palabra"
//                            /    \
//
// Ejecutamos el método arbolDePalabras.insertWord("Perro")
//
//                          "Palabra"
//                            /    \
//                       "Perro"
//
// La palabra "Perro" se insertó en el nodo de la izquierda por tener una cantidad
// de caracteres menor a "Palabra".
//
// Ejecutamos el método arbolDePalabras.insertWord("Murciélago")
//
//                          "Palabra"
//                            /    \
//                       "Perro"  "Murciélago"
//
// Siguiendo la misma lógica, la palabra se insertó a la derecha por tener una
// cantidad de caracteres mayor.
//
// RESPUESTAS!:
// ✔️ Si el método recibe un string vacío, debe retornar false
// ✔️ Si el método recibe una palabra de tamaño igual a una palabra
// ya existente, debe retornar false.
// ✔️ La palabra debe insertarse en el lugar correspondiente y, de ser así,
// retornar el string que ha sido insertado

BinarySearchTree.prototype.insertWord = function (palabra) {
  
  // creo un nuevo subárbol con la palabra de valor
  let newTree = new BinarySearchTree(palabra)
  // si la palabrá está vacía retornar false
  if (palabra === '') return false;
  // si la palabra y el valor del nodo tienen la misma
  // cantidad de caracteres retornar false
  if (palabra.length === this.value.length) return false;

  // si la palabra tiene menos caracteres que el nodo
  // deberá guardarse en la rama izquierda
  if (palabra.length < this.value.length) {
    // si no hay left, simplemente le inserto el nuevo árbol
    if (!this.left) {
      this.left = newTree;
    } else {
      // si SÍ hay left, para saber dónde ubicarlo
      // debo hacer recursión
      this.left.insertWord(palabra);
    }
  } else {
    // caso contrario (palabra más larga que el nodo), 
    // repetir el proceso anterior pero en la rama derecha
    if (!this.right) {
      this.right = newTree;
    } else {
      this.right.insertWord(palabra);
    }
  }

  // finalmente debo retornar la palabra insertada
  return palabra;
};

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = { BinarySearchTree };
