//declare player and all else as oponent
//declare health for each player
//declare damage-per-attack for each player
//when attacking, health - damage-per-attack
//Winner announcement
//Reset

//HTML
//<div class = "champion"
//	player-health = '100'
//	player-name = "Pele">
//		<img src = "pele.jpg">
//</div>

//JS

<script src="gameFile.js"></script>

<script>
$('.champion').on('click', function() {
	var myHealth = $(this).attr('player-health')
	});
</script>

-----
var yourChampion = '';
var opponent = '';
var score = 0;
var health = '';
var champChosen = false;
var opponentChosen = false;
var opponentHealth = '';
var opponentAttack = '';
var opponentName = '';
var hasSpecial = true;
var audioElement = '';
//var secret = false;
var pele = './assets/images/pele.jpg';
var maradona = './assets/images/maradona.jpg';
var casillas = './assets/images/casillas.jpg';
var buffon = './assets/images/buffon.jpg';
var zidane = './assets/images/zidane.jpg';
var ronaldo = './assets/images/ronaldo.jpg';
var field = './assets/images/soccer-field.jpg';

//Select your player
$(".player").on("click", function(){
  if (chosenPlayer === false) {
    yourPlayer = $(this).attr('player-name');
    chosenPlayer = true;
    health = $(this).attr('player-health');
    attack = $(this).attr('player-attack');
    // $(".stats").replaceWith(yourHero + " " + "HP: " + health)
    $(this).appendTo(".yourPlayer");
    $(".remainingPlayers").appendTo(".yourOpponent");
  }
  //Your second click selects your enemy
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
//Attack button
$("#attack").on("click", function(){
  $(".health").text(yourPlayer + " " + "HP: " + health);
  $(".enemyHealth").text(opponentName + " " + "HP: " + opponentHealth);

var playersChosenAndAlive = chosenPlayer === true && chosenOpponent === true && health > 0 && enemyHealth > 0;
var isPlayerOut = health <= 0;
var isOpponentOut = opponentHealth <= 0;

  if (playersChosenAndAlive){
    health = health - opponentAttack;
    opponentHealth = opponentHealth - attack;
    attack = Number(attack) + 6;
    $(".health").text(yourPlayer + " " + "Score: " + health);
    $(".enemyHealth").text(opponentName + " " + "Score: " + opponentHealth);
  }
  //
  checkFinalScore();
});

//check to see if you face sauron, revive as gandalf the white or if you lose.
function checkVictory(){
  var secretLevel = opponentHealth <=0 && score > 1 && secret === false
  if (secretLevel){
    $('img[src="' + Pele + '"]').attr('src', Pele);
      alert("The Lord of the Ring has arrived")
    opponentHealth = 2000;
    opponentAttack = 500;
    $(".enemyHealth").text("Pele HP: " + opponentHealth);
    return secret = true
    
  }
  else if(opponentHealth <= 0){
    $(opponent).fadeOut();
    // $(".enemyHealth").toggle();
    score++;
    console.log(score);
    alert("You won this round, choose your next opponent");
  }
     else {
      alert("Your opponent is the World Champion");
    }
  }
}
//

funtion createCharacter () {
  var newObject = {
    health: 100,
    attack: 30,
    attackCharacter: function (otherCharacter) {
      otherCharacter.health -= this.attack;
    }
  };
  return newObject;
};

  var luke = {
    health: 120,
    attackPower: 40,
    attackCharacter: function (otherCharacter) {
      otherCharacter.health -= this.attack;
    }
  };
  return luke;
};
function createCharacter () {
  var obiwan = {

  }
};
  return obiwan;
var luke = createCharacter();
console.log(luke);
var obiwan = createCharacter();
luke.attackCharacter(obiwan)

$('.crystal').on('click', function() {
    console.log('ive been clicked');
    console.log($(this).hmtl());
    // or console.log($(eventTarget).hmtl());
});
$('.crystal').each(function() {
    $(this).hmtl('thing');
});
<div class crystal data-name="tom">
  thing 1
</div>

$('.crystal').on('click', function() {
  $(this).attr('data-name');
});
$('.crystal').on('click', function() {
  var myName = $(this).attr('data-name');
  console.log("this is ", myName);
});
$('.clicked-on').off('click');
$('.clicked-on').on('click', function() {
  console.log('i got clicked another time');
});

read jQuery definitions api jquery .com

delegate events: how to attach an event tpo something thsat hasn been created yet