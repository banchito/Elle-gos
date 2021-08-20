// given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
// You can also always assume that the string does not contain anything other than letters or spaces.

//npm run Elle:shortestword

function shortestWord(exampleString) {
  let min;
  const splitString = exampleString.split(' ');

  splitString.forEach((word) => {
    let length = word.length;

    min === undefined ? (min = length) : length < min ? (min = length) : '';
  });
  console.log(min)

  //Other solution
  // let wordArray = exampleString.split(' ')
  
  // let sortedArray = wordArray.map(function(word){
  //   return word.length
  // })
  
  // sortedArray.sort(function(a, b) {
  //   return a - b;
  // });

  // return sortedArray[0]


}
shortestWord('cat') // 3
shortestWord('the cat in the hat'); // 2
shortestWord('the cat and the hat') // 3
shortestWord('abcdefg a') // 1
shortestWord('GAMESTOP TO THE MOON') // 2
shortestWord('a a a') // 1
