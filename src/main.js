var game = new Game(cards, 'Player One', 'Player Two');

window.onload = setup();

document.addEventListener('keypress', controlHandler);

function setup() {
  game.redeal(cards);
  displayWins();
};

function displayWins() {
  document.querySelector('h2').innerText = `
  ${game.player1.name}: ${game.player1.wins}
  ${game.player2.name}: ${game.player2.wins}`
};

function displayRule() {
  document.querySelector('h1').innerText  = game.announcedRule;
};

function updateDisplay() {
  displayWins();
  displayRule();
  displayLastCard();
};

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
    game.announcedRule = 'Not Your Turn';
  };
  
  displayRule();
};

function player2Play() {
  if (game.player2.isTurn) {
    game.checkPlay(game.player2, game.player1);
    displayLastCard();
  } else {
    game.announcedRule = 'Not Your Turn';
  };
  displayRule();
};

function player1Slap() {
  if (game.player1.onTheRopes || game.player2.onTheRopes) {
    game.slapCentralCardsSuddenDeath(game.player1, game.player2)
  } else {
    game.slapCentralCardsNormal(game.player1, game.player2)
  };
  updateDisplay();
};

function player2Slap() {
  if (game.player1.onTheRopes || game.player2.onTheRopes) {
    game.slapCentralCardsSuddenDeath(game.player2, game.player1)
  } else {
    game.slapCentralCardsNormal(game.player2, game.player1)
  };
  updateDisplay();
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
