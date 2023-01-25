// Selecting HTML elements that we are interacting with
const time = document.querySelector("#time");
const startScreen = document.querySelector("#start-screen");
const startButton = document.querySelector("#start");
const questionsScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const initials = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");
const scores = document.querySelector("#scores");


// Declare the variables that we need for the program
let questionCounter = 0;
let userChoice = "";
let userScore = 0;
let isEndOfGame = false;
let timer;
let timerCount;
let currentQuestion;
let userInitials = "";

// We call this function once we click the Start button
function startGame() {
    // Hide starting screen
    startScreen.classList.add("hide");
    timerCount = 70;
    // Display the questions screen and make the questions visible
    questionsScreen.classList.remove("hide");
    startCounting();
    showQuestion();
}


function showQuestion() {
  questionCounter++;
  if (questionCounter <= 7 || timerCount > 0) {
    currentQuestion = pickRandomQuestion();
    questionTitle.textContent = currentQuestion.question;
    // Dinamically create the buttons and load the questions
    for (let i = 0; i<currentQuestion.answers.length; i++) {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = currentQuestion.answers[i];
    choices.appendChild(choiceButton);
    choiceButton.addEventListener("click", selectAnswer);
    }
  } else {
    callEndScreen();
  }
}


function selectAnswer(event) {
  const selectedBtn = event.target;
  userChoice = selectedBtn.textContent;
  console.log(userChoice);
  if (userChoice === currentQuestion.correct) {
    userScore++;
    displayFeedback(true);
    playVoices(true);
  } else {
    displayFeedback(false);
    playVoices(false);
  }
  reset();
}

function displayFeedback(isCorrect) {
  feedback.classList.remove("hide");
  if (isCorrect) {
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = "Wrong!";
  }
}

function playVoices(isCorrect) {
  if (isCorrect) {
    let correct = new Audio("./assets/sfx/correct.wav");
    correct.play();
  } else {
    let wrong = new Audio("./assets/sfx/incorrect.wav");
    wrong.play();
    timerCount = timerCount - 10;
  }
}

function pickRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

function reset() {
  if (!feedback.classList.contains("hide")) {
    feedback.classList.add("hide");
  }
  questionTitle.textContent = "";
  while (choices.firstChild) {
    choices.removeChild(choices.firstChild);
  }
  showQuestion();
}

function startCounting() {
    // Sets timer to the timerCount variable
    timer = setInterval(function() {
      timerCount--;
      time.textContent = timerCount;
      // Tests if time has run out
      if (timerCount === 0 || questionCounter > 7) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
}

function callEndScreen() {
  time.textContent = timerCount;
  endScreen.classList.remove("hide");
  finalScore.textContent = userScore;
}

function saveScore() {
  userInitials = initials.textContent;
  localStorage.setItem("userInitials", JSON.stringify(userInitials));
  localStorage.setItem("userScore", JSON.stringify(userScore));
}

// Add event listeners to the buttons
startButton.addEventListener("click", startGame);
submitButton.addEventListener("submit", saveScore);