let moodScore = 0
let healthScore = 100
let healthElement = document.getElementById("healthcheckup");



function slap() {
  moodScore++;
  healthScore--;
  scoreDraw();
}


function scoreDraw() {
  healthElement.textContent = `Mood: ${moodScore.toString()}  \n Health: ${healthScore.toString()}`;
}