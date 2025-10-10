// Basic variable declaration
let a = 1;

// Printing values manually (inefficient method)
console.log("Manual printing of values:");
console.log(a);
console.log(a + 1);
console.log(a + 2);

// Using Loops to simplify repetitive tasks

// FOR LOOP: Used for iterating a fixed number of times
console.log("\n--- For Loop: Printing numbers from 1 to 100 ---");
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

// FOR...IN LOOP: Used to iterate over object properties

let obj = {
    Name: "Arsh",
    Role: "Programmer",
    Company: "Code with Arsh AI"
};

console.log("\n--- For...in Loop: Iterating over object properties ---");
for (const key in obj) {
    const value = obj[key];
    console.log(key, ":", value);
}

// FOR...OF LOOP: Used to iterate over iterable objects (arrays, strings, etc.)

let name = 'Arsh';
console.log("\n--- For...of Loop: Iterating over each character of a string ---");
for (const char of name) {
    console.log(char);
}

// WHILE LOOP: Runs until a specific condition becomes false

let v = 10;
console.log("\n--- While Loop: Counting down from 10 to 1 ---");
while (v !== 0) {
    console.log(v);
    v--;
}

// DO...WHILE LOOP: Executes at least once before checking the condition

let z = 10;
console.log("\n--- Do...While Loop: Executes once before checking the condition ---");
do {
    console.log(z);
    z++;
} while (z < 5);
