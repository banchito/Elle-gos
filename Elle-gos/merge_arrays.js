// //  In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
// // Each order is represented by an "order id" (an integer).

// // Prompt: 
// // We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
// npm run Elle:mergeArrays

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
const mergeArrays = (myArray, alicesArray) =>{

  let myArrayPointer = 0;
  let alicesArraypointer = 0;
  let index       = 0;
  let holder = [];
  while(index < (myArray.length + alicesArray.length)){

    if(myArray[myArrayPointer] < alicesArray[alicesArraypointer]){
      holder.push(myArray[myArrayPointer]);
      myArrayPointer++;
      index++;
    }else{
      holder.push(alicesArray[alicesArraypointer]);
      alicesArraypointer++;
      index++;
    }
  }
  console.log(holder)
}
 console.log(mergeArrays(myArray, alicesArray));
