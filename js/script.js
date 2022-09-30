var scores, activeScore, playerActive, dice;

scores = [0,0];
activeScore = 0;
playerActive = 1;

dice = Math.floor(Math.random() * 6) + 1;


document.querySelector("#current-" + playerActive).textContent = dice;