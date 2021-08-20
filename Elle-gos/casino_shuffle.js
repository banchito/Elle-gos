// Prompt: Write a function, given two arrays (one containing the values of your cards, the other containing the suits of your cards), that creates a deck of cards AND shuffles the deck IN PLACE.

// Remember, for each suit, there should be one card corresponding to each value (i.e. if you have 4 suits and a card value of Ace, you should have 4 aces in your deck).

// Return an array that contains the newly shuffled deck as the first element - each card should be an object containing its value and its suit. Also, an array that contains the first 5 elements of the deck (representing your starting hand) as the second element.

//npm run Elle:casino

function shuffler(cardValues, suitValues) {
  let deck = [];
  for (let i = 0; i < suitValues.length; i++) {
    for (let j = 0; j < cardValues.length; j++) {
      let card = { suitValues: suitValues[i], cardValues: cardValues[j] };
      deck.push(card);
    }
  }
  //shuffling the deck

  for (i = deck.length - 1; i > 0; i--) {
    let randomIndexLocation = Math.floor(Math.random() * i);
    let tempPlaceholder = deck[i]; // A of Spades

    deck[i] = deck[randomIndexLocation];
    deck[randomIndexLocation] = tempPlaceholder;
  }

  //create Hand
  handOfCards = [];
  for (let i = 0; i < 5; i++) {
    handOfCards.push(deck[i]);
  }

  // Send the shuffled deck and new hand back to the user.
  return [handOfCards, deck];
}

const cardValues = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];
const suitValues = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];

console.log(shuffler(cardValues, suitValues));
