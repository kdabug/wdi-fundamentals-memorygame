console.log("Up and running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    image: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    image: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    image: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    image: "images/king-of-diamonds.png"
  }
];

cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].suit);
  console.log("User flipped " + cards[cardId].image);
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
};

flipCard(0);
flipCard(2);
