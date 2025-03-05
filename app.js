let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreNum = document.querySelector("#user-score");
const compScoreNum = document.querySelector("#comp-score");

let gencomChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInx = Math.floor(Math.random(options) * 3);
    return options[randInx];

}

let drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Draw. Play again";
}

let ShowWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScoreNum.innerText = userScore;
        msg.innerText = `you Win! Your ${userChoice} Beats ${comChoice}`;
        msg.style.background = "green";

    } else {
        compScore++;
        compScoreNum.innerText = compScore;
        msg.innerText = `You lose. ${comChoice} Beats Your ${userChoice}`;
        msg.style.background = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice :", userChoice);
    const comChoice = gencomChoice();
    console.log("computer choice :", comChoice);

    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //paper or scissor
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock or scissor
            userWin = comChoice === "scissor" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        ShowWinner(userWin, userChoice, comChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});