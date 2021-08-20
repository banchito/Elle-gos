// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//Write a method that takes the array as an argument and returns this "outlier" N.
// You can assume that your input will always have one, and only one, outlier.

//npm run Elle:findEvenOdd

function findOutlier(outlier) {
  var odd = outlier.filter(function (num) {
    return num % 2 !== 0;
  });

  var even = outlier.filter(function (num) {
    return num % 2 === 0;
  });

  return even.length > odd.length ? odd[0] : even[0];
}

// Examples
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // Should return: 11 (the only odd number)

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // should return 160 (the only even number)
