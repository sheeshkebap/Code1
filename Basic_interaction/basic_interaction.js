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
let circles = [];
canvas.addEventListener("click", hdnClick);
function hdnClick(_event) {
    circles.push({
        positionX: _event.offsetX,
        positionY: _event.offsetY,
        radius: Math.random() * 100 + 20,
        Color: getRandomColor(),
    });
    drawCircles();
    requestAnimationFrame(animationFrame);
}
function drawCircles() {
    for (let cr = 0; cr < circles.length; cr++) {
        let pathCircle = new Path2D();
        pathCircle.arc(circles[cr].positionX, circles[cr].positionY, circles[cr].radius, 0, Math.PI * 2, false);
        ctx.fillStyle = circles[cr].Color;
        ctx.fill(pathCircle);
    }
}
const SpeedCircle = 0.1;
function updateCircle() {
    for (let i = 0; i < circles.length; i++) {
        circles[i].positionY += SpeedCircle;
        if (circles[i].positionY > 800) {
            circles[i].positionY = canvas.height;
        }
    }
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateCircle();
    drawCircles();
    requestAnimationFrame(animationFrame);
}
