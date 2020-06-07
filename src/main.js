var game = new Game(cards, 'Player One', 'Player 2');

window.onload = game.redeal(cards);

document.addEventListener('keypress', controlHandler);

function controlHandler(event) {
  if (event.code === 'KeyQ') {
    player1Play();
  } else if (event.code === 'KeyP') {
    player2Play();
  } else if (event.code === 'KeyF') {
    player1Slap();
  } else if (event.code === 'KeyJ') {
    player2Slap();
  };
};

function player1Play() {
  if (game.player1.isTurn) {
    game.checkPlay(game.player1, game.player2);
    displayTopThree();
  } else {
    console.log('Not Your Turn');
  };
};

function player2Play() {
  if (game.player2.isTurn) {
    game.checkPlay(game.player2, game.player1);
    displayTopThree();
  } else {
    console.log('Not Your Turn');
  };
};

function player1Slap() {
  if (game.gameMode === 'normal') {
    game.slapCentralCardsNormal(game.player1, game.player2)
  } else {
    game.slapCentralCardsSuddenDeath(game.player1, game.player2)
  };
};

function player2Slap() {
  if (game.gameMode === 'normal') {
    game.slapCentralCardsNormal(game.player1, game.player2)
  } else {
    game.slapCentralCardsSuddenDeath(game.player1, game.player2)
  };
};

// function tylerPlay() {
//   game.checkPlay(game.player1, game.player2);
//   displayTopThree();
// };
//
// function kalebPlay() {
//   game.checkPlay(game.player2, game.player1);
//   displayTopThree();
// };
//
// function kalebSlapNorm() {
//   game.slapCentralCardsNormal(game.player2, game.player1);
// };
//
// function tylerSlapNorm() {
//   game.slapCentralCardsNormal(game.player1, game.player2);
// };
//
// function kalebSlapSD() {
//   game.slapCentralCardsSuddenDeath(game.player2, game.player1);
// };
//
// function tylerSlapSD() {
//   game.slapCentralCardsSuddenDeath(game.player1, game.player2);
// };
//
function displayTopThree() {
  console.log(game.centralCards);
  // if (game.centralCards.length === 1) {
  //   console.log(game.centralCards[0].cardNum);
  // } else if (game.centralCards.length === 2) {
  //   console.log(game.centralCards[0].cardNum + ' ' + game.centralCards[1].cardNum);
  // } else {
  //   console.log(game.centralCards[0].cardNum + ' ' + game.centralCards[1].cardNum + ' ' + game.centralCards[2].cardNum);
  // };
};
