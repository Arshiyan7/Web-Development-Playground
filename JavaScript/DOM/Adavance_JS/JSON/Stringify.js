//JSON Stringify -> Converts JSON Objects into 1 long string 

const names_ = ["SpongBob","Patrick","Squidward","Sandy"]
const names = JSON.stringify(names_)

// console.log(names);

const object_ = {
    "Name" : "SpongBob",
    "Age" : 30,
    "isEmployed" : true,
    "Hobbie" : ["JellyFishing", "Cooking", "Karate"]
}

const object_names = JSON.stringify(object_)
console.log(object_names);

const array_obj = [
    {
    "Name" : "SpongBob",
    "Age" : 30,
    "isEmployed" : true
},
{
    "Name" : "Patrick",
    "Age" : 34,
    "isEmployed" : false
},
{
    "Name" : "Sandy",
    "Age" : 28,
    "isEmployed" : false
},
{
    "Name" : "Squidward",
    "Age" : 40,
    "isEmployed" : true
}
]

const array_ = JSON.stringify(array_obj)
console.log(array_);

