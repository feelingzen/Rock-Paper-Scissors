let pWin = 0;
let cWin = 0;

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

function playRound(playerSelection, computerSelection) {
    let pInput = playerSelection;
    let cInput = computerSelection;

    if (pInput == cInput) {
        return console.log(`You drew, ${pInput} is equal to ${cInput}`);
    } else if (pInput == 'rock' && cInput =='paper' || pInput == 'paper' && cInput == 'scissors' || pInput == 'scissors' && cInput == 'rock') {
        return console.log(`You lost, ${cInput} defeated ${pInput}!`), cWin++;
    } else if (pInput == 'paper' && cInput =='rock' || pInput == 'scissors' && cInput == 'paper' || pInput == 'rock' && cInput == 'scissors') {
        return console.log(`You won! ${pInput} dominated ${cInput}`), pWin++;
    } else {
        return 'That is not an option!';
    }
}
   
function game() {
    let n = 0;

    while (n !== 5) {
        n++
        playerSelection = prompt('Pick one of these objects: Rock, paper and scissors.').toLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection)
    }

    if (cWin > pWin) {
        console.log(`You lost to your opponent ${cWin} games out of 5!`)
    } else if (pWin > cWin) {
        console.log(`You won! You beat your opponent in ${pWin} games out of 5`)
    } else {
        console.log(`You drew!`)
    }
}
game()