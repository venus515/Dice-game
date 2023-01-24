var randomnumber=Math.floor(Math.random()*6)+1;
var numbersource="dice" + randomnumber +".png";
var imagesource="images/" + numbersource;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var numbersource2="dice" + randomnumber2 +".png";
var imagesource2="images/" + numbersource2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource2);

if(randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";

}
else if(randomnumber2>randomnumber){
    document.querySelector("h1").innerHTML="Player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="draw";
}
