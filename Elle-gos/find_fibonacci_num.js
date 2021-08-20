// The Fibonacci numbers are the numbers in the following integer sequence.
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ……..
//Given a number n, print the n-th Fibonacci Number.

//npm run Elle:fibonacci

function fN(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fN(n - 1) + fN(n - 2);
  }
}

console.log(fN(2)) // should return 1
console.log(fN(3)) // should return 2
console.log(fN(9)) // should return 34



// another solution
// function fibonacciFinder(num) {
//   if (num <= 1) return 1;

//   return fibonacciFinder(num - 1) + fibonacciFinder(num - 2);
// }

// fibonacciFinder(2)
