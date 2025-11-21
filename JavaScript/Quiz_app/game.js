const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBar-full')


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []


let questions = [
    // Programming / CS funny ones
    {
        question: "Why do programmers always mix up Halloween and Christmas?",
        choice1: "Because Oct 31 equals Dec 25",
        choice2: "They love costumes",
        choice3: "They celebrate both equally",
        choice4: "They forget dates",
        answer: 1
    },
    {
        question: "Why did the developer go broke?",
        choice1: "Too many bugs",
        choice2: "Used all his cache",
        choice3: "Forgot his wallet password",
        choice4: "Spent on new frameworks",
        answer: 2
    },
    {
        question: "What do you call a programmer from Finland?",
        choice1: "Nerdy McCodeface",
        choice2: "A Finn-ished function",
        choice3: "Boolean Buddy",
        choice4: "Debug Finn",
        answer: 2
    },
    {
        question: "Why do Java developers wear glasses?",
        choice1: "Because they can’t C#",
        choice2: "To see better",
        choice3: "Fashion statement",
        choice4: "Because Java is dark themed",
        answer: 1
    },

    // Real-life / science / funny informative ones
    {
        question: "If you drop a bar of soap on the floor, is the floor clean or the soap dirty?",
        choice1: "The floor wins",
        choice2: "The soap loses",
        choice3: "Both need therapy",
        choice4: "Science still investigating",
        answer: 3
    },
    {
        question: "What’s the scientific name for 'I’ll do it tomorrow'?",
        choice1: "Sleepus Modeus",
        choice2: "Procrastinatius Maximus",
        choice3: "Lazy-lis Rex",
        choice4: "Chillium Tillium",
        answer: 2
    },
    {
        question: "Your dog stares at you while you eat. What is he thinking?",
        choice1: "One bite won’t hurt",
        choice2: "You call that a portion?",
        choice3: "I trained you well",
        choice4: "Drop it… you will drop it",
        answer: 4
    },
    {
        question: "If a tomato is a fruit, what is ketchup?",
        choice1: "A smoothie",
        choice2: "A condiment fraud",
        choice3: "A tomato's revenge",
        choice4: "Technically a fruit sauce",
        answer: 4
    },
    {
        question: "Which animal never sleeps?",
        choice1: "Bullfrog",
        choice2: "Shark",
        choice3: "Ant",
        choice4: "Sloth",
        answer: 2
    },
    {
        question: "Which ancient civilization invented the first known writing system?",
        choice1: "Romans",
        choice2: "Egyptians",
        choice3: "Sumerians",
        choice4: "Greeks",
        answer: 3
    }
];


const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

// Start game
function startGame() {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] // make a copy question, so while deleting original question set stays
    getNewQuestion()
}


function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }


    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]


    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })


    availableQuestions.splice(questionsIndex, 1)
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') incrementScore(SCORE_POINTS)

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

function incrementScore(num) {
    score += num
    scoreText.innerText = score
}

// Start the game
startGame()
