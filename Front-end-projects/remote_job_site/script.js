// Nav
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navAuth = document.querySelector('.nav-auth');

// Filters
const searchInput = document.querySelector('input[type="search"]');
const locationSelect = document.getElementById('location');
const salarySlider = document.getElementById('salary');
const salaryValue = document.getElementById('salary-value');
const sortBy = document.getElementById('sort-by');
const tags = document.querySelectorAll('.categories .tag');
const checkboxes = document.querySelectorAll('.benefits-filter input[type="checkbox"]');
const btnApplyFilter = document.querySelector('.btn-apply-filter');
const btnClear = document.querySelector('.btn-clear');

// Job cards
const jobCards = document.querySelectorAll('.job-card');

// Footer
const footerEmail = document.querySelector('footer input[type="email"]');
const footerBtn = document.querySelector('.footer-btn');

// Salary Slider value Update
salarySlider.addEventListener('input', function () {
    const salary_ = salarySlider.value
    const salary_value = salary_ / 1000
    salaryValue.textContent = `$${salary_value}k`
})

jobCards.forEach(card => {
    card.addEventListener('click', function () {
        const details = card.querySelector('.job-details')
        const isOpen = !details.classList.contains('hidden')

        jobCards.forEach(c => {
            c.querySelector('.job-details').classList.add('hidden')
        })

        if (!isOpen) {
            details.classList.remove('hidden')
        }
    })
})

tags.forEach(tag => {
    tag.addEventListener('click', function () {
        tag.classList.toggle('active')
    })
});

document.querySelector('.footer-form').addEventListener('submit', function (e) {
    e.preventDefault()
    const email_val = footerEmail.value.trim()
    if (email_val === '') {
        footerEmail.focus()
    }
    else {
        footerBtn.textContent = "You're in! 🎉"
        footerBtn.classList.toggle('success')
        footerEmail.value = ''
        setTimeout(function () {
            footerBtn.textContent = "Count Me In 🤝"
            footerBtn.classList.remove('success')
        }, 3000)
    }
})

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active')
    navAuth.classList.toggle('open')
    navLinks.classList.toggle('open')
})