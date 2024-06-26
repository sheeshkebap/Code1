"use strict";
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
function getRandomArrayElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
function createRandomElement() {
    const element = document.createElement("div");
    element.style.position = "absolut";
    element.style.width = `${getRandomIntInclusive(50, 100)}px`;
    element.style.height = `${getRandomIntInclusive(50, 100)}px`;
    element.style.top = `${getRandomIntInclusive(0, window.innerHeight - 100)}px`;
    element.style.left = `${getRandomIntInclusive(0, window.innerWidth - 100)}px`;
    element.style.backgroundColor = getRandomArrayElement(Color);
    element.style.border = "2px solid black";
    element.style.padding = "5px";
    element.style.color = getRandomArrayElement(Color);
    return element;
}
function createRandomÉlements() {
    const numElements = getRandomIntInclusive(5, 1000);
    for (let i = 0; i < numElements; i++) {
        const randomElement = createRandomElement();
        document.body.appendChild(randomElement);
    }
}
window.onload = () => {
    createRandomÉlements();
};
