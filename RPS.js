
const winnerText = document.querySelector("h1")
let buttons = document.getElementsByClassName("game-button"); let i;
let botScore = 0; let playerScore = 0;
const playerImg = document.getElementById("player-choose");
const botImg = document.getElementById("bot-choose");
const timerDisplay = document.getElementById("timer"); let time;

document.getElementById("player-wins").innerHTML = playerScore;
document.getElementById("bot-wins").innerHTML = botScore;


function play(selected){
    time = 5
    
    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    let botSelected
    
    botSelected = Math.floor(Math.random() * 3) + 1;

    switch (botSelected){
        case 1:
            botImg.src = "srcs/Rock.png"
            break;
        case 2:
            botImg.src = "srcs/Paper.png"
            break;
        case 3:
            botImg.src = "srcs/Scissors.png"
            break;
    }
    
    switch (selected){
        case 1:
            playerImg.src = "srcs/Rock.png"
            if(botSelected==1){
                winnerText.innerHTML = 'Draw!'
            }else if(botSelected==2){
                winnerText.innerHTML = 'Bot win!'
                botScore++;
            }else{
                winnerText.innerHTML = 'Player win!'
                playerScore++;
            }
        break;

        case 2:
            playerImg.src = "srcs/Paper.png"
            if(botSelected==1){
                winnerText.innerHTML = 'Player win!'
                playerScore++;
            }else if(botSelected==2){
                winnerText.innerHTML = 'Draw!'
            }else{
                winnerText.innerHTML = 'Bot win!'
                botScore++;
            }
        break;

        case 3:
            playerImg.src = "srcs/Scissors.png"
            if(botSelected==1){
                winnerText.innerHTML = 'Bot win!'
                botScore++;
            }else if(botSelected==2){
                winnerText.innerHTML = 'Player win!'
                playerScore++;
            }else{
                winnerText.innerHTML = 'Draw!'
            }
        break;
    }

    document.getElementById("player-wins").innerHTML = playerScore;
    document.getElementById("bot-wins").innerHTML = botScore;

    counter(-1)
    setTimeout(() => {  counter(-1) }, 1000)
    setTimeout(() => {  counter(-1) }, 2000)
    setTimeout(() => {  counter(-1) }, 3000)
    setTimeout(() => {  counter(-1) }, 4000)
    setTimeout(() => {  reset() }, 5000)
}

function counter(add){
    timerDisplay.innerHTML = 'Next round in ' + time + 's!'
    time += add
}

function reset(){
    document.getElementById("player-wins").innerHTML = playerScore;
    document.getElementById("bot-wins").innerHTML = botScore;
    botImg.src = playerImg.src = "srcs/None.png"
    winnerText.innerHTML = timerDisplay.innerHTML = ''
    for (i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }

}
