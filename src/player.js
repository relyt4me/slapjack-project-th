class Player {
  constructor(name) {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
    this.name = name;
  };
  playCard(centralCards) {
    //play firt card in array of hand
    //return first card in array of hand
    //check if player has cards in hand
    if (this.hand.length > 0) {
      centralCards.unshift(this.hand.shift());
    };
  };

  winGame() {
    //Player's hand is reset, and they gain a win
    this.wins ++;
    this.hand = [];
  };
};

// var me = new Player();
// console.log('ID ' + me.id);
// console.log('Wins ' + me.wins);
// console.log('Hand ' + me.hand);
//
// me.hand = [1, 2, 3];
// console.log('New Hand ' + me.hand);
// console.log('Played Card ' + me.playCard());
// console.log('Final Hand ' + me.hand);
//
// me.winGame();
// console.log(me);

// may want to add player name property at later time
