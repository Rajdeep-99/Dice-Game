var randomNumber1 = Math.random();
randomNumber1 =Math.floor(6 * randomNumber1);
randomNumber1 = randomNumber1 + 1;

var randomDiceImage1 = "images/dice"+randomNumber1+".png";

document.querySelectorAll(".imgs")[0].setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll(".imgs")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="🚩Player 1 WINS";
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML="Player 2 WINS🚩";
else
    document.querySelector("h1").innerHTML="🚩DRAW🚩";