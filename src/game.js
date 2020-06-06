class Game {
  constructor(cards, player1Name, player2Name) {
    this.cards = cards;
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.centralCards = [];
    this.gameMode = 'normal';
  };
  redeal() {
    this.cards = cards;
    this.player1.hand = [];
    this.player2.hand = [];
    this.centralCards = [];
    this.gameMode = 'normal';
    this.shuffleDeck();
    this.dealDeckToPlayers();
    this.player1.isTurn = true;
    this.players2.isTurn = false;
  };

  shuffleDeck() {
    this.cards = this.shuffleCards(this.cards);
  };

  shuffleCards(givenCards) {
    var startingLengthCards = givenCards.length;
    var shuffledCards = [];
    for (var i = 0; i < startingLengthCards; i++) {
      shuffledCards.push(givenCards.splice(this.randomCard(givenCards), 1)[0])
    };
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
    if (this.isLegal()) {
      slappingPlayer.hand = slappingPlayer.hand.concat(this.centralCards);
      this.centralCards = [];
      slappingPlayer.hand = shufflecards(slappingPlayer.hand);
    } else {
      opposingPlayer.hand.push(slappingPlayer.hand.shift());
    };
  };

  isLegal() {
    if (this.centralCards[0].cardNum === 11 && this.centralCards.length > 0) {
      return true;
    } else if (this.centralCards.length > 2 && this.centralCards[0].cardNum === this.centralCards[1].cardNum) {
      return true;
    } else if (this.centralCards.length > 2 && this.centralCards[0].cardNum === this.centralCards[2].cardNum) {
      return true;
    } else {
      return false;
    };
  };
};
