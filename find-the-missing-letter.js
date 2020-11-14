// findMissingLetter(['a', 'b', 'c', 'd', 'f']) // -> 'e'
findMissingLetter(['O','Q','R','S'])// -> 'P'

function findMissingLetter(array) {
  const min = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s" ,"u", "v", "w", "x", "y", "z"];
  const mai = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];
  let firstLetter = array[0]
  let segment = []
  let indexOfcoincidece = null
  let times = array.length;
  mai.forEach((element, index) => {
    //obtener indice donde 1era letra y elemento de abecedario coinciden
    if (element == firstLetter) {
      indexOfcoincidece = index
    }
    //hacer nuevo array apartir de ese indice, dicho array es de la longitud del array input
    if (indexOfcoincidece) {
        times--
        if (times >= 0) {
          segment.push(element)

        }
    }

  });

  console.log(segment);
  return ' ';
}
