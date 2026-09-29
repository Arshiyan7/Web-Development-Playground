let username : string = "Arshiyan"
// let age : string = 23 uncomment this and see typescript throwing error
let age : number = 23
let isStudent : boolean = true

console.log(`My name is : ${username}`)
console.log(`My Age is : ${age}`)
console.log(`My status is : ${isStudent}`)

// const names : string[] = ["Ali", "Ahmed", 3] uncomment this and see typescript throwing error
const names : string[] = ["Ali", "Ahmed", "Sara"]
const scores : number[] = [85, 92, 78]

console.log(names,"\n",scores)

const product :  {
    name : string;
    price : number;
    inStock : boolean;
    
} = {
    name : "Arshiyan",
    price : 23000,
    inStock : true
}

console.log(product)