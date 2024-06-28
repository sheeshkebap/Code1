document.body.style.backgroundColor = "lightblue";

// possible colors
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

let text: string[] = [
    "Hi, there.",
    "Yo",
    "white",
    "black",
    "red dead",
    "tsssssss"
]

let fontfamilie: string[] = [
    "Times New Roman",
    "Courier New",
    "Arial",
    "Papyrus"
]


// random Number
function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random Element form a Array
function getRandomArrayElement<T>(arr: T[]): T {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function createRandomElement(): HTMLElement {
    const element = document.createElement("div");

    element.style.position = "absolute";
    element.style.width = `${getRandomIntInclusive(50, 100)}px`;
    element.style.height = `${getRandomIntInclusive(50, 100)}px`;

    element.style.top = `${getRandomIntInclusive(0, window.innerHeight - 100)}px`;
    element.style.left = `${getRandomIntInclusive(0, window.innerWidth - 100)}px`;

    element.style.backgroundColor = getRandomArrayElement(Color);
    element.style.border = "2px solid black";
    element.style.padding = "5px";
    element.style.color = getRandomArrayElement(Color);

    element.textContent = getRandomArrayElement(text);
    element.style.fontFamily = getRandomArrayElement(fontfamilie);
    element.style.fontSize = `${getRandomIntInclusive(5, 35)}px`;

    return element;
}

function createRandomÉlements(): void {
    const numElements = getRandomIntInclusive(5, 1000);

    for (let i = 0; i < numElements; i++) {
        const randomElement = createRandomElement();
        document.body.appendChild(randomElement);
    }
}




document.body.addEventListener("click", hdnClick);

function hdnClick(_event:Event): void {
    let target: HTMLElement = <HTMLElement>_event.target;
    if (target == document.body)
        return;
    target.style.backgroundColor = getRandomArrayElement(Color);
    target.style.fontSize = "14px";
    target.textContent = "smash!";
    console.log(_event.currentTarget);
}

document.body.addEventListener("dblclick", dbClick);

function dbClick(_event:Event): void {
    let target2: HTMLElement = <HTMLElement>_event.target;
    if (target2 == document.body)
        return;
    target2.style.top = `${getRandomIntInclusive(0, window.innerHeight - 100)}px`;
    target2.style.top = `${getRandomIntInclusive(0, window.innerWidth - 100)}px`
    console.log(_event.currentTarget);
}



window.onload = () => {
    createRandomÉlements();
}

