var scores, activeScore, playerActive, dice;

scores = [0,0];
activeScore = 0;
playerActive = 0;

dice = Math.floor(Math.random() * 6) + 1;


document.querySelector('#current-' + playerActive).innerHTML = dice;