class Player {
  constructor() {
    this.id = Date.now();
    this.wins = 0;
    this.hand = [];
  };
  playCard() {
    //play firt card in array of hand
    //return first card in array of hand
    //check if player has cards in hand
    if (this.hand.length > 0) {
      return this.hand.pop();
    };
  };

  slapPile() {
    //
  };

  
};

var me = new Player();
console.log('ID ' + me.id);
console.log('Wins ' + me.wins);
console.log('Hand ' + me.hand);

me.hand = [1, 2, 3];
console.log('New Hand ' + me.hand);
console.log('Played Card ' + me.playCard());
console.log('Final Hand ' + me.hand);
