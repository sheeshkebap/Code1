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
let circles = [];
let boxes = [];
canvas.addEventListener("click", hdnClick);
function hdnClick(_event) {
    let x = Math.floor(Math.random() * 2 + 1);
    if (x == 2) {
        circles.push({
            positionX: _event.offsetX,
            positionY: _event.offsetY,
            radius: Math.random() * 100 + 20,
            Color: getRandomColor(),
            Speed: 0.5,
        });
        drawCircles();
    }
    else {
        boxes.push({
            positionX: _event.offsetX,
            positionY: _event.offsetY,
            boxWidth: getRandomIntInclusive(10, 100),
            boxHeight: getRandomIntInclusive(10, 100),
            Color: getRandomColor(),
            Speed: 0.5,
        });
        drawBoxes();
    }
}
requestAnimationFrame(animationFrame);
function drawCircles() {
    for (let cr = 0; cr < circles.length; cr++) {
        let pathCircle = new Path2D();
        pathCircle.arc(circles[cr].positionX, circles[cr].positionY, circles[cr].radius, 0, Math.PI * 2, false);
        ctx.fillStyle = circles[cr].Color;
        ctx.fill(pathCircle);
    }
}
function drawBoxes() {
    for (let bo = 0; bo < boxes.length; bo++) {
        let pathBox = new Path2D();
        pathBox.rect(boxes[bo].positionX, boxes[bo].positionY, boxes[bo].boxWidth, boxes[bo].boxHeight);
        ctx.fillStyle = boxes[bo].Color;
        ctx.fill(pathBox);
    }
}
function updateCircle() {
    for (let i = 0; i < circles.length; i++) {
        if (circles[i].positionY < 800 - circles[i].radius) {
            circles[i].Speed = circles[i].Speed + 0.1;
            circles[i].positionY += circles[i].Speed;
        }
    }
}
function updateBox() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].positionY < 800 - boxes[i].boxHeight) {
            boxes[i].Speed = boxes[i].Speed + 0.1;
            boxes[i].positionY += boxes[i].Speed;
        }
    }
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateCircle();
    drawCircles();
    updateBox();
    drawBoxes();
    requestAnimationFrame(animationFrame);
}
