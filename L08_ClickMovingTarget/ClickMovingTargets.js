"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let boxes = [];
for (let i = 0; i < 12; i++) {
    boxes.push({
        positionX: getRandomIntInclusive(10, 1400),
        positionY: getRandomIntInclusive(10, 700),
        boxWidth: getRandomIntInclusive(20, 50),
        boxHeight: getRandomIntInclusive(20, 50),
        Color: getRandomColor(),
        Speed: getRandomIntInclusive(0.5, 3),
    });
}
