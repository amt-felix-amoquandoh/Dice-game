var scores, activeScore, playerActive, dice;

scores = [0,0];
activeScore = 0;
playerActive = 1;



// document.querySelector("#current-" + playerActive).textContent = dice;

// document.querySelector(".dice").classList.add("diceDisplay");

document.querySelector(".btnRoll").addEventListener("click", function(){
   // getting a random number
    let dice = Math.floor(Math.random() * 6) + 1;
   //displaying to UI
   let rolledDice = document.querySelector(".dice");
   rolledDice.classList.add("rolledDice");
   rolledDice.src = "dice-" + dice + ".png"
});