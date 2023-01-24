## Pseudocode

1. Create questions for the quiz in the questions.js

2. Target the areas in the HTML file that we interacting with

3. Create the variables that we need for the game
    a. we need a variable to store userChoice to compare against the correct answer
    b. we need a variable for the actual score to compare against the one that is stored in the localStorage (if it is greater than record it, otherwise ignore it)
    c. we need a boolean value to check if we are at the end of the game -> if the user answered all the questions or the time run out
    d. we need a timer variable to track the time and deduct 10 secs if the user answers incorrectly

4. Create a function to start the game -> click Start quiz button and hide and the Start screen and set the timer to show 70, initialize the timerCount

5. Create an event listener for the Start button which will call startGame and showQuestions

5. Create a function called startCounting which will set the timer to 70 seconds once we start the game and deduct 10 secs if the user answers incorrectly

6. Create a function called showQuestions which will display the question text and the answer options, take the user input and compare it against the correct answer and if the answer is right play the right sound and if the answer is wrong play the wrong sound

7. Create a function called showNextQuestion which will fetch the next question

8. Create a function that will pick a random element from the questions 