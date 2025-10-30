// Callback Functions Practice

// Start
console.log('Code Running, OK!!');


// ------------------------------------------------
// 1️⃣ Basic Callback Example
// Output should be:
// Hello, Alice
// Have a nice day!
// ------------------------------------------------

// Function that takes a name and a callback
function greetings(name, callback) {
  console.log('Hello,', name);
  callback(); // Call the callback function after greeting
}

// Callback function to show a friendly message
const greet = () => {
  console.log("Have a nice day!");
};

// Call the main function and pass the callback
greetings("Alice", greet);


// ------------------------------------------------
// 2️⃣ Delayed Callback Example (Asynchronous)
// Output should be shown after 2 seconds:
// 2 seconds passed!
// ------------------------------------------------

// Function that waits for a given time (in milliseconds)
// and then calls the provided callback function
function waitAndRun(callback, delay) {
  setTimeout(() => {
    callback(); // Run the callback after the delay
  }, delay);
}

// Example usage
waitAndRun(() => console.log("2 seconds passed!"), 2000);


// ------------------------------------------------
// 3️⃣ Callback with Data Example
// The function should take a number and pass it to a callback
// The callback will double it and print the result
// Expected Output:
// 10
// ------------------------------------------------

// Function that takes a callback and a number
function double(callback, num) {
  callback(num); // Pass the number to the callback
}

// Callback that doubles the number and prints it
const double_number = (a) => {
  console.log(a + a);
};

// Example usage
double(double_number, 5);
