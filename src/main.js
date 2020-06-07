var game = new Game(cards, 'tyler', 'kaleb');

game.redeal(cards);

function tylerPlay() {
  game.checkPlay(game.player1, game.player2);
  displayTopThree();
};

function kalebPlay() {
  game.checkPlay(game.player2, game.player1);
  displayTopThree();
};

function kalebSlapNorm() {
  game.slapCentralCardsNormal(game.player2, game.player1);
};

function tylerSlapNorm() {
  game.slapCentralCardsNormal(game.player1, game.player2);
};

function kalebSlapSD() {
  game.slapCentralCardsSuddenDeath(game.player2, game.player1);
};

function tylerSlapSD() {
  game.slapCentralCardsSuddenDeath(game.player1, game.player2);
};

function displayTopThree() {
  if (game.centralCards.length === 1) {
    console.log(game.centralCards[0].cardNum);
  } else if (game.centralCards.length === 2) {
    console.log(game.centralCards[0].cardNum + ' ' + game.centralCards[1].cardNum);
  } else {
    console.log(game.centralCards[0].cardNum + ' ' + game.centralCards[1].cardNum + ' ' + game.centralCards[2].cardNum);
  };
}
