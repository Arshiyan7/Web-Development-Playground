// PRACTICE 1 JavaScript
// console.log('Code Running, OK!!');

// // Select the <h2> element with the id "title" and change its text to "JavaScript DOM Practice".
// const element = document.getElementById('title')
// element.textContent = 'JavaScript DOM Practice'

// // Select all <li> elements and change their text color to blue.
// const All_li = document.querySelectorAll('li')
// All_li.forEach(li => {
//     li.style.color = 'blue'
// });
// // Create a new <p> element with the text "This is a dynamically added paragraph" and append it to the end of the <body>.
// const p_element = document.createElement('p')
// p_element.textContent = 'This is a dynamically added paragraph'
// document.body.append(p_element)

// // Select a button with the class "click-btn" and:

// // Change its background color to green

// // Add a class "active" to it

// const btn = document.querySelector('.click-btn')
// btn.style.backgroundColor = 'green'
// btn.classList.add('active')

// // Select a <div> with the class "remove-me" and remove it from the page.
// const remove = document.querySelector('.remove-me')
// remove.remove()

// PRACTICE 2 JavaScript

console.log('Code Running, OK');
const main = document.querySelector('.main-heading')
main.textContent = 'Welcome to DOM level 2'

const high = document.querySelectorAll('.highlight')
high.forEach(element => {
    element.style.color = 'darkred'
    element.style.fontSize = '18px'
});

const h2 = document.createElement('h2')
h2.textContent = 'This heading was added by JavaScript!'

const ul = document.querySelector('ul') // adding heading before UL tag
ul.before(h2)

const div = document.querySelector('#box')
div.style.backgroundColor = 'lightblue'
div.style.border = '2px solid black'

const remove = document.querySelectorAll('.highlight')
remove.forEach(element => {
    element.classList.remove('highlight')
});