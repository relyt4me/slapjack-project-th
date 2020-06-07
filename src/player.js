class Player {
  constructor(name) {
    this.wins = 0;
    this.hand = [];
    this.name = name;
    this.isTurn = true;
    this.onTheRopes = false;
  };

  playCard(centralCards) {
    centralCards.unshift(this.hand.shift());
    if (this.hand.length === 0) {
      this.onTheRopes = true;
    };
  };

  winGame() {
    this.wins ++;
  };
};
