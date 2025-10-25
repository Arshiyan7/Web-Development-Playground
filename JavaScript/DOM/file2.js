console.log("File running, OK!")

//Get element by class
let box = document.body.getElementsByClassName("boxes")
// console.log(box)
box[2].style.backgroundColor = 'red'

//Get element by ID
let blue_box = document.getElementById("blue")
// console.log(blue_box)
blue_box.style.backgroundColor = 'blue'
blue_box.style.color = 'white'

let single = document.querySelector(".boxes")
// console.log(single)
single.style.backgroundColor = 'green'
single.style.color = 'white'

let all = document.querySelectorAll(".boxes")
// console.log(all)
all.forEach(e => {
    e.style.backgroundColor = 'red'
    e.style.color = 'white'
});

let get = document.getElementsByTagName('div')
console.log(get)
get[2].matches('#blue') //False, Because the element 2 do not has ID -> Blue
get[4].matches('#blue') //True, Because the element 2 has ID -> Blue