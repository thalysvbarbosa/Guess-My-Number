'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1; // 'random' number between 1 and 20
let score = 20;

document.querySelector('.number').textContent = secretNumber; // for test

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) { // 'guess = 0' is equal to 'false', so '!guess' is equal to 'true'
        document.querySelector('.message').textContent = 'No number!';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!'
            score--;                                              // decrease score
            document.querySelector('.score').textContent = score; // and update the score display
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }

})