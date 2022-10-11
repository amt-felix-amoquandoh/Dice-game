var scores, activeScore, playerActive, dice;

scores = [0,0];
activeScore = 0;
playerActive = 1;

document.getElementById("player1Score").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("player2Score").textContent = "0";
document.getElementById("current-2").textContent = "0";

// document.querySelector("#current-" + playerActive).textContent = dice;

// document.querySelector(".dice").classList.add("diceDisplay");

function rollDice (){
   // getting a random number
    var dice = Math.floor(Math.random() * 6) + 1;
   //displaying to UI
   var rolledDice = document.querySelector(".dice");
   rolledDice.classList.add("rolledDisplay");
   rolledDice.src = "dice-" + dice + ".png"
}

document.querySelector(".btnRoll").addEventListener("click", rollDice);