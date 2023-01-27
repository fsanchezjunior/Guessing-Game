const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


secretNumber = 5;
 
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

        if (checkGuess(Number(num)) === true) {
            console.log("You win!");
            rl.close();
        } else {
            askGuess();
        }
    });
}

askGuess();