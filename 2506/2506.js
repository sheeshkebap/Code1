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
    newSpan.textContent = "Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
} while (i < 10);
let b = 10;
do {
    b++;
    console.log(b);
    let secondSpan = document.createElement("span");
    secondSpan.textContent = "Bye";
} while (i > 10 && b < 30);
