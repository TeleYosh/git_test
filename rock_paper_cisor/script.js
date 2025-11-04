// variables
const beats = new Map();
beats.set('rock', 'cisor');
beats.set('paper', 'rock');
beats.set('cisor', 'paper');

// functions
function getComputerChoice() {
    const choices = ['rock', 'paper', 'cisor'];
    const idx = Math.floor(Math.random()*choices.length);
    return choices[idx];
}

function getHumanChoice() {
    let choice = prompt('Choose either rock, paper or cisor');
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let humanScoreRound = 0;
    let computerScoreRound = 0;
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (beats.get(humanChoice) == computerChoice) {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScoreRound += 1;
    }
    else if (beats.get(computerChoice) == humanChoice) {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
        computerScoreRound += 1;
    }
    else {
        console.log(`It is a tie, you chose ${humanChoice}, and the computer chose ${computerChoice}`);
    }
    return [humanScoreRound, computerScoreRound];
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const [humanScoreRound, computerScoreRound] = playRound(humanChoice, computerChoice);
        humanScore += humanScoreRound;
        computerScore += computerScoreRound;
        console.log(`round ${i+1} current score ${humanScore} and ${computerScore}`);
    }
    let winner;
    let score;
    if (humanScore > computerScore) {
        winner = 'You';
        score = humanScore;
    }
    else if (computerScore > humanScore) {
        winner = 'Computer';
        score = computerScore;
    }
    else {
        winner = 'No one it is a tie';
        score = humanScore;
    }
    console.log(`Winner is ${winner} with a score of: ${score}`);
}

// execution
playGame();

