//var randomNumber1 = Math.round((Math.random + 1)*5);
//console.log(randomNumber1);
var number = ((Math.random() )*6)+1;

var randomNumber1 = Math.floor(number);

var randomImage = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImage);

var number2 = ((Math.random() )*6)+1;
var randomNumber2 = Math.floor(number2);
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);


if(randomNumber1>randomNumber2){
    //document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player 1 Wins";
    //document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins";
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
    
}
else if(randomNumber1<randomNumber2){
    //document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "Player 2 Wins";
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins🚩";
}
    
else{
    //document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML = "It's a Draw";
    document.getElementsByTagName("h1")[0].innerHTML = "It's a Draw";
}