let userScore = 0;
let compterScore = 0;

const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("comp_score");

const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p","s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if(letter === "r") {
        return "Rock";}
    if(letter === "p") {
        return "Paper";}
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML = compterScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
}

function lose(userChoice, computerChoice){
    compterScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compterScore;
    result_div.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You Lost!";
}


function draw(userChoice, computerChoice){
    // userScore_span.innerHTML=userScore;
    // computerScore_span.innerHTML = compterScore;
    result_div.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". Its a draw....";
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":    
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":    
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":    
        case "ss":
            draw(userChoice, computerChoice);
            break;    
    }
}
 
function main() {
    rock_div.addEventListener("click", function(){
        game("r");
    })
    
    paper_div.addEventListener("click", function(){
        game("p");
    })
    
    scissor_div.addEventListener("click", function(){
        game("s");
    })
}
main();