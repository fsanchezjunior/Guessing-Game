const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNumber;
let numAttempts;
 
function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low");
        return false;
    } else if (num === secretNumber) {
        console.log("Correct!");
        return true;
    }
}

function askGuess() {
    rl.question("Enter a guess: ", num => {
        numAttempts--;

        if (checkGuess(Number(num)) === true) {
            console.log("You win!");
            rl.close();
        } else if (numAttempts === 0) {
            console.log("You lose!");
            rl.close();
        } else {
            askGuess();
        }
    });
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function askRange() {
    rl.question("Enter a min number: ", min => {
        rl.question("Enter a max number: ", max => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            secretNumber = randomInRange(Number(min), Number(max));

            askGuess();
        });
    });
}

function askLimit() {
    rl.question("How many attempts do you want? ", attempts => {
        numAttempts = attempts;
        askRange();
    })
}

askLimit();