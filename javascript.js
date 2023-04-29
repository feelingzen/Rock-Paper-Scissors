// Player and computer score, starts at 0
let pWin = 0;
let cWin = 0;

// Objects to add and objects that exist in the dom
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const playerScore = document.querySelector('#playerScore')
const opponentScore = document.querySelector('#opponentScore')
const outcomeAndScore = document.querySelector('.scoreAndOutcome')
const roundOutcome = document.querySelector('#roundOutcome p')
const restart = document.querySelector('#restart')
restart.style.cssText = 'display: none;'
playerScore.textContent = `You: ${pWin}`;
opponentScore.textContent = `Opponent: ${cWin}`;
outcomeAndScore.appendChild(roundOutcome)

function scoreUpdate() {
    playerScore.textContent = `You: ${pWin}`
    opponentScore.textContent = `Opponent: ${cWin}`
}

// Generates the computers choice
function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if(number == 0){
        return("rock");
    } else if (number == 1){
        return("paper");
    } else {
        return("scissors");
    }
}

function reset() {
    pWin = 0;
    cWin = 0;
    playerScore.textContent = `You: ${pWin}`
    opponentScore.textContent = `Opponent: ${cWin}`
    roundOutcome.textContent = ``
    button1.addEventListener('click', clickRound1);
    button2.addEventListener('click', clickRound2);
    button3.addEventListener('click', clickRound3);
}

// Writes what happens during a round
function playRound(playerSelection, computerSelection) {
    let pInput = playerSelection;
    let cInput = computerSelection;

    if (pInput == cInput) {
        roundOutcome.textContent = 'You drew!';
    } else if (pInput == 'rock' && cInput =='paper' || pInput == 'paper' && cInput == 'scissors' || pInput == 'scissors' && cInput == 'rock') {
        roundOutcome.textContent = `Your opponent picked ${cInput} and beat you!`;
        cWin++
    } else if (pInput == 'paper' && cInput =='rock' || pInput == 'scissors' && cInput == 'paper' || pInput == 'rock' && cInput == 'scissors') {
        roundOutcome.textContent = `You beat your opponent, they picked ${cInput}!`;
        pWin++
    } else {
        return 'That is not an option!';
    }
    scoreUpdate()
    if (pWin == 5 || cWin == 5) {
        button1.removeEventListener('click', clickRound1)
        button2.removeEventListener('click', clickRound2)
        button3.removeEventListener('click', clickRound3)
        if (pWin > cWin) {
            roundOutcome.textContent = 'You won, you beat your opponent 5 times!'
        } else if (cWin > pWin) {
            roundOutcome.textContent = 'You lost! Your opponent beat you 5 times!'
        }
        restart.style.cssText = 'display: initial;'
    };
    
    
}

restart.addEventListener('click', reset)
button1.addEventListener('click', clickRound1);
button2.addEventListener('click', clickRound2);
button3.addEventListener('click', clickRound3);


function clickRound1() {
    playRound('rock', getComputerChoice())
};

function clickRound2() {
    playRound('paper', getComputerChoice())
};

function clickRound3() {
    playRound('scissors', getComputerChoice())
};


