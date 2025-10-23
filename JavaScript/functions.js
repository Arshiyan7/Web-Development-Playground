// Prints a greeting message for each name in an array
function greetings(x) {
    for (let i = 0; i < x.length; i++) {
        console.log("Hello", x[i]);
    }
}

let obj = ['Arsh', 'Umair', 'Anzar'];
greetings(obj);

// Returns the sum of two numbers, adds 2 by default if 'c' not provided
function sum(x, y, c = 2) {
    return x + y + c;
}

let a = 2;
let b = 3;
console.log("\nSum of numbers is:", sum(a, b));

// Arrow function: a shorter syntax for writing functions
// It does not have its own 'this' or 'arguments' (unlike normal functions)
const func1 = (x) => {
    console.log("\nHello my name is", x);
    console.log("Nice to meet you", x);
};

let name = "Arsh";
func1(name);
