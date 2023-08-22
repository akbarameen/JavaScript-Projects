'use strict';
// getting values
let bodyBackgroundColor = document.querySelector('body');
let userScore = document.querySelector('.score');
let displaySecretNumber = document.querySelector('.number');
let inputGuess = document.querySelector('.guess');
let showMessage = document.querySelector('.message');
let userHighScore = document.querySelector('.highscore');
// const secretNumber = Math.floor(Math.random() * 20) + 1;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

const displayMessage = function (message) {
  showMessage.textContent = message;
};

//
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(inputGuess.value);
  // when there is no guess
  if (!guess) {
    displayMessage('⛔ No Number');
    // when the guess is correct
  } else if (guess == secretNumber) {
    displayMessage('✅ Correct Number');
    bodyBackgroundColor.style.backgroundColor = '#60b347';
    displaySecretNumber.textContent = secretNumber;
    displaySecretNumber.style.width = '30rem';

    if (score > hightScore) {
      hightScore = score;
      userHighScore.textContent = hightScore;
    }
    // when the guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High ' : '📉 Too Low');
      score--;
      userScore.textContent = score;
    } else {
      displayMessage('🔥 You lost the game!');
      score--;
      userScore.textContent = 0;
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  userScore.textContent = score;
  bodyBackgroundColor.style.backgroundColor = '#222';
  displaySecretNumber.textContent = '?';
  displaySecretNumber.style.width = '15rem';
  inputGuess.value = '';
});
