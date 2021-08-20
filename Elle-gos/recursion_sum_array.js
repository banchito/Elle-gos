

// npm run Elle:sumArrayRecursion


function arrSum(arr) {
  var sum = 0;
  // iterate array using forEach, better to use for loop since it have higher performance
  arr.forEach((item) => {
    // checking array element is an array
    if (typeof item == 'object')
      // if array then getting sum it's element (recursion)
      sum += arrSum(item);
    // else adding the value with sum
    else sum += item;
  });
  // returning the result
  return sum;
}

console.log(arrSum([2, 5, [4, 6], 5])) // should return 22
console.log(arrSum( [3, 4, 5, 6, 7] ) )// should return 25
console.log(arrSum( [1, [2, 3], [4, [5, 6]]] )) // should return 21
console.log(arrSum([[[[1, [2, 3]]]]])); // should return 6
console.log(( [ ] )) // should return 0
console.log(arrSum ( [ [ 1 ] ] )) // should return 1
