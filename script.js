let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const playGame = (userChoice) => {
  // console.log(userChoice);
  const compChoice = genCompChoice();
  // console.log(compChoice);
  if (userChoice === compChoice) {
    // console.log("draw");
    // message.innerText = "Game was Draw. Play again....!";
    // message.style.backgroundColor = "#081b31";
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("winn");
    userScore++;
    userScorePara.innerText = userScore;
    message.innerText = `You Win...! Your ${userChoice} beats ${compChoice}.`;
    message.style.backgroundColor = "green";
    // message.innerHTML = "<p id='msg'style='background-color: green;'>You Win...!</p>";
  } else {
    // console.log("lost");
    compScore++;
    compScorePara.innerText = compScore;
    message.innerText = `You Lost...! ${userChoice} beats your ${compChoice}.`;
    message.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  // console.log("draw2");
  message.innerText = "Game was Draw. Play again....!";
  message.style.backgroundColor = "#081b31";
};
const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
