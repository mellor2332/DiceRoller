/* Player 1 */

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomDiceImageSrc = "Images/" + randomDiceImage;
console.log(randomDiceImageSrc)

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImageSrc);

/* Player 2 */

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomDiceImageSrc2 = "Images/" + randomDiceImage2;
console.log(randomDiceImageSrc2);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImageSrc2);


/* Winner is... */

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!"; 
}
