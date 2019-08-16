let moodScore = 0
let healthScore = 100
let playerName = "Stressed Sally"
let hits = 0


/**
 * This function increments mood with each wine and decrements health 
 */

function slap() {
  moodScore++;
  healthScore--;
  hits++
  scoreDraw();
}

/**
 * This function increments mood with each beer and decrements health
*/

function beer() {
  moodScore += 5;
  healthScore -= 5;
  hits++
  scoreDraw();
}

/**
 * This function increments mood with each shot and decrements health
 */

function shot() {
  moodScore += 10;
  healthScore -= 15;
  hits++
  scoreDraw();
}


/**
 * This function adds the new score to the page
 */

function scoreDraw() {
  let healthElement = document.getElementById("healthcheckup");
  let moodElement = document.getElementById("moodcheckup");
  let nameElement = document.getElementById("name");
  let drinkcountElement = document.getElementById("drinkcounter");
  nameElement.textContent = `Name: ${playerName}`;
  moodElement.textContent = `Mood: ${moodScore.toString()}`;
  healthElement.textContent = `Health: ${healthScore.toString()}`;
  drinkcountElement.textContent = `Number of Drinks: ${hits}`;









}