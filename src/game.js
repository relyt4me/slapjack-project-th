class Game {
  constructor(cards, player1Name, player2Name) {
    this.cards = cards;
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
  };
  shuffleDeck() {
    var shuffledCards = [];
    for (var i = 0; i < 52; i++) {
      shuffledCards.push(this.cards.splice(this.randomCard(this.cards), 1)[0])
    };
    this.cards = shuffledCards;
  };

  randomCard(setOfCards) {
    return Math.floor(Math.random() * setOfCards.length);
  };
};
