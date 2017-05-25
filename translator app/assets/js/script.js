/*global console,alert,prompt,valueOf*/

// declare variable 
var
    english = "Hello",
    french = "Bonjour",
    spanish = "Hola",
    userInput = prompt("enter Hello word in one of the latin language to translate :");

// algorithm
if (userInput === "hello") {
    document.getElementById("box").innerHTML =
        userInput + " means " + french + " in french " + "<br>" +
        " and " + spanish + " in spanish ";
} else if (userInput === "Hello") {
    document.getElementById("box").innerHTML =
            userInput + " means " + french + " in french " + "<br>" +
            " and " + spanish + " in spanish ";
} else if (userInput === "HELLO") {
    document.getElementById("box").innerHTML =
            userInput + " means " + french + " in french " + "<br>" +
            " and " + spanish + " in spanish ";
} else if (userInput === "bonjour") {
    document.getElementById("box").innerHTML =
            userInput + " means " + english + " in English " + "<br>" +
            " and " + spanish + " in spanish ";
} else if (userInput === "Bonjour") {
    document.getElementById("box").innerHTML =
            userInput + " means " + english + " in English " + "<br>" +
            " and " + spanish + " in spanish ";
} else if (userInput === "BONJOUR") {
    document.getElementById("box").innerHTML =
            userInput + " means " + english + " in English " + "<br>" +
            " and " + spanish + " in spanish ";
} else if (userInput === "hola") {
    document.getElementById("box").innerHTML =
            userInput + " means " + english + " in English " + "<br>" +
            " and " + french + " in french ";
} else if (userInput === "Hola") {
    document.getElementById("box").innerHTML =
            userInput + " means " + english + " in English " + "<br>" +
            " and " + french + " in french ";
} else if (userInput === "HOLA") {
    document.getElementById("box").innerHTML =
            userInput + " means " + english + " in English " + "<br>" +
            " and " + french + " in french ";
} else {
    document.getElementById("box").innerHTML = " sorry this word is not available in our dictionnary !!!";
    document.getElementById("image").src = "http://en.balticmedia.com/bm/images/404-Page-Not-Found.png";
}
