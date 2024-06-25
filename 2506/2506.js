"use strict";
let spanElement = document.querySelector("span#IDHello");
spanElement.textContent = "World";
let newSpan = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";
console.log(newSpan);
let i = 0;
do {
    i++;
    console.log(i);
    let newSpan = document.createElement("span");
    newSpan.textContent = " Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
} while (i < 10);
let b = 10;
document.body.style.backgroundColor = "lightblue";
let Color = [
    "red",
    "blue",
    "yellow",
    "pink",
    "black",
    "green",
    "white",
    "lightgreen"
];
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInt = getRandomIntInclusive(1, 1000) + "px";
function getRandomArrayElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function RandomDivs() {
    let newDiv = document.createElement("div");
    newDiv.style.display = "flex";
    newDiv.style.backgroundColor = getRandomArrayElement(Color);
    newDiv.style.width = randomInt;
    newDiv.style.height = randomInt;
    newDiv.style.marginLeft = randomInt;
    newDiv.style.marginRight = randomInt;
    newDiv.style.marginTop = randomInt;
    newDiv.style.marginBottom = randomInt;
    newDiv.style.border = "2px solid black";
    document.body.appendChild(newDiv);
}
do {
    b++;
    console.log(b);
    RandomDivs();
} while (i == 10 && b < 30);
