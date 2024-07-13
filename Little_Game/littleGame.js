"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let Characters = [];
function generatePlayer() {
    let player = {
        x: 400,
        y: 400,
        width: 30,
        height: 30,
        color: "red",
    };
    Characters.push(player);
}
function drawPlayer() {
    let playerOne = new Path2D();
    playerOne.rect(Characters[0].x, Characters[0].y, Characters[0].width, Characters[0].height);
    ctx.fillStyle = Characters[0].color;
    ctx.fill(playerOne);
}
document.addEventListener("keydown", _event => {
    switch (_event.key) {
        case "w":
            Characters[0].y = Characters[0].y - 3;
            break;
        case "s":
            Characters[0].y = Characters[0].y + 3;
            break;
        case "a":
            Characters[0].x = Characters[0].x - 3;
            break;
        case "d":
            Characters[0].x = Characters[0].x + 3;
            break;
        case "aw":
            Characters[0].y = Characters[0].y - 3;
            Characters[0].x = Characters[0].x - 3;
            break;
        case "as":
            Characters[0].y = Characters[0].y + 3;
            Characters[0].x = Characters[0].x - 3;
            break;
        case "dw":
            Characters[0].y = Characters[0].y - 3;
            Characters[0].x = Characters[0].x + 3;
            break;
        case "ds":
            Characters[0].y = Characters[0].y + 3;
            Characters[0].x = Characters[0].x + 3;
            break;
    }
});
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    requestAnimationFrame(animationFrame);
}
generatePlayer();
drawPlayer();
console.log(Characters);
requestAnimationFrame(animationFrame);
