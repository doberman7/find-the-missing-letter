findMissingLetter(['a', 'b', 'c', 'd', 'f']) // -> 'e'
findMissingLetter(['O','Q','R','S'])// -> 'P'

function findMissingLetter(array) {
  const min = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s" ,"u", "v", "w", "x", "y", "z"];
  const mai = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"];
  let firstLetter = array[0]
  //encontrar la 1era letra del array en min o en mai
  min.forEach((element, index) => {
    if (element == firstLetter) {
      console.log("es min",element);
    }
  });
  mai.forEach((element, index) => {
    if (element == firstLetter) {
      console.log("es may",element);
    }
  });


  // console.log(min.splice(0,array.length));
  return ' ';
}
