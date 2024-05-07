let choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const usCho = choice.getAttribute("id");
        const genChoice = comChoice();
        console.log("User Choice: " + usCho);
        console.log("Computer Choice: " + genChoice);
        playGame(usCho, genChoice);
    });
});

const comChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * options.length);
    return options[ranIdx];
}

const drawGame = () => {
    let cmnt = document.querySelector(".comment");
    cmnt.innerText = "The Game was DRAW";
}

const winGame = () => {
    let cmnt = document.querySelector(".comment");
    cmnt.innerText = "You win!";
    updateScores("urScore");
}

const loseGame = () => {
    let cmnt = document.querySelector(".comment");
    cmnt.innerText = "You lose!";
    updateScores("comScore");
}

const updateScores = (scoreElement) => {
    let score = document.querySelector("." + scoreElement);
    let currentScore = parseInt(score.innerText);
    score.innerText = currentScore + 1;
}

const playGame = (usCho, genCho) => {
    if (usCho === genCho) {
        drawGame();
    } else if (
        (usCho === "rock" && genCho === "scissor") ||
        (usCho === "paper" && genCho === "rock") ||
        (usCho === "scissor" && genCho === "paper")
    ) {
        winGame();
    } else {
        loseGame();
    }
}
