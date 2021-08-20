// Write a recursive function that takes in two inputs: a `dictionary` object that may itself contain objects, and a `theMagicNumber` integer. 
//Your goal is to return the sum of all the positive numbers in the `dictionary`. 
//However, if 'theMagicNumber' is present in the `dictionary`, it should first be multiplied by 7 before being added to the total sum. 

//npm run Elle:magicNum

function casinoSum(inputObj, magicNumber) {
    let sum = 0;
    Object.values(inputObj).forEach(value => {
      if (typeof value === "object") {
        sum += casinoSum(value, magicNumber)
      } else {
        if ( typeof value === "number" && value > 0) {
          if (value === magicNumber) {
            value = value * 7;
          }
          sum += value;
        }
      }
    })

    return sum;
  }
  
  
  console.log(casinoSum({
    "a": 2,
    "b": { "x": 2, "y": { "foo": 3, "z": { "bar": 2 } } },
    "c": { "p": { "h": 2, "r": 10 }, "q": 'ball', "r": 5 },
    "d": 1,
    "e": { "nn": { "lil": 2 }, "mm": 'car', 'gg': -1 }
  }, 10))
  // should return 89
  console.log(casinoSum({
    'a': 1,
    'b': { 'c': 2, 'd': 3 }
  }, 4)) // should return 6
  console.log(casinoSum({
    'diamond': 7
  }, 7)) // should return 49
  console.log(casinoSum({}, 0)) // should return 0