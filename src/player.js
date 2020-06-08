class Player {
  constructor(name) {
    this.wins = 0;
    this.hand = [];
    this.name = name;
    this.isTurn = true;
    this.onTheRopes = false;
  };

  playCard() {
    var playedCard = this.hand.shift();

    if (!this.hand.length) {
      this.onTheRopes = true;
    };

    return playedCard;
  };

  winGame() {
    this.wins ++;
  };
};
