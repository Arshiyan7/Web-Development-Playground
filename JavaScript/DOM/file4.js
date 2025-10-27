console.log("Code Running, OK!!")

let button = document.body.querySelector('.btn')


button.addEventListener('click',()=>{
    document.querySelector('.text').innerHTML = "As you wish, Text Changed After single <b>Mouse Click</b>"
})

let button2 = document.body.querySelector('.btn2')

button2.addEventListener('dblclick',()=>{
    document.querySelector('.text2').innerHTML = "As you wish, Text Changed After Double <b>Mouse Click</b>"
})
