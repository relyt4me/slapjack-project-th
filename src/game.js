class Game {
  constructor(cards, player1Name, player2Name) {
    this.cards = cards;
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.centralCards = [];
    this.announcedRule = 'SlapJACK GAME!!!!';
  };

  resetGame() {
    this.announcedRule = 'SlapJACK GAME!!!!';
    this.player1.onTheRopes = false;
    this.player2.onTheRopes = false;
    this.player1.isTurn = true;
    this.player2.isTurn = false;
    this.clearCards();
    this.cards = this.shuffleCards(this.cards);
    this.dealDeckToPlayers();
  };

  clearCards() {
    this.cards = this.cards.concat(this.player1.hand, this.player2.hand, this.centralCards);
    this.player1.hand = [];
    this.player2.hand = [];
    this.centralCards = [];
  };

  dealDeckToPlayers() {
    this.player1.hand = this.cards.splice(0, 26);
    this.player2.hand = this.cards.splice(0, 26);
  };

  allowPlay(playingPlayer, opposingPlayer) {
    if (this.centralCards.length === 52) {
      this.givePlayerCentralPile(playingPlayer);
      playingPlayer.onTheRopes = false;
    } else {
      this.centralCards.unshift(playingPlayer.playCard());
    };

    this.decideTurns(opposingPlayer);
    this.announcedRule = 'SlapJACK GAME!!!!';
  };

  decideTurns(opposingPlayer) {
    if (!opposingPlayer.onTheRopes) {
      this.player1.isTurn = !this.player1.isTurn;
      this.player2.isTurn = !this.player2.isTurn;
    };
  };

  slapCentralCardsNormal(slappingPlayer, opposingPlayer) {
    if (this.isLegalNormal()) {
      this.givePlayerCentralPile(slappingPlayer);
    } else {
      opposingPlayer.hand.push(slappingPlayer.hand.shift());
    };
  };

  isLegalNormal() {
    if (this.centralCards.length && this.centralCards[0].cardNum === 11) {
      this.announcedRule = '!!!SlapJACK!!!';
      return true;
    } else if (this.centralCards.length > 1 && this.centralCards[0].cardNum === this.centralCards[1].cardNum) {
      this.announcedRule = 'DOUBLES x DOUBLES';
      return true;
    } else if (this.centralCards.length > 2 && this.centralCards[0].cardNum === this.centralCards[2].cardNum) {
      this.announcedRule = 'SAND|xxx|WHICH';
      return true;
    } else {
      this.announcedRule = '!!!!OUCH!!!!';
      return false;
    };
  };

  slapCentralCardsSuddenDeath(slappingPlayer, opposingPlayer) {
    if (slappingPlayer.hand.length < 1 && this.isLegalSuddenDeath()) {
      this.givePlayerCentralPile(slappingPlayer);
      slappingPlayer.onTheRopes = false;
    } else if (slappingPlayer.hand.length && !this.isLegalSuddenDeath()) {
      opposingPlayer.hand.push(slappingPlayer.hand.shift());
      opposingPlayer.onTheRopes = false;
    } else {
      slappingPlayer.winGame();
      this.resetGame();
    };
  };

  isLegalSuddenDeath() {
    if (this.centralCards.length && this.centralCards[0].cardNum === 11) {
      this.announcedRule = 'SuperSLAPjacK';
      return true;
    } else {
      return false;
    };
  };

  givePlayerCentralPile(player) {
    player.hand = player.hand.concat(this.centralCards);
    this.centralCards = [];
    player.hand = this.shuffleCards(player.hand);
  };

  shuffleCards(givenCards) {
    var startingLengthCards = givenCards.length;
    var shuffledCards = [];

    for (var i = 0; i < startingLengthCards; i++) {
      shuffledCards.push(givenCards.splice(this.randomCard(givenCards), 1)[0]);
    };

    return shuffledCards;
  };

  randomCard(setOfCards) {
    return Math.floor(Math.random() * setOfCards.length);
  };
};
