let username: string = "Arshiyan";
let age: number = 24;
let isHired: boolean = false;

let skills: string[] = ["SQL", "Python"];
let scores: Array<number> = [90, 85];   // same thing, different syntax

// username = 42;            Error: number is not assignable to string
// skills.push(10);          Error: number into a string[]


function getsum(scores : number[]):number{
    let sum = 0
    for (const score of scores) {
        sum += score
    }
    return sum
}

const numbers : Array<number> = [1,2,3,4,5]
console.log(getsum(numbers))