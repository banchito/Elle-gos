// Prompt: Write a function that reverses a word in place. The function will take in an argument as a string.
// npm run Elle:reverseWord

function reverser(str) {
  // Split up my word so that I can see each individual letter in that word. 
  let reversedStr = str.split('')

  // I want to compare the first letter to the last letter in this word. 
  let leftPointer = 0;
  let rightPointer = str.length - 1

  // I want to then start this repetitive process of swapping each letter until I hit the middle of the word, at which point I will stop. 
    // Determine if I should use a for loop or a while loop. 
    // What's the condition of my while loop? 
    // Start swapping each letter 
    // Make sure that i now move my pointers so I'm pointing at the next set of letters to compare 
  while (leftPointer < rightPointer) {
    let leftLetter = reversedStr[leftPointer]
    let rightLetter = reversedStr[rightPointer]
    
    let tempHolder = leftLetter 
    reversedStr[leftPointer] = rightLetter 
    reversedStr[rightPointer] = tempHolder 
    leftPointer++ 
    rightPointer-- 
  }


  // Return the new reversed word 
  const finalResult = reversedStr.join('')
  return finalResult
}

console.log(reverser('hello'))


//Naive approach
// function reverseWord(str) {
//   let newStr = '';
//   const letterArray = str.split('');
//   for (let i = letterArray.length - 1; i > -1; i--) {
//     newStr = newStr + letterArray[i];
//   }
//   return newStr;
// }

// console.log(reverseWord('hello'));

