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

interface boxData{
    positionX: number;
    positionY: number;
    boxWidth: number;
    boxHeight: number;
    Color: string;
    Speed: number;
    path: Path2D;
}

let boxes: boxData[] = [];

function generateBoxes(): void {
    for(let i: number = 0; i < 12; i++){
        boxes.push({
            positionX: getRandomIntInclusive(10, 1400),
            positionY: getRandomIntInclusive(10, 700),
            boxWidth: getRandomIntInclusive(20, 50),
            boxHeight: getRandomIntInclusive(20, 50),
            Color: getRandomColor(),
            Speed: getRandomIntInclusive(0.5, 3),
            path: new Path2D(),
        })
        drawBoxes();
    }
}

function drawBoxes(): void {
    for(let bo: number = 0; bo < boxes.length; bo++){
        let pathBox = new Path2D();
        pathBox.rect(boxes[bo].positionX, boxes[bo].positionY, boxes[bo].boxWidth, boxes[bo].boxHeight);
        ctx.fillStyle = boxes[bo].Color;
        ctx.fill(pathBox);
    }
}

function updateBoxes(): void {
    for(let j: number = 0; j < 12; j++){
        if(boxes[j].positionX < canvas.width){
            boxes[j].positionX = boxes[j].positionX + 5;
        }else{
            boxes[j].positionX = 0
        }
    }
}

function clickBoxes(_event:MouseEvent): void{
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;

    for(let i = 0; i < boxes.length; i++){
        let box: boxData = boxes[i];
        if(ctx.isPointInPath(box.path, x, y)){
            boxes[i].Color = "white";
        }
    }
}




function animationFrame(): void{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBoxes();
    drawBoxes()

    requestAnimationFrame(animationFrame);
}

generateBoxes()
canvas.addEventListener("click", clickBoxes);
console.log(boxes);
requestAnimationFrame(animationFrame);
