var game = new Game(cards, 'Player One', 'Player Two');

window.onload = setup();

document.addEventListener('keypress', controlHandler);

function setup() {
  game.resetGame();
  updateDisplay();
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
    game.allowPlay(game.player1, game.player2);
    displayCards();
  } else {
    game.announcedRule = 'Not Your Turn';
  };

  displayRule();
};

function player2Play() {
  if (game.player2.isTurn) {
    game.allowPlay(game.player2, game.player1);
    displayCards();
  } else {
    game.announcedRule = 'Not Your Turn';
  };

  displayRule();
};

function player1Slap() {
  if (game.player1.onTheRopes || game.player2.onTheRopes) {
    game.slapCentralCardsSuddenDeath(game.player1, game.player2);
  } else {
    game.slapCentralCardsNormal(game.player1, game.player2);
  };

  updateDisplay();
};

function player2Slap() {
  if (game.player1.onTheRopes || game.player2.onTheRopes) {
    game.slapCentralCardsSuddenDeath(game.player2, game.player1);
  } else {
    game.slapCentralCardsNormal(game.player2, game.player1);
  };

  updateDisplay();
};

function updateDisplay() {
  displayWins();
  displayRule();
  displayCards();
};

function displayWins() {
  document.querySelector('h2').innerText = `
  ${game.player1.name}: ${game.player1.wins}
  ${game.player2.name}: ${game.player2.wins}`;
};

function displayRule() {
  document.querySelector('h1').innerText  = game.announcedRule;
};

function displayCards() {
  updateCentralCardsDisplay();
  updatePlayer1Display();
  updatePlayer2Display();
};

function updatePlayer1Display() {
  var player1Area = document.querySelector('.player-one-area');
  if (game.player1.hand.length === 0) {
    player1Area.src = "assets/open-hand.png";
  } else {
    player1Area.src = "./assets/card-deck-assets/back.png";
  };
  
  if (game.player1.isTurn) {
    player1Area.classList.add('is-turn-color');
  } else {
    player1Area.classList.remove('is-turn-color');
  };
};

function updatePlayer2Display() {
  var player2Area = document.querySelector('.player-two-area');
  if (game.player2.hand.length === 0) {
    player2Area.src = "assets/open-hand.png";
  } else {
    player2Area.src = "./assets/card-deck-assets/back.png";
  };

  if (game.player2.isTurn) {
    player2Area.classList.add('is-turn-color');
  } else {
    player2Area.classList.remove('is-turn-color');
  };
};

function updateCentralCardsDisplay() {
  if (game.centralCards.length === 0) {
    document.querySelector('.card-pile-area').src = 'assets/open-hand.png';
  } else {
    document.querySelector('.card-pile-area').src = game.centralCards[0].picture;
  };
};
