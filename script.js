$(document).ready(init);
// CREO GENERATORE DI NUMERI RANDOM
function getRandom(min, max){
  var diff = (max - min) +1;
  return Math.floor(Math.random() * diff ) + min;
}

// CREO GENERATORE DI ID
function getId() {
  var letters = "";
  var numbers = "";
  for (var i = 0; i < 3; i++) {
    var rnd = getRandom(1,9);
    var rndLetters = getRandom(65,90);
    rndLetters = String.fromCharCode(rndLetters);
    numbers += rnd;
    letters += rndLetters;
  }
  var idPlayer = letters + numbers;
  return idPlayer;
}

// CREO GENERATORE DI PLAYERS
function playersGenerator() {
  var twoPerc = getRandom(1,100);
  var threePerc = 100 - twoPerc;
  var player = {
    id : getId(),
    points : getRandom(1,100),
    bounce : getRandom(1,100),
    mistake : getRandom(1,100),
    twoPerc : twoPerc,
    threePerc : threePerc
  }
  return player;
}

// CREO CONTROLLO PER ID UNIVOCI
function isPresent(id, players) {
  var bool = true;
  for (var i = 0; i < players.length; i++) {
    if (id == players[i].id) {
      bool = false;
    }
  }
  return bool;
}

// CREO DATABASE DI GIOCATORI CON CONTROLLO ID
function databasePlayers() {
  var database = [];
  while (database.length < 10) {
    var player = playersGenerator();
    var bool = isPresent(player.id, database)
    if (bool) {
      database.push(player);
    }
  }
  return database;
}

function init() {
  console.log(getRandom(1,3));
  console.log(playersGenerator());
  console.log(databasePlayers());
}
