var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImages1 = "images/dice" + randomNumber1 + ".png";

var changeatt = document.querySelectorAll("img")[0];

changeatt.setAttribute("src",randomImages1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImages2 = "images/dice" + randomNumber2 + ".png";

var changeatt1 = document.querySelectorAll("img")[1];

changeatt1.setAttribute("src",randomImages2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins"
}
else {
    document.querySelector("h1").innerHTML = "its a draw"
}