//declare player and all else as oponent
//declare health for each player
//declare damage-per-attack for each player
//when attacking, health - damage-per-attack
//Winner announcement
//Reset

<script>

var yourChampion = '';
var opponent = '';
var score = 0;
var health = '';
var champChosen = false;
var opponentChosen = false;
var opponentHealth = '';
var opponentAttack = '';
var opponentName = '';

var pele = './assets/images/pele.jpg';
var maradona = './assets/images/maradona.jpg';
var casillas = './assets/images/casillas.jpg';
var buffon = './assets/images/buffon.jpg';
var zidane = './assets/images/zidane.jpg';
var ronaldo = './assets/images/ronaldo.jpg';
var field = './assets/images/soccer-field.jpg';

//$('.champion').on('click', function() {
//  var myHealth = $(this).attr('player-health')
//  });

//Select your player
$(".player").on("click", function(){
  if (chosenPlayer === false) {
    yourPlayer = $(this).attr('player-name');
    chosenPlayer = true;
    health = $(this).attr('player-health');
    attack = $(this).attr('player-attack');
    
    $(this).appendTo(".yourPlayer");
    $(".remainingPlayers").appendTo(".yourOpponent");
  }
  //Second click selects opponent
  else {
    opponentName = $(this).attr('player-name');
    chosenOpponent = true;
    opponent = this;
    $(this).appendTo(".currentOpponent");
    opponentHealth = $(this).attr('player-health')
    opponentAttack = $(this).attr('player-attack')
    $(".opponentHealth").text(opponentName + " " + "HP: " + opponentHealth);
  }
});
//Shoot button
$("#attack").on("click", function(){
  $(".health").text(yourPlayer + " " + "HP: " + health);
  $(".opponentHealth").text(opponentName + " " + "HP: " + opponentHealth);

var playersChosenAndAlive = chosenPlayer === true && chosenOpponent === true && health > 0 && opponentHealth > 0;
var isPlayerOut = health <= 0;
var isOpponentOut = opponentHealth <= 0;

  if (playersChosenAndAlive){
    health = health - opponentAttack;
    opponentHealth = opponentHealth - attack;
    attack = Number(attack) + 6;
    $(".health").text(yourPlayer + " " + "Score: " + health);
    $(".opponentHealth").text(opponentName + " " + "Score: " + opponentHealth);
  }
  //
  checkFinalScore();
});


function checkVictory(){
  var secretLevel = opponentHealth <=0 && score > 1 && secret === false
  if (secretLevel){
    $('img[src="' + Pele + '"]').attr('src', Pele);
      alert("The Legend is ALIVE")
    opponentHealth = 2000;
    opponentAttack = 500;
    $(".opponentHealth").text("Pele HP: " + opponentHealth);
    return secret = true
    
  }
  else if(opponentHealth <= 0){
    $(opponent).fadeOut();
    score++;
    console.log(score);
    alert("You won this round, choose your next opponent");
  }
     else {
      alert("Your opponent is the World Champion");
    }
  }
}