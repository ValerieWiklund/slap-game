
let target = {
  name: "Stressed out Sally",
  moodScore: 0,
  healthScore: 100,
  hits: 0,
  healthHelps: [],
}

let modifiers = {
  food: { name: "Food", modifier: 10, description: "Adds 10 points to health" },
  water: { name: "Water", modifier: 5, description: "Adds 5 point to health" },
  coffee: { name: "Coffee", modifier: 1, description: "Adds 1 point to health" }
}

let modsTotal = 0;
let healthTotal = 0;


/**
 * This function increments mood with each wine and decrements health 
 */

function slap() {
  target.moodScore++;
  target.healthScore--;
  target.hits++;
  healthTotal = target.healthScore + modsTotal;
  scoreDraw();
}

/**
 * This function increments mood with each beer and decrements health
*/

function beer() {
  target.moodScore += 2;
  target.healthScore--;
  target.hits++
  healthTotal = target.healthScore + modsTotal;
  scoreDraw();
}

/**
 * This function increments mood with each shot and decrements health
 */

function shot() {
  target.moodScore += 5;
  target.healthScore -= 15;
  target.hits++
  healthTotal = target.healthScore + modsTotal;
  scoreDraw();
}


/**
 *  function to add modifying items to the target
 */

function giveHelp(type) {
  target.healthHelps.push(modifiers[type])
  addMods();
}

/**
 * This function calculates the total of the modifiers added to target
 */

function addMods() {
  for (let i = 0; i < target.healthHelps.length; i++)
    modsTotal += target.healthHelps[i]['modifier'];
  return modsTotal;

}






/**
 * This function adds the new score to the page
 */

function scoreDraw() {
  let healthElement = document.getElementById("healthcheckup");
  let moodElement = document.getElementById("moodcheckup");
  let nameElement = document.getElementById("name");
  let drinkcountElement = document.getElementById("drinkcounter");
  nameElement.textContent = `Name: ${target.name}`;
  moodElement.textContent = `Mood: ${target.moodScore.toString()}`;
  healthElement.textContent = `Health: ${healthTotal.toString()}`;
  drinkcountElement.textContent = `Number of Drinks: ${target.hits} ${modsTotal}`;









}