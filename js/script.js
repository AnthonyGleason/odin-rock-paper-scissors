//Initializing variables
let playerSelection;
let computerSelection;
let results;

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
        results="tie";
    } else if (playerSelection=="rock"){
        if (computerSelection=="paper")
        {
            results="lose";
        } else if (computerSelection=="scissors")
        {
            results="win";
        } else {
            results="error";
        }
    } else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            results="win";
        }
        if (computerSelection=="scissors"){
            results="lose";
        } else {
            results="error";
        }
    } else if (playerSelection=="scissors"){
        if (computerSelection=="rock"){
            results="lose";
        }
        if (computerSelection=="paper"){
            results="win";
        } else {
            results="error";
        }
    }
    return results;
}