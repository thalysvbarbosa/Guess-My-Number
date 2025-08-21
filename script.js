'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // 'random' number between 1 and 20
let score = 20;
let highscore = 0;

// document.querySelector('.number').textContent = secretNumber; // for test

// implement the game logic 
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no valid number
    if (!guess || guess < 0 || guess > 20) { // 'guess = 0' is equal to 'false', so '!guess' is equal to 'true' 
        displayMessage('No valid number!');
    }

    // when player wins
    else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber; // show the secret number
        // document.body.style.backgroundColor = '60b347';                  // both
        document.querySelector('body').style.backgroundColor = '#60b347'; // works
        document.querySelector('.number').style.width = '30rem';

        //highscore
        if (highscore < score) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too low or too high
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!')
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#e42929ff';
            document.querySelector('.number').textContent = secretNumber;
        }
    }

})

// implement the reset game logic
document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}