$(document).ready(init);

function getRandom(min, max){
  var diff = (max - min) +1;
  return Math.floor(Math.random() * diff ) + min;
}

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

function init() {
console.log(getId());
}
