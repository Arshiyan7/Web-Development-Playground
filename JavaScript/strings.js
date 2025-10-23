// String Practice in JavaScript

// Exercise 1: Length and Access
let word = "JavaScript";

// Find the length of the string
console.log(word.length); // 10

// Get the first and last characters
console.log(word.charAt(0), word.charAt(word.length - 1)); // J t


// Exercise 2: Case Conversion
let greeting = "hello world";

// Convert to uppercase
console.log(greeting.toUpperCase()); // HELLO WORLD

// Convert to lowercase
console.log(greeting.toLowerCase()); // hello world

// Capitalize only the first letter
let f_letter = greeting.charAt(0);
let capitalized = f_letter.toUpperCase() + greeting.slice(1);
console.log(capitalized); // Hello world


// Exercise 3: Searching
let fruit = "Banana";

// Check if it includes the letter "a"
console.log(fruit.includes("a")); // true

// Find the first and last index of "a"
console.log(fruit.indexOf("a")); // 1
console.log(fruit.lastIndexOf("a")); // 5

// Check if it starts with "Ba" and ends with "na"
console.log(fruit.startsWith("Ba"), fruit.endsWith("na")); // true true


// Exercise 4: Extracting
let str = "JavaScript is fun";

// Extract "Script" using slice
console.log(str.slice(4, 10)); // Script

// Extract "Java" using substring
console.log(str.substring(0, 4)); // Java

// Extract "fun" using negative index
console.log(str.slice(-3)); // fun


// Exercise 5: Modification
let text = "  Hello JavaScript!  ";

// Remove spaces from both ends
let trimmed = text.trim();
console.log(trimmed); // Hello JavaScript!

// Replace "JavaScript" with "World"
let replaced = trimmed.replace("JavaScript", "World");
console.log(replaced); // Hello World!

// Repeat the resulting string 2 times
console.log(replaced.repeat(2)); // Hello World!Hello World!
