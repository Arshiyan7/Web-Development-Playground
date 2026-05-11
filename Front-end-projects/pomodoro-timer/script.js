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

modeBtn.addEventListener('click', function () {
    if (modeBtn.textContent === 'Pomodoro') {
        modeBtn.textContent = 'Break'
        mainContainer.classList.toggle('break-mode');
        document.querySelector('#arc-gradient stop:first-child').setAttribute('stop-color', '#60a5fa');
        document.querySelector('#arc-gradient stop:last-child').setAttribute('stop-color', '#1e3a8a');
        emoji.textContent = '🧘'
        timeDisplay.textContent = '05:00'
        modeLabel.textContent = 'BREAK'
    }
    else {
        modeBtn.textContent = 'Pomodoro';
        mainContainer.classList.toggle('break-mode');
        document.querySelector('#arc-gradient stop:first-child').setAttribute('stop-color', '#ff6b35');
        document.querySelector('#arc-gradient stop:last-child').setAttribute('stop-color', '#8b1a00');
        emoji.textContent = '🍅'
        timeDisplay.textContent = '25:00'
        modeLabel.textContent = 'FOCUS'
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
})