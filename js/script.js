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
   //check winner
   if (scores["score" + playerActive] >= 10) {
      document.querySelector("#name" + playerActive).textContent = "You Won!!"
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player" + playerActive).classList.add("playerWinner");
      document.querySelector(".player" + playerActive ).classList.remove("playerActive");
   } else {
      nextPlayer();
   }

}

function startNewGame(){
   scores[0,0];
   playerActive = 0;
   activeScore = 0;
   document.querySelector(".dice").style.display = "none";
   document.getElementById("score1").textContent = 0;
 document.getElementById("current1").textContent = 0;
 document.getElementById("score2").textContent = 0;
 document.getElementById("current2").textContent = 0;
 document.getElementById("name1").textContent = "Player 1";
 document.getElementById("name2").textContent = "Player 2";
 document.querySelector(".player1").classList.remove("playerWinner");
 document.querySelector(".player2").classList.remove("playerWinner");
 document.querySelector(".player1").classList.remove("playerActive");
 document.querySelector(".player2").classList.remove("playerActive");
 document.querySelector(".player1").classList.add("playerActive");
 
 }
 
 
 document.querySelector(".newGameBtn").addEventListener("click", startNewGame);
 document.querySelector(".btnRoll").addEventListener("click", rollDice);
 document.querySelector(".btnHold").addEventListener("click", holdDice);
