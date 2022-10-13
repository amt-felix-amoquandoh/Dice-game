var scores, activeScore, playerActive, dice;

scores = [0,0];
activeScore = 0;
playerActive = 1;

document.getElementById("score-1").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("score-2").textContent = 0;
document.getElementById("current-2").textContent = 0;

// next player function
function nextPlayer (){
   playerActive === 1 ? playerActive = 2 : playerActive = 1;
   activeScore = 0;
       document.getElementById("current-1").textContent = "0";
       document.getElementById("current-2").textContent = "0"; 
       document.querySelector(".player-1").classList.toggle("playerActive");
       document.querySelector(".player-2").classList.toggle("playerActive");

       document.querySelector(".dice").classList.toggle("rolledDisplay")
}


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
       nextPlayer();
   }
}

function holdDice (){
   //add current to main score
   scores[playerActive] = scores[playerActive] + activeScore;
   //display in ui
   document.querySelector("#score-" + playerActive).textContent = scores[playerActive];
   nextPlayer();
   //check winner

}

document.querySelector(".btnRoll").addEventListener("click", rollDice);
document.querySelector(".btnHold").addEventListener("click", holdDice);