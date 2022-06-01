//Initializing variables
let playerSelection;
let playerScore=0;
let computerSelection;
let computerScore=0;
let roundResults;
let gameWinner=0;

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
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        roundResults="tie";
    } else if (playerSelection=="rock"){
        if (computerSelection=="paper")
        {
            roundResults="lose";
        } else if (computerSelection=="scissors")
        {
            roundResults="win";
        } else {
            roundResults="error";
        }
    } else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            roundResults="win";
        } else if (computerSelection=="scissors"){
            roundResults="lose";
        } else {
            roundResults="error";
        }
    } else if (playerSelection=="scissors"){
        if (computerSelection=="rock"){
            roundResults="lose";
        }else if (computerSelection=="paper"){
            roundResults="win";
        } else {
            roundResults="error";
        }
    }
    return roundResults;
}

//Track game score
let trackScore = function(){
    if (roundResults=="win"){
        playerScore++;
    } else if (roundResults=="lose"){
        computerScore++;
    }
}

//Calculate game winner
let calculateGameWinner = function(){
    if (playerScore>computerScore){
        gameWinner="player";
        return gameWinner;
    } else if (playerScore<computerScore){
        gameWinner="computer";
        return gameWinner;
    }
}

//Start a five round game
let game = function(){
    /*Sets player and computer scores to 0 so the player
    can start a new game*/
    playerScore=0;
    computerScore=0;
    for (let i=0;i<5;i++){
        playerSelection=prompt("Please enter a choice (rock, paper, or scissors)");
        computerSelection=computerPlay();
        roundResults=playRound(playerSelection,computerSelection);
        if (roundResults=="tie" || roundResults=="error"){
            i--;
        } else{
        trackScore(roundResults);
        }
    }
    gameWinner=calculateGameWinner();
}

//Start game and log results of game
game();
console.log("The game winner is",gameWinner);
console.log("The final score is player:", playerScore,"computer:", computerScore);