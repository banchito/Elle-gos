// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed.
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// npm run Elle:spinWords

function spinWords(str) {
  
  const splitStr = str.split(' ');

  const newStr = splitStr.map((word) => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
  return newStr.join(' ');
}

// Examples:
console.log(spinWords('Hey fellow warriors')); // "Hey wollef sroirraw"
console.log(spinWords("This is a test")) // "This is a test"
console.log(spinWords("This is another test")) // "This is rehtona test"
