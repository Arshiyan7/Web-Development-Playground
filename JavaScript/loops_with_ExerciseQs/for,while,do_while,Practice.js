// Note:
// The logic and implementation are originally created by the user.
// Code readability, structure, and documentation were improved with
// assistance from AI to ensure clean and professional formatting.


// Print numbers from 1 to 20 using a For loop
console.log("----- Print numbers from 1–20 using For loop -----");

for (let i = 0; i < 20; i++) {
    console.log(i + 1);
}

// Print even numbers from 2 to 20 using a While loop

console.log("\n----- Print even numbers from 2–20 using While loop -----");

let i = 2;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Print numbers backwards from 5 to 0 using a Do–While loop

console.log("\n----- Print numbers backwards from 5–0 using Do–While loop -----");

let j = 5;
do {
    console.log(j);
    j--;
} while (j >= 0);


// Print object properties using For...in loop

console.log("\n----- Print object properties using For...in loop -----");

const user = { name: "Arsh", age: 24, role: "Programmer" };

for (const key in user) {
    const value = user[key];
    console.log("Property:", key, "| Value:", value);
}


// Print greetings using For...of loop

console.log("\n----- Print greetings using For...of loop -----");

const names = ["Arsh", "Ali", "Sara"];

for (const name of names) {
    console.log("Hello,", name);
}


// Mix Loops: for...of and for...in
// Goal: Iterate through an array of user objects and print each
// property of every user in a structured format.

console.log("\n----- Mix loops to print user details -----");

const users = [
  { name: "Arsh", role: "Developer" },
  { name: "Sara", role: "Designer" },
  { name: "Ali", role: "Manager" }
];

// Outer loop: for...of → iterates over each user object in the array
for (const user of users) {
    
    // Inner loop: for...in → iterates over each property of the user object
    for (const key in user) {
        const value = user[key];
        console.log(key + ":", value);
    }

    // Print a separator line after each user for readability
    console.log("---");
}

