let spanElement: HTMLSpanElement = document.querySelector("span#IDHello")!;
spanElement.textContent = "World";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "Hello"
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";

console.log(newSpan);

let i: number = 0;

do {
    i++;
    console.log(i);
    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent = "Hello"
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
} while (i < 10)