var dice1 = Math.floor((Math.random(dice1)*6) + 1);

var diceimg1 = "images/dice"+dice1+".png";
var img1 = document.querySelector(".img1");
img1.setAttribute("src",diceimg1);

var dice2 = Math.floor((Math.random(dice2)*6) + 1);

var diceimg2 = "images/dice"+dice2+".png";
var img2 = document.querySelector(".img2");
img2.setAttribute("src",diceimg2);



if (dice1 > dice2){
    document.querySelector("h1").innerHTML = "Player 1 win";
}
else if(dice1 == dice2){
    document.querySelector("h1").innerHTML = "Draw";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 win";
}









