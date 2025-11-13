const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// Save score function
saveScoreBtn.addEventListener('click', e => {
    e.preventDefault(); 

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    
    highScores.push(score);

    // Sort and keep top 5
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(MAX_HIGH_SCORES);

    
    localStorage.setItem('highScores', JSON.stringify(highScores));

    
    window.location.assign('highscores.html');
});
