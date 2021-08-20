// Check to see if a string has the same amount of 'x's and 'o's.
//The method must return a boolean.
//The string can contain any char.
//You can assume that the input string consists of only lowercase letters and/or spaces.

//npm run Elle:osandxs

const XO = (exampleString) => {

  let os = 0;
  let xs = 0;

  const newStr = exampleString.toLowerCase();

  for (let i = 0; i < newStr.length; i++) {
    newStr.charAt(i) === 'o' ? os++ : '';
    newStr.charAt(i) === 'x' ? xs++ : '';
  }
  return os === xs;
};

console.log(XO('ooxx')); //=> true
console.log(XO('xooxx')); //=> false
console.log(XO('ooxXm')); //=> true
console.log(XO('zpzpzpp')); //=> true // when no 'x' and 'o' is present should return true
console.log(XO('zzoo')); //=> false
console.log(XO('')); //=> true
console.log(XO('                       ')); //=> true
