// Write a function that takes in a string of words as an argument and returns an array that contains 2 things in this order:
//1) the word that appears the most times in the string, and
//2) how many times it appears. If all words appear equally, return ['none', 0]. You can always expect that one word will appear more than the others OR all words will appear equally.

//npm run Elle:wordOcurrences

const wordMostSaid = (str) => {
  if (str === '') return ['none', 0];

  let strSplit = str.toLowerCase().split(' ');
  let memo = {};

  strSplit.forEach((str) => {
    memo[str] ? memo[str]++ : (memo[str] = 1);
  });

  let sets = Object.entries(memo);

  let maxValue = 1;
  let touple = [];
  
  for (i = 0; i < sets.length; i++) {
    if (sets[i][1] > maxValue) {
      maxValue = sets[i][1];
      touple = sets[i];
    }
  }
  if (touple.length === 0) return ['none', 0];
  return touple;
};

// Examples:
console.log(wordMostSaid('Alex you Alex are the best Alex !')); // should return ['none', 0]
console.log(
  wordMostSaid(
    'Ralph Wreck It Ralph is the best movie Ralph ever and it really Ralph speaks to me'
  )
); // should return ['it', 2]
console.log(wordMostSaid('')); // should return ['none', 0]
