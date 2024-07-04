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
}

let boxes: boxData[] = [];

for(let i: number = 0; i < 12; i++){
    boxes.push({
        positionX: getRandomIntInclusive(10, 1400),
        positionY: getRandomIntInclusive(10, 700),
        boxWidth: getRandomIntInclusive(20, 50),
        boxHeight: getRandomIntInclusive(20, 50),
        Color: getRandomColor(),
        Speed: getRandomIntInclusive(0.5, 3),
    })
}