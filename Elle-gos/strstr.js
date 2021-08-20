// Today we're going to implement a built-in function called .strStr(str1, str2).
// Return the index of the first occurence of the "needle" (str2) in the "haystack" (str1).
// If the needle does not exist in the haystack, return -1.
// Note: What should we return if str1 (hatstack) is empty or an improper data type?

//npm run Elle:strstr

function fakeStrStr(haystack, needle) {
  if (!needle) needle = ' ';  
  if (!haystack) return 'The haystack is either empty or an improper data type';
  if (needle.length > haystack.length) return -1;
  if (needle === haystack) return 0;
  if (!typeof needle === 'string' || !typeof haystack === 'string') return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let currentSubstr = haystack.substring(i, i + needle.length);
    if (currentSubstr === needle) return i;
  }
  return -1;
}

console.log(fakeStrStr('hello', 'll')) // should return 2
console.log(fakeStrStr('aaaaaaaaaaa', 'bb')) // should return -1
console.log(fakeStrStr('imceiomcoi', '')) // should return -1
console.log(fakeStrStr('', 'mqiovqmeivomeq')) // should return 'The haystack is either empty or an improper data type.'
console.log(fakeStrStr('c', 'c')) // should return 0
