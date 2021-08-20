// DICTIONARY SEARCH PROBLEM

// PROMPT: 
// Given an alphtabetical array of dictionary entries and a word to search for (which will be in the form of a string), 
//find that word's definition (if it exists). A dictionary entry is just a string where the word's name appears first, followed by - [definition].

// npm run Elle:dictionary


// EXAMPLES:
const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or conversation',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'in - Expressing the situation of something that is or appears to be enclosed or surrounded by something else',
  'of - Expressing the relationship between a part and a whole',
  'that - Used to identify a specific person or thing observed or heard by the speaker',
  'the - Denoting one or more people or things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of (a particular location)',
];

function definitionOf(word, dict) {
  const foundEntry = dict.find((entry) => entry.startsWith(word + ' - '));
  if (!foundEntry) return;
  return foundEntry.slice(word.length + 3); // "subtract" the word itself (plus the ' - ' part)
}

console.log(definitionOf('be', dictionary)); // should return 'Exist'
console.log(definitionOf('that', dictionary)); // should return 'Used to identify a specific person or thing observed or heard by the speaker'
console.log(definitionOf('to', dictionary)); // should return 'Expressing motion in the direction of (a particular location)'
console.log(definitionOf('wizbing', dictionary)); // should return undefined
