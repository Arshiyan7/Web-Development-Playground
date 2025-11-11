console.log('Code Running, OK');

const text = document.querySelector(".main-title")
text.textContent = "DOM Revision Time!"
text.style.color = 'purple'

const new_text = document.createElement('p')
new_text.textContent = 'You are practicing like a pro!'
document.body.append(new_text)

const body = document.body;
const btn2 = document.querySelector('#theme-btn')
btn2.addEventListener('click', function () {
    if (body.style.backgroundColor === 'white' || body.style.backgroundColor === '') {
        body.style.backgroundColor = 'skyblue';
    } else {
        body.style.backgroundColor = 'white';
    }
})

const input = document.querySelector('#user')
const msg = document.querySelector('#greet')

input.addEventListener('input', function () {
    msg.textContent = `Hello, ${input.value}`
})

const img = document.querySelector('#avatar')
const btn = document.querySelector('.hide-btn')

btn.addEventListener('click', function () {
    if (img.style.display == 'none' || img.style.display === '') {
        img.style.display = 'block'
    }
    else {
        img.style.display = 'none'
    }
})