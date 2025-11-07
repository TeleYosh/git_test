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

function playRound(humanChoice, computerChoice, roundDiv) {
    let humanScoreRound = 0;
    let computerScoreRound = 0;
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (beats.get(humanChoice) == computerChoice) {
        roundDiv.textContent = `You win, ${humanChoice} beats ${computerChoice}`;
        humanScoreRound += 1;
    }
    else if (beats.get(computerChoice) == humanChoice) {
        roundDiv.textContent = `You lose, ${computerChoice} beats ${humanChoice}`;
        computerScoreRound += 1;
    }
    else {
        roundDiv.textContent = `It is a tie, you chose ${humanChoice}, and the computer chose ${computerChoice}`;
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
function playWithUi() {
    let humanScore = 0;
    let computerScore = 0;
    let currentWinner;
    let winnerScore;

    const resultDiv = document.querySelector('#result');
    const scoreDiv = document.querySelector('#score');
    const buttons = document.querySelectorAll('button');
    const roundDiv = document.querySelector('.round');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const computerChoice = getComputerChoice();
            const [humanScoreRound, computerScoreRound] = playRound(button.id, computerChoice, roundDiv);
            humanScore += humanScoreRound;
            computerScore += computerScoreRound;
            if (humanScore > computerScore) {
                currentWinner = 'You';
                winnerScore = humanScore;
            }
            else if (humanScore < computerScore) {
                currentWinner = 'AI';
                winnerScore = computerScore;
            }
            else {
                currentWinner = 'No one';
            }
            scoreDiv.textContent = `Humanscore: ${humanScore} | Computerscore: ${computerScore}`;
            // console.log(`humanscore: ${humanScore} computerscore: ${computerScore}`);
            // console.log(`current winner ${currentWinner}`);
            if (winnerScore == 5) {
                resultDiv.textContent = `Winner is ${currentWinner}`;
                // console.log(`Game finished, winner is ${currentWinner}`)
                buttons.forEach(b => b.disabled = true);
            };
        });
    });



}

playWithUi()

