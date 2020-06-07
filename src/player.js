class Player {
  constructor(name) {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
    this.name = name;
    this.isTurn = true;
  };

  playCard(centralCards, gameMode) {
    centralCards.unshift(this.hand.shift());
    if (this.hand.length > 0) {
      debugger;
      gameMode = 'normal';
    } else {
      gameMode = 'sudden death';
    };
    return gameMode;
  };

  winGame() {
    this.wins ++;
  };
};
