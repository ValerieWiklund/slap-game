let mood = 0
let health = 100
let healthElement = document.getElementById("healthcheckup");



function slap() {
  mood++;
  health--;
  alert(mood);
  alert(health);

}
function scoreDraw() {
  healthElement.textContent = mood "and"


}

