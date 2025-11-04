console.log("Code Running, OK!!")

console.log('\n\n----------------------------------------------------Conditionals Practice--------------------------------------------------------------');

console.log('Question no 1');
let r_num = Math.floor(Math.random()*3)

if (r_num > 2) {
    console.log('Positive');
}
else if (r_num<2) {
    console.log('Negative');
}
else if (r_num == 0) {
    console.log("Zero");
}

console.log('\n\nQuestion no 2');

let age = Math.floor(Math.random()*20)
console.log(age);

if (age < 13){
    console.log("Child");
}
else if (age >= 13 && age <= 19){
    console.log('Teenager');
}
else{
    console.log('Adult');
}

console.log('\n\nQuestion no 3');
let number = Math.floor(Math.random()*20)
console.log(number);

if (number%2==0) {
    console.log('Even');
}
else{
    console.log('Odd');
}

console.log('\n\nQuestion no 4');
let a = Math.floor(Math.random()*20)
let b = Math.floor(Math.random()*20)
let c = Math.floor(Math.random()*20)
console.log('numbers generated: ',a , b , c);


if (a > b && a > c) console.log("a =", a, "is greatest");
else if (b > a && b > c) console.log("b =", b, "is greatest");
else console.log("c =", c, "is greatest");


console.log('\n\nQuestion no 5');
let leap = 2001;

if (leap % 400 == 0) {
    console.log(leap, 'is a leap year');
}
else if (leap % 4 == 0 && leap % 100 != 0) {
    console.log(leap, 'is a leap year');
}
else {
    console.log(leap, 'is not a leap year');
}
console.log('\n\n----------------------------------------------------Loops Practice--------------------------------------------------------------');

console.log('Question 1');

let sum = 0
for (let i = 1; i <= 20; i++) {
    if (i%2==0) {
        sum+=i
    }    
}
console.log(sum);

console.log('\n\nQuestion 2');
let fact = 5
let i=1
let result = 1 
while(i<=fact){
    result = result * i
    i++
} 
console.log('Factorial for',fact,"is",result);

console.log('Launch countdown!');
console.log('\n\nQuestion no 3');
for (let i = 10; i >=0 ; i--) {
    console.log('\n',i);
}
console.log('Ignition🚀!!!');

console.log('\n\nQuestion no 4');
let num = 7
console.log('\nTable of 7');
for (let i = 0; i <=10; i++) {
    console.log(`${num} x ${i}= ${num*i}`);
}

console.log('\n\nQuestion no 5');


for (let i = 1; i <= 5; i++) {
    let row = ''
   for (let j = 1; j <=i; j++) {
    row += "*"
    }
    console.log(row);
}

console.log('\n\n----------------------------------------------------Loops Practice (2)--------------------------------------------------------------');

console.log('Question no 1');

let x = 1
let y = 0
while (x <= 5) {
    let row2 = ''
    y=0
    while (y < x) {
        row2 += "*"
        y++
    }
    console.log(row2);
    x++ 
}

console.log('\n\nQuestion no 2');
let k = 5
let z = 0
while (k >= 0) {
    let row3 = ''
    z=0
    while (z < k) {
        row3 += "*"
        z++
    }
    console.log(row3);
    k--
}

console.log('\n\nQuestion no 3');
let p = 1
let q = 1
while (p <= 5) {
    let row4 = ''
    q=1
    while (q <= p) {
        row4 += q
        q++
    }
    console.log(row4);
    p++
}
