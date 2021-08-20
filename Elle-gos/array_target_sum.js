// Given an array of distinct integers and an integer representing a target sum, write a function that returns an array of all triplets in the input array that sum to the target sum.

//npm run Elle:targetSum

function arrayTripleSum(arr, targetSum) {
  const result = []; 

  for (let i = 0; i < arr.length; i++) {
    let current = targetSum - arr[i];
    let obj = {};

    for (let j = i + 1; j < arr.length; j++) {
      if (obj[current - arr[j]]) {
        result.push([arr[i], current - arr[j], arr[j]])
      } else {
        obj[arr[j]] = true;
      }
    }
  }

  return result;
}

console.log(arrayTripleSum([12, 3, 1, 2, -6, 5, -8, 6], 0))   //should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
console.log(arrayTripleSum([5, 6 , 1, -9 , 7, 3 , 2], 35))    //should return []
console.log(arrayTripleSum([1, 15, -5, 12 , -3, 6 , 2], 10))  //should return [[ -3, 1, 12 ]]
