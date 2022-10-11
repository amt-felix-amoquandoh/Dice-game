let p1CurrentScore = document.getElementById("current-1");
let p2CurrentScore = document.getElementById("current-2");
let p1MainScore = document.getElementById("player1Score");
let p2MianScore = document.getElementById("player2Score");


var scores, activeScore, playerActive, dice;

scores = [0,0];
activeScore = 0;
playerActive = 1;

p1MainScore.textContent = "0";
p1CurrentScore.textContent = "0";
p2MianScore.textContent = "0";
p2CurrentScore = "0";

// document.querySelector(".dice").classList.add("diceDisplay");

function rollDice (){
   // getting a random number
    var dice = Math.floor(Math.random() * 6) + 1;
   //displaying to UI
   var rolledDice = document.querySelector(".dice");
   rolledDice.classList.add("rolledDisplay");
   rolledDice.src = "dice-" + dice + ".png"
   //displaying the score
   if(dice !== 1){
      activeScore += dice
      document.querySelector("#current-" + playerActive).textContent = activeScore;
   } else{
      //go to player 2
       playerActive === 1 ? playerActive = 2 : playerActive = 1;
       document.getElementById("current-1").textContent = "0";
       document.getElementById("current-2").textContent = "0"; 
       document.querySelector(".player1").classList.remove("playerActive");
       document.querySelector(".player2").classList.add("playerActive");
   }
}

document.querySelector(".btnRoll").addEventListener("click", rollDice);