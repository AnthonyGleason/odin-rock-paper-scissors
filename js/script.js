//Initializing variables
let playerSelection;
let playerScore=0;
let computerSelection;
let computerScore=0;
let roundResults;
let roundCounter=0;
let gameWinner=0;
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
/* This function computerPlay generates the computer choice for the round.
A random number between the numbers 1-3 is generated and then rock, paper or
scisscors is assigned and returned.*/

let computerPlay = function() {
    let generatedNumber = Math.floor(Math.random()*3+1);
    switch (generatedNumber){
        case 1:
            computerSelection="rock";
            break;
        case 2:
            computerSelection="paper";
            break;
        case 3:
            computerSelection="scissors";
            break;
    }
 return computerSelection;
}

//This function calculates the results of the round
let playRound = function(playerSelection, computerSelection) {
    //playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        roundResults="Tie";
    } else if (playerSelection=="rock"){
        if (computerSelection=="paper")
        {
            roundResults="Lose";
        } else if (computerSelection=="scissors")
        {
            roundResults="Win";
        } else {
            roundResults="Error";
        }
    } else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            roundResults="Win";
        } else if (computerSelection=="scissors"){
            roundResults="Lose";
        } else {
            roundResults="Error";
        }
    } else if (playerSelection=="scissors"){
        if (computerSelection=="rock"){
            roundResults="Lose";
        }else if (computerSelection=="paper"){
            roundResults="Win";
        } else {
            roundResults="Error";
        }
    }
    resultsDiv.textContent = roundResults;
}

//Track game score
let trackScore = function(){
    if (roundResults=="Win"){
        playerScore++;
    } else if (roundResults=="Lose"){
        computerScore++;
    }
}

//Calculate game winner
let calculateGameWinner = function(){
    if (playerScore>computerScore){
        gameWinner="Player";
        return gameWinner;
    } else if (playerScore<computerScore){
        gameWinner="Computer";
        return gameWinner;
    }
}

//Start a five round game
let game = function(playerSelection){
    computerSelection=computerPlay();
    playRound(playerSelection, computerSelection);
    roundCounter++;
    if (roundResults=="Tie" || roundResults=="Error"){
        roundCounter--;
    } else{
    trackScore(roundResults);
    }
    scoreDiv.textContent=("The score is Player: "+playerScore+" Computer: "+ computerScore);
    gameWinner=calculateGameWinner();
    if (roundCounter==5){
        scoreDiv.textContent=gameWinner+" wins the game";
        roundCounter=0;
        playerScore=0;
        computerScore=0;
    }
}

//Start game and log results of game

let startGame = function (){
    /*Sets player and computer scores to 0 so the player
    can start a new game*/
    const btnRock = document.querySelector("#btnRock");
    const btnPaper = document.querySelector("#btnPaper");
    const btnScissors = document.querySelector("#btnScissors");
    btnRock.addEventListener('click', () => {
        game("rock");
        });
    btnPaper.addEventListener('click', () => {
        game("paper");
        });
    btnScissors.addEventListener('click', () => {
        game("scissors");
        });
}

startGame();

