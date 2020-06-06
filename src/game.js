class Game {
  constructor(cards, player1Name, player2Name) {
    this.cards = cards;
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.centralCards = [];
  };
  shuffleDeck() {
    this.cards = this.shuffleCards(this.cards);
  }

  shuffleCards(givenCards) {
    var startingLengthCards = givenCards.length;
    var shuffledCards = [];
    for (var i = 0; i < startingLengthCards; i++) {
      shuffledCards.push(givenCards.splice(this.randomCard(givenCards), 1)[0])
    };
    debugger;
    return shuffledCards;
  };

  randomCard(setOfCards) {
    return Math.floor(Math.random() * setOfCards.length);
  };

  dealDeckToPlayers() {
    this.player1.hand = this.cards.splice(0, 26);
    this.player2.hand = this.cards.splice(0, 26);
  };

  slapCentralCards(slappingPlayer, opposingPlayer) {
    //Check legality of slap
    //if slap is legal add centralCards to players hand and shuffle
    //if slap is not legal add top card of players hand to other player
  };

  isLegal() {
    if (centralCards[0].){

    };
  };
};
