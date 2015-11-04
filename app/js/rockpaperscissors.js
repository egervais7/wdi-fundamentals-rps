////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit  */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if ((move=='rock')||(move=='paper')||(move=='scissors')) {
        return move;
    }
    else {
    return getInput();
    }
}

function getComputerMove(move) {
    if ((move=='rock')||(move=='paper')||(move=='scissors')) {
        return move;
    }
    else {
    return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
    winner = 'tie';
    }
    else if ((playerMove=='rock' && computerMove=='scissors')||(playerMove=='paper' && computerMove=='rock')||(playerMove=='scissors' && computerMove=='paper')) {
    winner = 'player';
    }
    else {
    winner = 'computer';
}
 return winner ;
}
    
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    if (getWinner(playerMove, computerMove) === 'player') {
    playerWins = playerWins += 1;
    }
    else if (getWinner(playerMove, computerMove) === 'computer') {
    computerWins = computerWins += 1;
    }
    else if (getWinner(playerMove, computerMove) === 'tie') {
    playerWins = playerWins + 0;
    computerWins = computerWins + 0;
    }
    console.log("Player chose" + playerMove + "and Computer chose" + computerMove);
    console.log("The score is currently player" + playerWins + "to computer" + computerWins);
    return [playerWins, computerWins];
}
}
