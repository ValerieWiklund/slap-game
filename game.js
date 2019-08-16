
let target = {
  name: "Stressed out Sally",
  moodScore: 0,
  healthScore: 100,
  hits: 0,
  healthHelps: [],
}

let items = {
  food: { name: "Dinner", modifier: 10, description: "Yummy food to go with my beverage" },
  water: { name: "Water", modifier: 5, description: "It helps with dehydration and tastes great" },
  coffee: { name: "Coffee", modifier: 1, description: "Gives you something else to drink. " }
}


/**
 * This function increments mood with each wine and decrements health 
 */

function slap() {
  target.moodScore++;
  target.healthScore--;
  target.hits++
  scoreDraw();
}

/**
 * This function increments mood with each beer and decrements health
*/

function beer() {
  target.moodScore++;
  target.healthScore--;
  target.hits++
  scoreDraw();
}

/**
 * This function increments mood with each shot and decrements health
 */

function shot() {
  target.moodScore++;
  target.healthScore--;
  target.hits++
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
  nameElement.textContent = `Name: ${target.name}`;
  moodElement.textContent = `Mood: ${target.moodScore.toString()}`;
  healthElement.textContent = `Health: ${target.healthScore.toString()}`;
  drinkcountElement.textContent = `Number of Drinks: ${target.hits}`;









}