//Initializing variables
let playerSelection;
let computerSelection;

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

//This function calcuates the results of the round
let playRound = function(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    if (playerSelection==computerSelection){
        console.log("It is a tie.");
    } else if (playerSelection=="rock"){
        if (computerSelection=="paper")
        {
            console.log("You lose, paper beats rock.");
        } else if (computerSelection=="scissors")
        {
            console.log("You win, rock beats scissors.");
        } else {
            console.log ("Something went wrong!");
        }
    } else if (playerSelection=="paper"){
        if (computerSelection=="rock"){
            console.log("You win, paper beats rock.");
        }
        if (computerSelection=="scissors"){
            console.log("You lose, scissors beats paper.")
        } else {
            console.log ("Something went wrong!");
        }
    } else if (playerSelection=="scissors"){
        if (computerSelection=="rock"){
            console.log("You lose, rock beats scissors.")
        }
        if (computerSelection=="paper"){
            console.log("You win, scissors beats paper.")
        } else {
            console.log ("Something went wrong!");
        }
    }
}