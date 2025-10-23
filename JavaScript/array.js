// Basic Array Access

const colors = ["red", "green", "blue", "yellow"];

// Print first element, last element, and array length
console.log(`first color: ${colors[0]}`);
console.log(`last color: ${colors[colors.length - 1]}`);
console.log(`length of array: ${colors.length}`);


// Adding & Removing Elements

let fruits = ["apple", "banana"];

// Add new elements
fruits.push("cherry");   // add to end
fruits.unshift("mango"); // add to start
console.log("\nAfter adding:", fruits);

// Remove last element
fruits.pop();
console.log("After removing last:", fruits);


// Slice vs Splice

let animals = ["cat", "dog", "elephant", "tiger", "lion"];

// slice() → returns a new array (non-mutating)
const wild = animals.slice(-2); // last two animals
console.log("\nWild animals:", wild);

// splice() → modifies the original array (mutating)
animals.splice(1, 2); // remove 'dog' and 'elephant'
console.log("Remaining animals:", animals);


// Combine Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concat() → merges arrays and returns a new one
const combined = arr1.concat(arr2);
console.log("\nCombined array:", combined);


// Checking Elements
const names = ["Ali", "Sara", "Zain", "Fatima"];

// includes() → checks if value exists
console.log("\nContains 'Sara'? ->", names.includes("Sara"));

// indexOf() → finds the position of an element
console.log("Index of 'Zain':", names.indexOf("Zain"));


// Looping with forEach

const numbers = [2, 4, 6, 8, 10];

// Divide each number by 2 and print result
console.log("\nNumbers / 2:")
numbers.forEach(num => {
  console.log(num / 2);
})

const nums = [2, 4, 6, 8, 10];
const total = nums.reduce((acc, curr)=> acc + curr,0)
console.log("\n",total)

const nums_2 = [1, 2, 3, 4];
const product = nums_2.reduce((acc,curr) => acc*curr,1)
console.log(product)

