let pScore = 0;
let cScore = 0;
let winner = "";

function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    let win = false;
    if(playerSelection===computerSelection) {
        winner = "tie";
    }
    if(
        (playerSelection==="rock" && computerSelection==="scissors") ||
        (playerSelection==="paper" && computerSelection==="rock") ||
        (playerSelection==="scissors" && computerSelection==="paper")
    ) {
        winner = "player";
    } else if(
        (computerSelection==="rock" && playerSelection==="scissors") ||
        (computerSelection==="paper" && playerSelection==="rock") ||
        (computerSelection==="scissors" && playerSelection==="paper")
    ) {
        winner = "computer";
    }
}
const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);

function isGameOver() {
    return pScore === 5 || cScore === 5; 
}

function handleClick(playerSelection) {
    if(isGameOver()) {
        openEndgameModal();
        return;
    }
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    update(playerSelection, computerSelection);
    if(isGameOver()) {
        openEndgameModal();
        setFinalMessage();
    }
}

function update(psel, csel) {
    if(winner === 'tie') {
        scoreInfo.textContent = 'It\'s a tie!';
        scoreMessage.textContent = `${psel} ties with ${csel}`;
    } else if(winner === 'player') {
        scoreInfo.textContent = 'You won!';
        scoreMessage.textContent = `${psel} beats ${csel}`;
        pScore++;
        playerScore.textContent = `Player: ${pScore}`;
    } else if(winner === 'computer') {
        scoreMessage.textContent = `${psel} is beaten by ${csel}`;
        scoreInfo.textContent = 'You lost!';
        cScore++;
        computerScore.textContent = `Computer: ${cScore}`;
    }
    if(psel === 'rock') {
        playerSign.textContent = '✊';
    } else if (psel === 'paper') {
        playerSign.textContent = '✋';
    } else if (psel === 'scissors') {
        playerSign.textContent = '✌';
    }
    if(csel === 'rock') {
        computerSign.textContent = '✊';
    } else if (csel === 'paper') {
        computerSign.textContent = '✋';
    } else if (csel === 'scissors') {
        computerSign.textContent = '✌';
    }
}

function openEndgameModal() {
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndgameModal() {
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
}

function setFinalMessage() {
    return pScore > cScore 
        ? (endgameMsg.textContent = 'You won')
        : (endgameMsg.textContent = 'You lost')
}

function restartGame() {
    pScore = 0;
    cScore = 0;
    scoreInfo.textContent = 'Choose move';
    scoreMessage.textContent = 'First to 5 points wins';
    playerScore.textContent = 'Player: 0';
    computerScore.textContent = 'Computer: 0';
    playerSign.textContent = '❔';
    computerSign.textContent = '❔';
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
  }