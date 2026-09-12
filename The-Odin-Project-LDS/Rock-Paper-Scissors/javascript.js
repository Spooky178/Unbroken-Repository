function getComputerChoice(){
    let x = Math.floor(Math.random() * 3) + 1 ;
    let choice = "";
    if (x === 1){
        choice = "rock";
    } else if (x === 2){
        choice = "paper";
    } else if (x === 3){
        choice = "scissors";
    }
    return choice; 
}

// function getHumanChoice(){
//     let playerChoice = document.querySelectorAll(".choice button");
//     playerChoice.forEach((button) => {
//         button.addEventListener("click", () => {
//             let choice = button.id;
//             playRound(convertChoice(choice), convertChoice(getComputerChoice()));
//         });


//         return choice.toLowerCase();
// }

function convertChoice(choice){
    if (choice === "rock"){
        return +1;
    } else if (choice === "paper"){
        return +2;
    } else if (choice === "scissors"){
        return +3;
    }
}
//Creating all the divs and buttons in the html that the js will use
function createChoiceUI(){  
    let choiceDiv = document.createElement("div");
    choiceDiv.setAttribute("class", "container choice");
    let rockButton = document.createElement("button");
    rockButton.setAttribute("id", "rock");
    let paperButton = document.createElement("button");
    paperButton.setAttribute("id", "paper");
    let scissorsButton = document.createElement("button");
    scissorsButton.setAttribute("id", "scissors");

    rockButton.textContent = "Rock";
    paperButton.textContent = "Paper";
    scissorsButton.textContent = "Scissors";

    choiceDiv.appendChild(rockButton);
    choiceDiv.appendChild(paperButton);
    choiceDiv.appendChild(scissorsButton);
    document.body.appendChild(choiceDiv);
}

function createScoreUI(){
    let scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("class", "container score");
    let playerScore = document.createElement("p");
    playerScore.setAttribute("id", "playerScore");
    let computerScore = document.createElement("p");
    computerScore.setAttribute("id", "computerScore");
    playerScore.textContent = `Player Score: 0`;
    computerScore.textContent = `Computer Score: 0`;
    scoreDiv.appendChild(playerScore);
    scoreDiv.appendChild(computerScore);
    document.body.appendChild(scoreDiv);
}

function createResultUI(){
    let resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "container result");
    let resultMessage = document.createElement("p");
    resultMessage.setAttribute("id", "result-message");
    resultDiv.appendChild(resultMessage);

    let outerDisplayDiv = document.createElement("div");
    outerDisplayDiv.setAttribute("class", "container display");
    outerDisplayDiv.appendChild(resultDiv);
    document.body.appendChild(outerDisplayDiv);
}
createChoiceUI();
createScoreUI();
createResultUI();
// let resultDiv = document.createElement("div .container .result"); does not work

// -----------GLOBAL VARIABLES----------------//
let humanScore = 0;
let computerScore = 0;

//event listener for buttons and call playround function
let playerChoice = document.querySelectorAll(".choice button");
    playerChoice.forEach((button) => {
         console.log(button.id);
        button.addEventListener("click", () => {
            console.log(button.id);
            let choice = button.id;
            playRound(convertChoice(choice), convertChoice(getComputerChoice()));
        });
    })




function playRound(humanChoice, computerChoice){
    let winnerLabel;    
    let messageLabel;
    let humanComputerFraction = (humanChoice / computerChoice);
    let resultMessage = document.querySelector("#result-message");
    

    // deciding winner
    if (humanComputerFraction === 1){
        winnerLabel = `It's a tie!`;
        resultMessage.style.color = "black";
        
    }   else if (humanComputerFraction === (1/3) || 
        humanComputerFraction === (3/2) || 
        humanComputerFraction === (2/1)){

        winnerLabel = `You win!`
        humanScore += 1
        resultMessage.style.color = "green";
    }   else{
        winnerLabel = `You lose!`;
        computerScore += 1
        resultMessage.style.color = "red";
    }
    // chosing appropriate x beats y message
    if (humanComputerFraction === 3/2 || 
        humanComputerFraction === 2/3 ){
        messageLabel = `Scissors beats Paper` ;
    }   else if(humanComputerFraction === 2/1|| 
        humanComputerFraction === 1/2){
        messageLabel = `Paper beats Rock`;
    }   else if(humanComputerFraction === 1/3 || 
        humanComputerFraction === 3){
        messageLabel = `Rock beats Scissors`;
    }   else{
        messageLabel = `No points awarded`;
    }

    // Update the result message and scores in the UI
    resultMessage.textContent = `${winnerLabel} ${messageLabel}`;
    let playerScore = document.querySelector("#playerScore");
    let computerScoreLabel = document.querySelector("#computerScore");
    playerScore.textContent = `Player Score: ${humanScore}`;
    computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
    
    // display final message if score is 5
    if(humanScore === 5){
        resultMessage.textContent = `You win the game! Final Score: YOU ${humanScore}      CPU ${computerScore}`;
    } else if(computerScore === 5){
        resultMessage.textContent = `You lose the game! Final Score: YOU ${humanScore}      CPU ${computerScore}`;
    }
}

// function playGame(){
//     for(let i=0 ; i < 5; i++){
//         let computerChoice = convertChoice(getComputerChoice());
//         console.log(computerChoice);
//         let humanChoice = convertChoice(getHumanChoice());
//         playRound(humanChoice, computerChoice)
//     }
//     let finalMessage = `Final Score: YOU ${humanScore}      CPU ${computerScore}`;
//     if (humanScore > computerScore){
//         alert(`You win the game! ${finalMessage}`);
//     } else if (humanScore < computerScore){
//         alert(`You lose the game! ${finalMessage}`);
//     } else{
//         alert(`It's a tie! ${finalMessage}`);
//     }
// }

// playGame();
