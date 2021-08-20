// Write a function called "reverseWord" that takes in an array of characters and reverses the letters in place.

//npm run Elle:reverseString

function reverseWord(string) {
  var newString = '';
  for (i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  console.log(newString);
}
reverseWord('Elle');


//Another Solution

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Alex'));
