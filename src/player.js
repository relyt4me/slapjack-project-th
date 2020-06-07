class Player {
  constructor(name) {
    this.wins = 0;
    this.hand = [];
    this.name = name;
    this.isTurn = true;
    this.onTheRopes = false;
  };

  playCard(centralCards, gameMode) {
    centralCards.unshift(this.hand.shift());
    if (this.hand.length === 0) {
      gameMode = 'sudden death';
      this.onTheRopes = true;
    };
    return gameMode;
  };

  winGame() {
    this.wins ++;
  };
};
