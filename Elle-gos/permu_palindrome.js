// PROMPT: 

// Write an efficient function that checks whether any permutation of an input string is a palindrome. You must use an object to solve this problem. 

// Examples:

    // "civic" should return true
    // "ivicc" should return true
    // "civil" should return false
    // "livci" should return false


//npm run Elle:permupali


function permuPalindrome(str) {
    let obj = {};
  
    for (let i = 0; i < str.length; i++) {
      let currentChar = str.charAt(i);
      if(!obj[`${currentChar}`]) {
        obj[`${currentChar}`] = 1;
      } else {
        obj[`${currentChar}`]++;
      }
    }
  
    let values = Object.values(obj);
    let oddCount = 0;
  
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        oddCount++;
      }
    }
  
    if (oddCount > 1) {
      return false;
    }
  
    return true;
  }
  
  console.log(permuPalindrome("civic")); //true
  console.log(permuPalindrome("ivicc")); //true
  console.log(permuPalindrome("civil")); //false
  console.log(permuPalindrome("livci")); //false
  