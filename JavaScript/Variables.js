// Variable declarations
var a = 5;
var b = 10;
var c = 'Arsh';

console.log(a + b);
console.log(typeof a, typeof b, typeof c); 
// 'typeof' is used to check the data type of a variable.

// const variables cannot be reassigned once defined
// const A = 10;
// A = A + 1; // Error: Const variables cannot be changed after initialization
// console.log(A);

// Primitive Data Types
console.log('\nPrimitive Data Types');
var x = 10;
var y = 'Arsh';
var z = 10.5;
const p = true;
let q = null;
let r = undefined;

console.log(x, y, z, p, q, r);
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Objects (Key-Value Pairs)
console.log('\nKey-Value Pairs (Objects)');

let o = {
    name: 'Arsh',
    salary: '200k'
};

console.log('Before:', o);

// Updating object values
o.salary = '500k';
console.log('After:', o);