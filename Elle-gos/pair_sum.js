//  Given an array of numbers sorted in ascending order (least to greatest), and a separate number (a "sum"), determine if any 2 numbers in the array add up to the sum.
//  Return true if any 2 different numbers within the array add up to sum. Return false if no 2 numbers in the array add up to sum.
//  Return true or false based on whether any 2 different numbers in the array add up to sum.

//npm run Elle:pairSum

function pairSum(numberArray, sum) {
  numberArray.sort((a, b) => a - b);

  let remainder;
  let counter = 0;

  numberArray.forEach((number) => {
    remainder = sum - number;
    numberArray.includes(remainder) && remainder !== number ? counter++ : '';
  });

  if (counter / 2 === 2) return true;

  if (counter / 2 !== 2) return false;
}

console.log(pairSum([3, 4, 5, 6, 7], 10)); // true

// normal test cases
console.log(pairSum([1, 1, 2, 3, 4, 5], 7)); //true
console.log(pairSum([1, 2, 3, 4, 5], 10)); //false
console.log(pairSum([1, 2, 3, 7, 8], 7)); //false
console.log(pairSum([1, 2, 3, 4, 5], 2)); //false
// edge test cases
console.log(pairSum([1], 2)); //false
console.log(pairSum([], 2)); //false
