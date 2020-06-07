var game = new Game(cards, 'Player One', 'Player 2');

window.onload = game.redeal(cards);

document.addEventListener('keypress', controlHandler);

function controlHandler(event) {
  if (event.code === 'KeyQ') {
    console.log('q');
    player1Play();
  } else if (event.code === 'KeyP') {
    console.log('p');
    player2Play();
  } else if (event.code === 'KeyF') {
    console.log('f');
    player1Slap();
  } else if (event.code === 'KeyJ') {
    console.log('j');
    player2Slap();
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
// function displayTopThree() {
//   if (game.centralCards.length === 1) {
//     console.log(game.centralCards[0].cardNum);
//   } else if (game.centralCards.length === 2) {
//     console.log(game.centralCards[0].cardNum + ' ' + game.centralCards[1].cardNum);
//   } else {
//     console.log(game.centralCards[0].cardNum + ' ' + game.centralCards[1].cardNum + ' ' + game.centralCards[2].cardNum);
//   };
// }
