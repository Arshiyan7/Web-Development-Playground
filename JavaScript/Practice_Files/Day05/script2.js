// console.log('Code Running, ok');

// const btn = document.body.querySelector('#btn1')
// const msg = document.body.querySelector('#text1')

// btn.addEventListener('click',function(){
//     msg.textContent = 'button clicked'
//     msg.style.color = 'green'
// })

// const hover = document.querySelector('.hover-box')

// hover.addEventListener('mouseover', function(){
//     hover.style.backgroundColor = 'orange'
// })
// hover.addEventListener('mouseout',function(){
//     hover.style.backgroundColor = 'gray'
// })

// const msg_input = document.querySelector('#username')
// const output = document.querySelector('#display')

// msg_input.addEventListener('input',function(){
//     output.textContent = `Hello ${msg_input.value}`
// })

// const btn2 = document.querySelector('#change-pic')
// const img = document.querySelector('#profile-pic')
// btn2.addEventListener('click',function(){
//     img.setAttribute('src','newpic.jpg')
//     img.setAttribute('alt','New Profile Picture')
// })

// const link = document.querySelector('#main-link')
// const btn3 = document.querySelector('#disable-link')

// btn3.addEventListener('click',function(){
//     link.removeAttribute('href')
//     link.style.color = 'gray'
//     link.style.pointerEvents = 'none'
// })

console.log('Code Running Ok');
const btn = document.querySelector('#change-text')
const h2 = document.querySelector("h2")

btn.addEventListener('click',function(){
    h2.textContent = 'Text has been changed'
    h2.style.color = 'darkred'
    h2.style.fontWeight = 'bold'
})

const div = document.querySelector('#color-box')
div.addEventListener('dblclick', function () {
    if (div.style.color === 'yellow') {
        div.style.color = 'blue'
    } else {
        div.style.color = 'yellow'
    }
})

const email = document.querySelector("#email")
const msg = document.querySelector("#preview")
email.addEventListener('input',function(){
    msg.textContent = `Your Email: ${email.value}`
})

const img = document.querySelector("#logo")
const btn2 = document.querySelector("#toggle-logo")

btn2.addEventListener('click',function(){
    if (img.style.display == 'none') {
        img.style.display = 'inline'
    }
    else{
        img.style.display = 'none'
    }
})

console.log('Code Running, ok!');

const btn3 = document.querySelector('#add-link');

btn3.addEventListener('click', function () {
    const existingLink = document.querySelector('#openai-link');
    if (!existingLink) {
        const link = document.createElement('a');
        link.textContent = 'Visit OpenAI';
        link.href = 'https://openai.com';
        link.target = '_blank'; 
        link.id = 'openai-link'; 
        btn.after(link);
    } else {
        console.log('Link already exists!');
    }
});
