"use strict";
// TypeScript Code für die Simulation der Kanonenkugel
// Canvas Setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Kugelkonstanten und physikalische Parameter
const g = 9.81; // Schwerkraft in m/s²
let angle = 45; // Abschusswinkel (in Grad)
let speed = 50; // Anfangsgeschwindigkeit (in m/s)
// Position und Geschwindigkeit der Kugel
let x = 0; // Startposition x
let y = canvas.height; // Startposition y (unten auf dem Canvas)
let vx; // Horizontale Geschwindigkeit
let vy; // Vertikale Geschwindigkeit
// Delta Zeit zwischen den Berechnungen
const deltaT = 0.016; // Etwa 60 fps
// Umrechnung von Grad in Bogenmaß
const toRadians = (degrees) => degrees * (Math.PI / 180);
// Kugel abfeuern
function shootCannon() {
    // Setze die Anfangswerte für die Position und Geschwindigkeit
    x = 0;
    y = canvas.height; // Start unten
    vx = speed * Math.cos(toRadians(angle)); // Anfangsgeschwindigkeit in x-Richtung
    vy = -speed * Math.sin(toRadians(angle)); // Anfangsgeschwindigkeit in y-Richtung (nach oben gerichtet)
    // Starte die Animation
    requestAnimationFrame(update);
}
// Aktualisiere die Position der Kugel
function update() {
    // Lösche das Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Zeichne die Kanone
    drawCannon();
    // Berechne die neue Position
    x += vx * deltaT;
    vy += g * deltaT; // Schwerkraft wirkt auf vy
    y += vy * deltaT;
    // Zeichne die Kugel
    drawBall(x, y);
    // Stoppe, wenn die Kugel den Boden erreicht
    if (y < canvas.height) {
        requestAnimationFrame(update);
    }
}
// Zeichne die Kugel
function drawBall(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}
// Zeichne die Kanone
function drawCannon() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(50 * Math.cos(toRadians(angle)), canvas.height - 50 * Math.sin(toRadians(angle)));
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;
    ctx.stroke();
}
// Eventlistener für den Abschuss
document.getElementById('shoot').addEventListener('click', shootCannon);
// Eventlistener für die Winkelanpassung
document.getElementById('angle').addEventListener('input', (event) => {
    angle = parseFloat(event.target.value);
});
// Eventlistener für die Geschwindigkeitseinstellung
document.getElementById('speed').addEventListener('input', (event) => {
    speed = parseFloat(event.target.value);
});
