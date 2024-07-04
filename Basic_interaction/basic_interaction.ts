const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

function getRandomColor(): string {
    const letters = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface circleData {
    positionX: number;
    positionY: number;
    radius: number;
    Color: string;
    Speed: number;
}

interface boxData{
    positionX: number;
    positionY: number;
    boxWidth: number;
    boxHeight: number;
    Color: string;
    Speed: number;
}

let circles: circleData[] = [];
let boxes: boxData[] = [];

canvas.addEventListener("click", hdnClick);

function hdnClick(_event:MouseEvent): void {
    let x: number = Math.floor(Math.random() * 2 + 1);
    if(x == 2){
        circles.push({
            positionX: _event.offsetX,
            positionY: _event.offsetY,
            radius: Math.random() * 100 + 20,
            Color: getRandomColor(),
            Speed: 0.5,
        })
        drawCircles();
    }else{
        boxes.push({
            positionX: _event.offsetX,
            positionY: _event.offsetY,
            boxWidth: getRandomIntInclusive(10, 100),
            boxHeight: getRandomIntInclusive(10, 100),
            Color: getRandomColor(),
            Speed: 0.5,
        })
        drawBoxes();
    }
}

requestAnimationFrame(animationFrame);

function drawCircles(): void{
    for(let cr: number = 0; cr < circles.length; cr++){
        let pathCircle = new Path2D();
        pathCircle.arc(circles[cr].positionX, circles[cr].positionY, circles[cr].radius, 0, Math.PI * 2, false);
        ctx.fillStyle = circles[cr].Color;
        ctx.fill(pathCircle);
    }
}

function drawBoxes(): void{
    for(let bo: number = 0; bo < boxes.length; bo++){
        let pathBox = new Path2D();
        pathBox.rect(boxes[bo].positionX, boxes[bo].positionY, boxes[bo].boxWidth, boxes[bo].boxHeight);
        ctx.fillStyle = boxes[bo].Color;
        ctx.fill(pathBox);
    }
}

function updateCircle(): void{
    for(let i: number = 0; i < circles.length; i++){
        if(circles[i].positionY < 800 - circles[i].radius){
           circles[i].Speed = circles[i].Speed + 0.1;
           circles[i].positionY += circles[i].Speed;
        }
    }
}

function updateBox(): void {
    for(let i: number = 0; i < boxes.length; i++){
        if(boxes[i].positionY < 800 - boxes[i].boxHeight){
            boxes[i].Speed = boxes[i].Speed + 0.1;
            boxes[i].positionY += boxes[i].Speed;
        }
    }
}

function animationFrame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateCircle();
    drawCircles();
    updateBox();
    drawBoxes();






    requestAnimationFrame(animationFrame);
}
