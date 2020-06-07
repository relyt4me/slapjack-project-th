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
    displayLastCard();
  } else {
    console.log('Not Your Turn');
  };
};

function player2Play() {
  if (game.player2.isTurn) {
    game.checkPlay(game.player2, game.player1);
    displayLastCard();
  } else {
    console.log('Not Your Turn');
  };
};

function player1Slap() {
  if (game.player1.onTheRopes || game.player2.onTheRopes) {
    game.slapCentralCardsSuddenDeath(game.player1, game.player2)
  } else {
    game.slapCentralCardsNormal(game.player1, game.player2)
  };
  displayLastCard();
};

function player2Slap() {
  if (game.player1.onTheRopes || game.player2.onTheRopes) {
    game.slapCentralCardsSuddenDeath(game.player2, game.player1)
  } else {
    game.slapCentralCardsNormal(game.player2, game.player1)
  };
  displayLastCard();
};

function displayLastCard() {
  if (game.centralCards.length === 0) {
    document.querySelector('.card-pile-area').src = 'assets/open-hand.png';
  } else {
    document.querySelector('.card-pile-area').src = game.centralCards[0].picture;
  };
  if (game.player1.hand.length === 0) {
    document.querySelector('.player-one-area').src = "assets/open-hand.png";
  } else {
    document.querySelector('.player-one-area').src = "./assets/card-deck-assets/back.png";
  }
  if (game.player2.hand.length === 0) {
    document.querySelector('.player-two-area').src = "assets/open-hand.png";
  } else {
    document.querySelector('.player-two-area').src = "./assets/card-deck-assets/back.png";
  }
  console.log(game.centralCards[0].cardNum);
};
