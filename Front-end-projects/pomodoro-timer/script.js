const progressArc = document.getElementById('progress-arc');
const timeDisplay = document.getElementById('time-display');
const startPauseBtn = document.getElementById('start-pause-btn');
const modeBtn = document.getElementById('mode-btn');
const emoji = document.querySelector('.emoji');
const modeLabel = document.querySelector('.text-display');
const mainContainer = document.querySelector('.main-container');


const TOTAL_FOCUS_TIME = 25 * 60;
const TOTAL_BREAK_TIME = 5 * 60;

let timeLeft = TOTAL_FOCUS_TIME;
let isRunning = false;
let currentMode = 'focus';
let interval = null;
const CIRCUMFERENCE = 691;

modeBtn.addEventListener('click', function () {
    if (modeBtn.textContent === 'Pomodoro') {
        modeBtn.textContent = 'Break'
        mainContainer.classList.toggle('break-mode');
        document.querySelector('#arc-gradient stop:first-child').setAttribute('stop-color', '#60a5fa');
        document.querySelector('#arc-gradient stop:last-child').setAttribute('stop-color', '#1e3a8a');
        emoji.textContent = '🧘'
        modeLabel.textContent = 'BREAK'
        clearInterval(interval)
        isRunning = false
        currentMode = 'break'
        timeLeft = TOTAL_BREAK_TIME
        updateDisplay()
        updateArc()
        startPauseBtn.querySelector('i').classList.remove('fa-pause')
        startPauseBtn.querySelector('i').classList.add('fa-play')
    }
    else {
        modeBtn.textContent = 'Pomodoro';
        mainContainer.classList.toggle('break-mode');
        document.querySelector('#arc-gradient stop:first-child').setAttribute('stop-color', '#ff6b35');
        document.querySelector('#arc-gradient stop:last-child').setAttribute('stop-color', '#8b1a00');
        emoji.textContent = '🍅'
        modeLabel.textContent = 'FOCUS'
        clearInterval(interval)
        isRunning = false
        currentMode = 'focus'
        timeLeft = TOTAL_FOCUS_TIME
        updateDisplay()
        updateArc()
        startPauseBtn.querySelector('i').classList.remove('fa-pause')
        startPauseBtn.querySelector('i').classList.add('fa-play')
    }
})

startPauseBtn.addEventListener('click', function () {
    const icon = startPauseBtn.querySelector('i');
    if (icon.classList.contains('fa-pause')) {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    } else {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }

    if (isRunning === false) {
        interval = setInterval(tick, 1000)
        isRunning = true
    }
    else {
        clearInterval(interval)
        isRunning = false
    }
})

function timeCoversion(timeLeft) {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    const rem_seconds = seconds.toString().padStart(2, '0')
    const time_bind = `${minutes}:${rem_seconds}`
    return time_bind
}
// TEST
// console.log(timeCoversion(1500))
// console.log(timeCoversion(75))
// console.log(timeCoversion(9))

function updateArc() {
    const totalTime = currentMode === 'focus' ? TOTAL_FOCUS_TIME : TOTAL_BREAK_TIME;
    const offset = CIRCUMFERENCE * (1 - timeLeft / totalTime)
    progressArc.style.strokeDashoffset = offset;

}
function updateDisplay() {
    timeDisplay.textContent = timeCoversion(timeLeft)
}
function tick() {
    timeLeft--
    updateDisplay()
    updateArc()
    if (timeLeft === 0) {
        clearInterval(interval)
        isRunning = false
    }
}

