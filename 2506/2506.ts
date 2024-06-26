document.body.style.backgroundColor = "lightblue";



let Color: string[] = [
    "red",
    "blue",
    "yellow",
    "pink",
    "black",
    "green",
    "white",
    "lightgreen"
]

function getRandomIntInclusive(min:number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomIntInclusive(1, 1000) + "px";

function getRandomArrayElement<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


function createRandomDivs(): void {
    const container = document.createElement("div");
    container.style.height = "100px";
    container.style.width = "100px";
    document.body.appendChild(container);

    const numberOfDivs = Math.floor(Math.random() * 10) +1;

    for (let i = 0; i < numberOfDivs; i++) {
        const newDiv = document.createElement("div");
        newDiv.style.display = "flex";
        newDiv.style.backgroundColor = getRandomArrayElement(Color);
        newDiv.style.width = randomInt;
        newDiv.style.height = randomInt;
        newDiv.style.marginLeft = randomInt;
        newDiv.style.marginRight = randomInt;
        newDiv.style.marginTop = randomInt;
        newDiv.style.marginBottom = randomInt;
        newDiv.style.border = "2px solid black";
        container.appendChild(newDiv); 
    }

}


createRandomDivs();
