const highScoreList = document.querySelector('#highScoreList')
const highscore = JSON.parse(localStorage.getItem('highScores')) || []

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoreList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')
