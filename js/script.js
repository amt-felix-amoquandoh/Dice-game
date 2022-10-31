var scores, activeScore, playerActive, dice;

scores = {score1: 0,
   score2: 0
};
activeScore = 0;
playerActive = 1;

document.getElementById("score1").textContent = 0;
document.getElementById("current1").textContent = 0;
document.getElementById("score2").textContent = 0;
document.getElementById("current2").textContent = 0;

// next player function
function nextPlayer (){
   playerActive === 1 ? playerActive = 2 : playerActive = 1;
   activeScore = 0;
   
       document.getElementById("current1").textContent = "0";
       document.getElementById("current2").textContent = "0"; 
       document.querySelector(".player1").classList.toggle("playerActive");
       document.querySelector(".player2").classList.toggle("playerActive");

       document.querySelector(".dice").style.display = "none";
       
}


function rollDice (){
   // getting a random number
    var dice = Math.floor(Math.random() * 6) + 1;
   //displaying to UI
   document.querySelector(".dice").style.display = "block";
   var rolledDice = document.querySelector(".dice");
   rolledDice.classList.add("rolledDisplay");
   rolledDice.src = "dice-" + dice + ".png"
   //displaying the score
   if(dice !== 1){
      activeScore = activeScore + dice
      document.querySelector("#current" + playerActive).textContent = activeScore;
   } else{
      //go to player 2
       nextPlayer();
   }
}

function holdDice (){
   //add current to main score
   scores["score" + playerActive] += activeScore;
   //display in ui
   document.querySelector("#score" + playerActive).textContent = scores["score" + playerActive];
   nextPlayer();
   //check winner
   if (scores["score" + playerActive] = 10) {
      document.querySelector("#name" + playerActive).textContent = "You Won!!"
      document.querySelector(".dice").classList.add("rolledDisplay");
      document.querySelector(".player" + playerActive + "-panel").classList.add("winner");
      document.querySelector(".player" + playerActive + "-nvanel").classList.remove("playerActive");
   } else {
      nextPlayer(); 
   }

}

function startNewGame(){
  scores[0,0];
  playerActive = 0;
  activeScore = 0;

}


document.querySelector(".newGameBtn").addEventListener("click", startNewGame);
document.querySelector(".btnRoll").addEventListener("click", rollDice);
document.querySelector(".btnHold").addEventListener("click", holdDice);