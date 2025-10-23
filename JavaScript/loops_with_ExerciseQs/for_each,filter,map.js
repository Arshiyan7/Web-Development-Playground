const students = ["Ali", "Sara", "Zain", "Fatima"];

st = students.forEach(students => 
    console.log("Student:",students)
)

const numbers = [5, 10, 15];
trippled = numbers.map(numbers => numbers*3)
console.log(trippled)

const scores = [40, 85, 60, 95, 50];
pass = scores.filter(scores => scores>60)
console.log(pass)

const nums = [2, 3, 4, 5, 6];
filter = nums.filter(nums => nums%2==0)
even_sq = filter.map(filter => filter**2)
console.log(even_sq)

const users = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 19 },
  { name: "Zain", age: 25 }
];

data = users.forEach(users => {
    console.log(`${users.name} is ${users.age} years old`)
})