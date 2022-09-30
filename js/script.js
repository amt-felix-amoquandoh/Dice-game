var scores, activeScore, playerActive, dice;

scores = [0,0];
activeScore = 0;
playerActive = 1;

document.getElementById("player1Score").textContent = "";
document.getElementById("current-1").textContent = "";
document.getElementById("player2Score").textContent = "";
document.getElementById("current-2").textContent = "";

// document.querySelector("#current-" + playerActive).textContent = dice;

// document.querySelector(".dice").classList.add("diceDisplay");

document.querySelector(".btnRoll").addEventListener("click", function(){
   // getting a random number
    var dice = Math.floor(Math.random() * 6) + 1;
   //displaying to UI
   var rolledDice = document.querySelector(".dice");
   rolledDice.classList.add("rolledDisplay");
   rolledDice.src = "dice-" + dice + ".png"
});