const btn_minus = document.querySelector("#btn-design1");
const btn_plus = document.querySelector("#btn-design2");
const counter = document.querySelector("#counter");
const reset = document.querySelector("#reset");

let value = 0;

function updateUI() {
    counter.innerText = value;
}

btn_plus.addEventListener("click", () => {
    value++;
    updateUI();
});

btn_minus.addEventListener("click", () => {
    value--;
    updateUI();
});

reset.addEventListener("click", () => {
    value = 0;
    updateUI();
});

const openSettings = document.getElementById('open-settings')
const settingsPopup = document.getElementById('settings-popup')
const closeSettings = document.getElementById('close-settings')

if (openSettings && settingsPopup && closeSettings) {
    openSettings.addEventListener('click', () => {
        settingsPopup.classList.remove('hidden')
        settingsPopup.classList.add('active')
    })

    closeSettings.addEventListener('click', () => {
        settingsPopup.classList.add('hidden')
        settingsPopup.classList.remove('active')
    })

    window.addEventListener('click', e => {
        if (e.target === settingsPopup) {
            settingsPopup.classList.add('hidden')
            settingsPopup.classList.remove('active')
        }
    })

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            settingsPopup.classList.add('hidden')
            settingsPopup.classList.remove('active')
        }
    })
}


// Settings JS

const themeSwitch = document.getElementById('theme-switch');
const otherThemesContainer = document.querySelector('.other-themes');
const body = document.body;

const THEME_KEY = 'counterAppTheme';

/**
 * Saves the current theme class to Local Storage.
@param {string} themeClass - The class name of the active theme (e.g., 'dark-theme', 'theme-purple').

function saveThemePreference(themeClass) {
    localStorage.setItem(THEME_KEY, themeClass);
}

/**
 * Applies the specified theme class to the body element.
 * It handles the removal of any existing theme classes first.
 * @param {string} themeClass - The class name to apply.
 */
function applyTheme(themeClass) {
    const currentClasses = Array.from(body.classList);

    const themeClasses = ['dark-theme', 'theme-purple', 'theme-red', 'theme-orange', 'theme-teal', 'theme-blue'];

    currentClasses.forEach(cls => {
        if (themeClasses.includes(cls)) {
            body.classList.remove(cls);
        }
    });

    if (themeClass && themeClass !== 'light-theme') {
        body.classList.add(themeClass);
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme) {
        applyTheme(savedTheme);
        if (savedTheme === 'dark-theme') {
            themeSwitch.checked = true;
        } else {
            themeSwitch.checked = false;
        }
    } else {
        themeSwitch.checked = false;
    }
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        applyTheme('dark-theme');
        saveThemePreference('dark-theme');
    } else {
        applyTheme('light-theme');
        saveThemePreference('light-theme');
    }
});


otherThemesContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'SPAN' && target.dataset.theme) {
        const selectedTheme = target.dataset.theme;

        applyTheme(selectedTheme);
        saveThemePreference(selectedTheme);

        themeSwitch.checked = false;
    }
});


initializeTheme();

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('btn-design2');
const decrementButton = document.getElementById('btn-design1');
const stepDropdown = document.getElementById('myDropdown');
const setLimitBtn = document.getElementById('setLimitBtn');
const userInput = document.getElementById('user_input');

const STEP_KEY = 'counterStep';

let count = 0;
let step = 1;
let maxCount = null;

function initializeStep() {
    const savedStep = localStorage.getItem(STEP_KEY);
    if (savedStep) {
        step = Number(savedStep);
        stepDropdown.value = savedStep;
    } else {
        step = 1;
        stepDropdown.value = '1';
    }
}

function updateStep() {
    step = Number(stepDropdown.value);
    localStorage.setItem(STEP_KEY, step);
}

function updateDisplay() {
    counterDisplay.textContent = count;
}

function incrementCounter() {
    if (maxCount !== null && count + step > maxCount) {
        count = maxCount;
    } else {
        count += step;
    }
    updateDisplay();
}

function decrementCounter() {
    count -= step;
    if (count < 0) count = 0;
    updateDisplay();
}

function setMaxLimit() {
    const value = Number(userInput.value);
    if (value > 0) {
        maxCount = value;
        userInput.value = '';
    } else {
        alert('Please enter a positive number');
    }
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
stepDropdown.addEventListener('change', updateStep);
setLimitBtn.addEventListener('click', setMaxLimit);

initializeStep();
updateDisplay();

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});


const min_input = document.getElementById("min_input");
const max_input = document.getElementById("max_input");
const generate_btn = document.getElementById("generate_btn");
const output_el = document.getElementById("output");

generate_btn.addEventListener("click", () => {
    const min_val = parseInt(min_input.value.trim());
    const max_val = parseInt(max_input.value.trim());

    if (isNaN(min_val) || isNaN(max_val) || min_val < 0 || max_val < 0) {
        output_el.textContent = "Write positive numbers";
        return;
    }

    if (min_val > max_val) {
        output_el.textContent = "Min cannot be greater than max";
        return;
    }

    const result_num = Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
    output_el.textContent = result_num;
});

