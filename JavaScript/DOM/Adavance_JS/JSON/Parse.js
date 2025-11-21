// JSON Parse -> Converts string into JSON Format

const json_name = `["SpongBob","Patrick","Squidward","Sandy"]`
const json_people = `[
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
]`
const json_person = `{
    "Name" : "SpongBob",
    "Age" : 30,
    "isEmployed" : true,
    "Hobbie" : ["JellyFishing", "Cooking", "Karate"]
}`

const json_names_parse = JSON.parse(json_name)
console.log(json_names_parse);

const json_person_parse = JSON.parse(json_person)
console.log(json_person_parse);

const json_people_parse = JSON.parse(json_people)
console.log(json_people_parse);

// Fetch -> get JSON data 
fetch("people.json")
.then(response => response.json())
.then(value => console.log(value))
.catch(error => console.log(error))