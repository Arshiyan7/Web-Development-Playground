console.log('Code Running OK!');

console.log('Question no 1');
function greet(name = "Guest!") {
    console.log(`Hello ${name}!`);
}
greet("Arsh") // Try calling function without passing parameter

console.log('\nQuestion no 2');

square = function (a) {
    console.log(`Squre of ${a} is ${a * a}`);
}
number = Math.floor(Math.random() * 10)
square(number)

console.log('\nQuestion no 3');

multiply = ((a, b = 2) => {
    console.log(`${a}*${b} = ${a * b}`);
})
multiply(2, 3)

console.log('Clousre Function');
console.log('Question no 1: ');

function outer() {
    let count = 0

    function counter() {
        count++
        console.log(count);
    }
    return counter
}

const myCounter = outer()
myCounter()
myCounter()
myCounter()

console.log('\nQuestion no 2');

function CreateCounter() {
    let count = 0

    function increment() {
        count++
        console.log(count);
    }
    function reset() {
        count = 0
        console.log("Count set back to 0")
    }
    return {
        increment,
        reset
    }
}


const counter = CreateCounter()
counter.increment();
counter.increment();
counter.reset();
counter.increment();

console.log('\nQuestion no 3');

function messageLogger(msg){
    function greetLogger(){
        console.log(msg)
    }
    return greetLogger
}

const greetLogger = messageLogger("Welcome, Arshiyan!");
greetLogger(); 
greetLogger(); 


console.log('\nQuestion no 4');

function messageLogger2(msg){
    function warn(){
        console.log(msg);
    }
    function success(){
        console.log(msg);
    }
    return{
        warn,
        success
    }
}

const warnLogger = messageLogger2("Warning: Low Battery!");
const successLogger = messageLogger2("Success! Task completed.");

warnLogger.warn();    // Warning: Low Battery!
successLogger.success(); // Success! Task completed.



