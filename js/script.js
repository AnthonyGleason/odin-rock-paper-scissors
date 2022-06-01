/* This function computerPlay generates the computer choice for the round.
 A random number between the numbers 1-3 is generated and then rock, paper or
scisscors is assigned and returned.*/

let computerPlay = function() {
    let generatedNumber = Math.floor(Math.random()*3+1);
    switch (generatedNumber){
        case 1:
            computerChoice="rock";
            break;
        case 2:
            computerChoice="paper";
            break;
        case 3:
            computerChoice="scissors";
            break;
    }
 return computerChoice;
}