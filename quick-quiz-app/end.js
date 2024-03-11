const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScore")) || [];  // if there is any value that shows for highscores, then we have return as highscore and if ther is no value, then we have empty array as return value 


const MAX_HIGH_SCORE = 5;


finalScore.innerText = mostRecentScore; //this means that once we have input, inside innertext we have recentscore displaying.

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});  //this means that if there's nothing in the savescorebtn, it will be unclickable & if otherwise should be clickable.

const saveHighScore = () => {
    const score = {
        score: mostRecentScore,
        name: username.value     // 
    }
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);  // this sort scores from the highest to the lowest 
    highScores.splice(5);  //here, first 5 scores is returned in the screboard inside the application

    console.log(highScores)

    localStorage.setItem('highScore', JSON.stringify(highScores));
    window.location.assign("./index.html")  // here, allowed us to returned to the homepage once we save the scores
}  
saveScoreBtn.addEventListener('click', (event) => {
    event.preventDefault();
    saveHighScore()  //this allow the save btn to be clickable once we input the username scores finish
})
