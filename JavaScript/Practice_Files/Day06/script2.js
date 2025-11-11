console.log('Code Running OK!!');

const btn = document.querySelector('.color-btn')
btn.addEventListener('click',function(){
  btn.style.hover = 'pointer'
  btn.parentElement.style.backgroundColor = 'lightgreen'
  btn.textContent = 'Color Changed!'
})

const ul_list = document.querySelector('.list')
ul_list.firstElementChild.style.backgroundColor = 'red'
ul_list.lastElementChild.style.backgroundColor = 'blue'

const hover = document.querySelector('.hover-section')
const ul_li = hover.querySelector('ul')

const items = ul_li.querySelectorAll('li')
items.forEach(e => {
  e.addEventListener('mouseover',function(){
    e.nextElementSibling.style.color = 'yellow'
  })
  e.addEventListener('mouseout',function(){
    e.nextElementSibling.style.color = ''
  })
});

const border = document.querySelector('.content')
const p_tag = border.querySelector('p')
const wrapper = p_tag.closest('.wrapper')
wrapper.style.border = '3px solid purple'

const card = document.querySelector('.card')
const btn2 = card.querySelector('.action-btn')

btn2.addEventListener('click',function(){
  btn2.closest('.card').style.border = '2px solid black'
  card.firstElementChild.style.color = 'red'
})