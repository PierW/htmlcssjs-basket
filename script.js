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

// CARICO ID NELL'INPUT
function upgradeDOM(playerslist) {
  var datalist = $("#players");
  for (var i = 0; i < playerslist.length; i++) {
    var id = playerslist[i].id;
    var newElement = document.createElement("option");
    newElement.value = id;
    datalist.append(newElement);
  }
  return;
}

// CANCELLO VALORI AL CLICK DEL BOTTONE
function clearClick() {
  var button = $("#clear-btn");
  button.click(function() {
    var input = $("#usr-input");
    input.val("");

    var idDOM = $("#id .content");
    var pointsDOM = $("#points .content");
    var bounceDOM = $("#bounce .content");
    var mistakeDOM = $("#mistake .content");
    var twoPercDOM = $("#twoPerc .content");
    var threePercDOM = $("#threePerc .content");

    idDOM.text("");
    pointsDOM.text("");
    bounceDOM.text("");
    mistakeDOM.text("");
    twoPercDOM.text("");
    threePercDOM.text("");
  });
}

// TROVO IL PLAYER CORRISPONDENTE
function findSelected(id, players) {
  var player;
  for (var i = 0; i < players.length; i++) {
    if (id == players[i].id) {
      player = players[i];
    }
  }
  return player;
}

// MOSTRO NEL DOM I VALORI DEL PLAYER SELEZIONATO
function showSelected(players) {
  var valueSelected = $("#usr-input").val();
  var player = findSelected(valueSelected, players);

  var idDOM = $("#id .content");
  var pointsDOM = $("#points .content");
  var bounceDOM = $("#bounce .content");
  var mistakeDOM = $("#mistake .content");
  var twoPercDOM = $("#twoPerc .content");
  var threePercDOM = $("#threePerc .content");

  idDOM.text(player.id);
  pointsDOM.text(player.points);
  bounceDOM.text(player.bounce);
  mistakeDOM.text(player.mistake);
  twoPercDOM.text(player.twoPerc + "%");
  threePercDOM.text(player.threePerc + "%");
}

function init() {
  var players = databasePlayers();
  upgradeDOM(players); //AGGIUNGO LA LISTA DEI PLAYERS NELL'INPUT
  clearClick();

  var userInput = $("#usr-input"); //AL CAMBIO DELL'INPUT RICHIAMO LA FUNZIONE showSelected
  userInput.change(function(){
  showSelected(players);
});
}
