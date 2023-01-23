// Selecting HTML elements that we are interacting with
const time = document.querySelector("#time");
const wrapper = document.querySelector(".wrapper");
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

// Create the choice buttons
const firstAnswer = document.createElement("button");
const secondAnswer = document.createElement("button");
const thirdAnswer = document.createElement("button");
const fourthAnswer = document.createElement("button");


// Add them to the questions div
choices.appendChild(firstAnswer);
choices.appendChild(secondAnswer);
choices.appendChild(thirdAnswer);
choices.appendChild(fourthAnswer);

// declare the variables that we need for the program
let questionCounter = 0;
let userChoice = "";
let actualScore = 0;
let isEndOfGame = false;
let timer;
let timerCount;

function startGame() {
    startScreen.classList.add("hide");
    timerCount = 70;
    startCounting();
    showQuestion();
}

function showQuestion() {
    questionsScreen.classList.remove("hide");
    let currentQuestion = pickRandomQuestion();
    questionTitle.textContent = currentQuestion.question;
    firstAnswer.textContent = currentQuestion.answers[0];
    secondAnswer.textContent = currentQuestion.answers[1];
    thirdAnswer.textContent = currentQuestion.answers[2];
    fourthAnswer.textContent = currentQuestion.answers[3];
}

function showNextQuestion() {

}

function pickRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}

function startCounting() {
    // Sets timer to the timerCount variable
    timer = setInterval(function() {
      timerCount--;
      time.textContent = timerCount;
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
      }
    }, 1000);
  }
