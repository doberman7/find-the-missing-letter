// findMissingLetter(['a', 'b', 'c', 'd', 'f']) // -> 'e'
// findMissingLetter(['O', 'Q', 'R', 'S']) // -> 'P'
findMissingLetter(["T","U","W"]) // -> 'V'

function findMissingLetter(array) {
  const min = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];
  const mai = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let firstLetter = array[0]
  let correctsegment = []
  let indexOfcoincidece = null
  let times = array.length;
  //ontenerr muestra de mayuusculas
  mai.forEach((element, index) => {
    //obtener indice donde 1era letra y elemento de abecedario coinciden
    if (element == firstLetter) {
      indexOfcoincidece = index
    }
    //hacer nuevo array apartir de ese indice, dicho array es de la longitud del array input
    if (indexOfcoincidece != null) {
      times--
      if (times >= 0) {
        correctsegment.push(element)
      }
    }
  });
  ////ontenerr muestra de minusculas
  min.forEach((element, index) => {
    //obtener indice donde 1era letra y elemento de abecedario coinciden
    if (element == firstLetter) {
      indexOfcoincidece = index
    }
    //hacer nuevo array apartir de ese indice, dicho array es de la longitud del array input
    if (indexOfcoincidece != null) {
      times--
      if (times >= 0) {
        correctsegment.push(element)
      }
    }
  });
  //funcion que differencia entre dos arrays
  function arr_diff(a1, a2) {

    let a = [],
      diff = [];

    for (let i = 0; i < a1.length; i++) {
      a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
        delete a[a2[i]];
      } else {
        a[a2[i]] = true;
      }
    }

    for (let k in a) {
      diff.push(k);
    }

    return diff;
  }
  //comparar muestras
  let results = arr_diff(array,correctsegment)
  //retornar letra faltante
  return results[results.length-1]
}
