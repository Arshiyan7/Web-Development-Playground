const prompt = require("prompt-sync")();
function faultyCalculator(num1, num2, operator) {
  let randomValue = Math.random() * 100;

  let correctAnswer;
  let finalAnswer;

  // normal calculation
  if (operator == '+') {
    correctAnswer = num1 + num2;
  } else if (operator == '-') {
    correctAnswer = num1 - num2;
  } else if (operator == '*') {
    correctAnswer = num1 * num2;
  } else if (operator == '/') {
    correctAnswer = num1 / num2;
  } else {
    console.log("Invalid operator!");
    return;
  }

  // wrong calculation, if random value < 10 make wrong calculations
  if (randomValue < 10) {
    finalAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5;
    console.log("Faulty Answer (wrong on purpose): " + finalAnswer);
  } else {
    console.log("Correct Answer: " + correctAnswer);
  }
}

const number_1 = Number(prompt("Enter number 1: "));
const number_2 = Number(prompt("Enter number 2: "));
const op = prompt("Select operation to perform (* / - +): ");

faultyCalculator(number_1, number_2, op);
