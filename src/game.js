class Game {
  constructor(cards, player1Name, player2Name) {
    this.cards = cards;
    this.player1 = new Player(player1Name);
    this.player2 = new Player(player2Name);
    this.centralCards = [];
    this.announcedRule = 'SlapJACK GAME!!!!';
  };

  redeal() {
    this.cards = this.cards.concat(this.player1.hand, this.player2.hand, this.centralCards);
    this.player1.hand = [];
    this.player2.hand = [];
    this.centralCards = [];
    this.player1.onTheRopes = false;
    this.player2.onTheRopes = false;
    this.shuffleDeck();
    this.dealDeckToPlayers();
    this.player1.isTurn = true;
    this.player2.isTurn = false;
    this.announcedRule = 'SlapJACK GAME!!!!';
  };

  shuffleDeck() {
    this.cards = this.shuffleCards(this.cards);
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

  dealDeckToPlayers() {
    //********FOR TESTING*********//
    // this.player1.hand = this.cards.splice(0, 51);
    // this.player2.hand = this.cards.splice(0, 1);
    //********FOR TESTING*********//

    this.player1.hand = this.cards.splice(0, 26);
    this.player2.hand = this.cards.splice(0, 26);
  };

  slapCentralCardsNormal(slappingPlayer, opposingPlayer) {
    if (this.isLegalNormal()) {
      slappingPlayer.hand = slappingPlayer.hand.concat(this.centralCards);
      this.centralCards = [];
      slappingPlayer.hand = this.shuffleCards(slappingPlayer.hand);
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
      slappingPlayer.hand = slappingPlayer.hand.concat(this.centralCards);
      this.centralCards = [];
      slappingPlayer.hand = this.shuffleCards(slappingPlayer.hand);
      slappingPlayer.onTheRopes = false;
    } else if (slappingPlayer.hand.length && !this.isLegalSuddenDeath()) {
      opposingPlayer.hand.push(slappingPlayer.hand.shift());
      opposingPlayer.onTheRopes = false;
    } else {
      slappingPlayer.winGame();
      this.redeal();
    };
  };

  isLegalSuddenDeath() {
    if (this.centralCards[0].cardNum === 11 && this.centralCards.length > 0) {
      this.announcedRule = 'SuperSLAPjacK';
      return true;
    } else {
      this.announcedRule = 'OH NO!';
      return false;
    };
  };

  checkPlay(playingPlayer, opposingPlayer) {
    playingPlayer.playCard(this.centralCards);
    if (!playingPlayer.onTheRopes && !opposingPlayer.onTheRopes) {
      this.player1.isTurn = !this.player1.isTurn;
      this.player2.isTurn = !this.player2.isTurn;
    } else if (playingPlayer.onTheRopes && !opposingPlayer.onTheRopes) {
      this.player1.isTurn = !this.player1.isTurn;
      this.player2.isTurn = !this.player2.isTurn;
    } else if (!playingPlayer.onTheRopes && opposingPlayer.onTheRopes) {

    } else if (playingPlayer.onTheRopes && opposingPlayer.onTheRopes) {
      playingPlayer.hand = playingPlayer.hand.concat(this.centralCards);
      this.centralCards = [];
      playingPlayer.hand = this.shuffleCards(playingPlayer.hand);
      playingPlayer.onTheRopes = false;
    };
    this.announcedRule = 'SlapJACK GAME!!!!';
    // if (playingPlayer.hand.length < 1 && this.gameMode === 'sudden death') {
    //   playingPlayer.hand = playingPlayer.hand.concat(this.centralCards);
    //   this.centralCards = [];
    //   playingPlayer.hand = this.shuffleCards(playingPlayer.hand);
    // } else if (opposingPlayer.hand.length > 0) {
    //   this.player1.isTurn = !this.player1.isTurn;
    //   this.player2.isTurn = !this.player2.isTurn;
    // };
  };
};
