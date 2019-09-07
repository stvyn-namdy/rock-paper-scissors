let playerScore = 0;
let computerScore = 0;

/*These are DOM variables identified by the underscore
These lines of code enables us to cache the DOM, so the variable can be used later */
let playerScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerSelection() {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function resultToWord(letter) {
    if(letter === 'r') 
        return "Rock";
    if(letter === 's') 
        return " Scissors"; 
    return "Paper"; 
}
// These represent the Win, Lose and Draw functions
function playerWin(playerSelection, computerSelection) {
    const smallPlayerWord = "player".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    const playerSelection_div = document.getElementById(playerSelection);
    playerScore ++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = resultToWord(playerSelection) + (smallPlayerWord) + " trumps " + resultToWord(computerSelection) + (smallCompWord) + ". Yaay!! You Win..";
    playerSelection_div.classList.add("green-glow");
    setTimeout(() => playerSelection_div.classList.remove('green-glow'), 500);
}


function playerLose(playerSelection, computerSelection) {
    const smallPlayerWord = "player".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    const playerSelection_div = document.getElementById(playerSelection);
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = `${resultToWord(computerSelection)}${smallCompWord} beats ${resultToWord(playerSelection)}${smallPlayerWord}. You lose! Sorry..`; // ` and ${} used in ES6 instead of + and "".
    playerSelection_div.classList.add("red-glow");
    setTimeout(() => playerSelection_div.classList.remove('red-glow'), 500); //This is an ES6 execution of a function that is in 11 line
}

function draw(playerSelection, computerSelection) {
    const smallPlayerWord = "player".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    const playerSelection_div = document.getElementById(playerSelection);
    result_p.innerHTML = `${resultToWord(computerSelection)}${smallCompWord} equals ${resultToWord(playerSelection)}${smallPlayerWord}. It's a tie.. Try again..`;
    playerSelection_div.classList.add("grey-glow");
    setTimeout(() => playerSelection_div.classList.remove('grey-glow'), 500);
}

// These represent the conditional statement of the game
function game(playerSelection) {
    const computerSelection = getComputerSelection();
    switch (playerSelection + computerSelection) {
        case "rs":
        case "pr":
        case "sp":
            playerWin(playerSelection, computerSelection);
            break;
        case "rp":
        case "ps":
        case "sr":
            playerLose(playerSelection, computerSelection);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerSelection, computerSelection);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game('r');
    })
    
    paper_div.addEventListener('click', function(){
        game('p');
    })
    
    scissors_div.addEventListener('click', function(){
        game('s');
    })
}

main();


