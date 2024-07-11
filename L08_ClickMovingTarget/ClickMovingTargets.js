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
function generateBoxes() {
    for (let i = 0; i < 12; i++) {
        boxes.push({
            positionX: getRandomIntInclusive(10, 1400),
            positionY: getRandomIntInclusive(10, 700),
            boxWidth: getRandomIntInclusive(20, 50),
            boxHeight: getRandomIntInclusive(20, 50),
            Color: getRandomColor(),
            Speed: getRandomIntInclusive(0.5, 5),
            path: new Path2D(),
        });
        drawBoxes();
    }
}
function drawBoxes() {
    for (let bo = 0; bo < boxes.length; bo++) {
        let pathBox = new Path2D();
        pathBox.rect(boxes[bo].positionX, boxes[bo].positionY, boxes[bo].boxWidth, boxes[bo].boxHeight);
        ctx.fillStyle = boxes[bo].Color;
        ctx.fill(pathBox);
        boxes[bo].path = pathBox;
    }
}
function updateBoxes() {
    for (let j = 0; j < 12; j++) {
        if (boxes[j].positionX < canvas.width) {
            boxes[j].positionX = boxes[j].positionX + boxes[j].Speed;
        }
        else {
            boxes[j].positionX = 0;
        }
    }
}
function clickBoxes(_event) {
    let x = _event.offsetX;
    let y = _event.offsetY;
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (ctx.isPointInPath(box.path, x, y)) {
            boxes[i].Color = "white";
            console.log("hit");
            return;
        }
    }
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBoxes();
    drawBoxes();
    requestAnimationFrame(animationFrame);
}
generateBoxes();
canvas.addEventListener("click", clickBoxes);
console.log(boxes);
requestAnimationFrame(animationFrame);
