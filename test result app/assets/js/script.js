/*global console,alert,prompt,valueOf*/

// declare variable 
var
    cashe = document.getElementById("box"),
    result = prompt("please enter your grade below ?"),
    photo = document.getElementById("image");
if (result >= 90) {
    cashe.innerHTML = " congratulation you got grade A";
} else if (result >= 80) {
    cashe.innerHTML = " congratulation you got grade b";
} else if (result >= 70) {
    cashe.innerHTML = " congratulation you got grade c";
} else if (result >= 65) {
    cashe.innerHTML = " congratulation you got grade d";
} else if (result <= 60) {
    cashe.innerHTML = " unfortunately you failed your grade is F , you need to study hard !!!!";
    photo.src = "http://www.clker.com/cliparts/j/R/Q/7/d/y/mr-unhappy-rock-md.png";
} else if (result >= 60) {
    cashe.innerHTML = " unfortunately , you have a second semester , you have to pass !!!!";
    photo.src = "http://www.clker.com/cliparts/j/R/Q/7/d/y/mr-unhappy-rock-md.png";
} else {
    cashe.innerHTML = "please enter a valid number not a text!!! <br> I really get frustrated from clients";
    photo.src = "http://experimentalgameplay.com/blog/wp-content/uploads/2009/09/egpTheme_numbers.png";
}