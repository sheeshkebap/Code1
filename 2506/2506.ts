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

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    console.log(_event.currentTarget)
}

window.onload = () => {
    createRandomÉlements();
}

