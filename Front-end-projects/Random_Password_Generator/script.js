const btn1 = document.querySelector('.btn')
const input = document.querySelector('.input')
const copy = document.querySelector('.fa-copy')
const alert_container = document.querySelector('.alert-container')

btn1.addEventListener('click', function () {
    createPassword()
})
copy.addEventListener('click', function () {
    copyText()
    if (input.value) {
        alert_container.classList.remove("active")
        setTimeout(() => {
            alert_container.classList.add('active')
        }, 2000);
    }
})
function createPassword() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'.<>?/`~"
    const password_length = 14
    let password = ''
    for (let i = 0; i < password_length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length)
        password += characters.substring(randomNum, randomNum + 1)
        // console.log(randomNum, password) use this to see the random password in the console
        input.value = password
        alert_container.classList.add('active')
    }
}

function copyText() {
    input.select()
    input.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(input.value)
}