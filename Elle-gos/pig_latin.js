// Move the first letter of each word to the end of it, then add "ay" to the end of the word.
// You do not have to worry about punctuation marks or any other characters besides letters.

//npm run Elle:pigLatin

const pigLatin = (string) => {
  let splitted = string.split(' ');

  let pigWord = [];

  for (let i = 0; i < splitted.length; i++) {
    let firstLetter = splitted[i][0];

    let restWord = splitted[i].substring(1);

    pigWord.push(`${restWord}${firstLetter}Ay`);
  }
  return pigWord.join(' ');
};

//Examples
console.log(pigLatin('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigLatin('Hello world')); // elloHay orldway
