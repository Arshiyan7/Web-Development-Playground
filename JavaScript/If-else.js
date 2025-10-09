// Simple if-else statement example

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote."); // Executes if condition is true
} else {
  console.log("You are not eligible to vote."); // Executes if condition is false
}


// If-else ladder example
// In this case, multiple conditions are checked one by one.
// The first condition that evaluates to true will run, and
// the rest will be skipped.

let marks = 75;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 70) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}


// Nested if example (optional for better understanding)
// Here, an if statement is inside another if block.

let isMember = true;
let purchaseAmount = 1200;

if (isMember) {
  if (purchaseAmount > 1000) {
    console.log("You get a 20% discount!");
  } else {
    console.log("You get a 10% discount!");
  }
} else {
  console.log("No membership discount available.");
}
