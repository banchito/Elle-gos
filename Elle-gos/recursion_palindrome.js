//Write a function that takes in a string as an argument and returns true if the string is a palindrome and false if it is not.
//Write this function using a recursive solution. Be mindful that palindromes can include phrases separated by spaces.

// npm run Elle:recursionPalindrome


let leftCounter = 0;
let rightCounter = 6; //filteredPalindrome.length - 1


function palindromeCheck(str){
    
    const adjointedStr = str.split(' ').join('').toLowerCase()

    const len = adjointedStr.length;
  
    if(len <=1)return true
  
    if(adjointedStr.charAt(0) !== adjointedStr.charAt(len - 1)) return false;
  
    return palindromeCheck(adjointedStr.slice(1,-1))
  }
  
  
console.log(palindromeCheck('radar')) // should return true
console.log(palindromeCheck('horse')) // should return false
console.log(palindromeCheck('taco cat')); // should return true
console.log(palindromeCheck('Amore Roma')) // should return true
console.log(palindromeCheck('')) // should return true
