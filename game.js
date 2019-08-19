
let target = {
  name: "Stressed out Stella",
  moodScore: 0,
  healthScore: 100,
  hits: 0,
  healthHelps: [],
}

/**
 * Modifiers will decrease the amount of damage done to health. 
 */

let modifiers = {
  food: { name: "Food", modifier: -3, description: "Adds 10 points to health" },
  water: { name: "Water", modifier: -2, description: "Adds 5 point to health" },
  coffee: { name: "Coffee", modifier: -1, description: "Adds 1 point to health" }
}

let modsTotal = 0;
let healthTotal = 0;
let foodCount = 0;
let waterCount = 0;
let coffeeCount = 0;
let loseElement = document.getElementById('loser-notice')



/**
 * This function increments mood with each wine and decrements health 
 */

function wine() {
  target.moodScore++;
  target.healthScore -= 5 + modsTotal;
  target.hits++;
  // healthTotal = target.healthScore + modsTotal;
  scoreDraw();
  healthcheck();
}

/**
 * This function increments mood with each beer and decrements health
*/

function beer() {
  target.moodScore += 2;
  target.healthScore -= 3 + modsTotal;
  target.hits++
  // healthTotal = target.healthScore + modsTotal;
  scoreDraw();
  healthcheck();
}

/**
 * This function increments mood with each shot and decrements health
 */

function shot() {
  target.moodScore += 5;
  target.healthScore -= 15 + modsTotal;
  target.hits++
  // healthTotal = target.healthScore + modsTotal;
  scoreDraw();
  healthcheck();
}


/**
 *  function to add modifying items to the target
 */

function giveHelp(type) {
  target.healthHelps.push(modifiers[type])
  addMods();

}

/**
 * This function calculates the number of each modifier added to the target and their total value. Does not apply until target is given another drink. 
 */

function addMods() {
  modsTotal = 0;
  foodCount = 0;
  waterCount = 0;
  coffeeCount = 0;
  for (let i = 0; i < target.healthHelps.length; i++) {
    modsTotal += target.healthHelps[i]['modifier'];
    if (target.healthHelps[i]['name'] == "Food") {
      foodCount++;
    } else if (target.healthHelps[i]['name'] == "Water") {
      waterCount = waterCount + 1;
    } else if (target.healthHelps[i]['name'] == "Coffee") {
      coffeeCount++;
    }
  }
  scoreDraw();
  return modsTotal;
}

/**
 * This function checks health
 */
function healthcheck() {
  if (target.healthScore <= 0) {
    drawLoser();
  }
}


/**
 * This function will reset the game
 */

function reset() {
  target.moodScore = 0;
  target.healthScore = 100;
  target.hits = 0;
  modsTotal = 0
  target.healthHelps = [];
  foodCount = 0;
  waterCount = 0;
  coffeeCount = 0;
  scoreDraw();
  loseElement.classList.remove("end-game");
  loseElement.textContent = `Stella has had just a little too much de-stressing. Time for her to sleep so she can start over.`;
}


/**
 * This function adds the new score to the page
 */

function scoreDraw() {
  let healthElement = document.getElementById("healthcheckup");
  let moodElement = document.getElementById("moodcheckup");
  let nameElement = document.getElementById("name");
  let drinkcountElement = document.getElementById("drinkcounter");
  let modsElement = document.getElementById("modstotalcheckup");
  let foodElement = document.getElementById("foodcheckup");
  let waterElement = document.getElementById("watercheckup");
  let coffeeElement = document.getElementById("coffeecheckup")
  nameElement.textContent = `Name: ${target.name}`;
  moodElement.textContent = `Mood: ${target.moodScore.toString()}`;
  healthElement.textContent = `Health: ${target.healthScore.toString()}`;
  drinkcountElement.textContent = `Number of Drinks: ${target.hits}`;
  modsElement.textContent = `Modifiers Total: ${modsTotal}`;
  foodElement.textContent = `Food: ${foodCount.toString()}`;
  waterElement.textContent = `Water: ${waterCount.toString()}`;
  coffeeElement.textContent = `Coffee: ${coffeeCount}`;

}

function drawLoser() {
  loseElement.classList.add("end-game")
  loseElement.textContent = `Oh, you let Stella drink too much. She fell asleep.`;
}