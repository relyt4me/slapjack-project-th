class Player {
  constructor(name) {
    this.name = name;
    this.wins = this.getSavedScore() || 0;
    this.hand = [];
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
    this.wins++;
    var stringyWins = JSON.stringify(this.wins);
    localStorage.setItem(this.name, stringyWins);
  };

  getSavedScore() {
    var savedWins = JSON.parse(localStorage.getItem(this.name));
    return savedWins
  };
};
