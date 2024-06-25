let spanElement: HTMLSpanElement = document.querySelector("span#IDHello")!;
spanElement.textContent = "World";

let newSpan: HTMLSpanElement = document.createElement("span");
newSpan.textContent = "Hello";
document.body.appendChild(newSpan);
newSpan.style.backgroundColor = "red";

console.log(newSpan);

let i: number = 0;

do {
    i++;
    console.log(i);
    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent = " Hello";
    document.body.appendChild(newSpan);
    newSpan.style.backgroundColor = "red";
} while (i < 10)

let b: number = 10;

document.body.style.backgroundColor = "lightblue";

let newDiv = document.createElement("div");
newDiv.style.backgroundColor = "black"
newDiv.style.padding = "10px";
newDiv.style.border = "2px solid black";

do {
    b++;
    console.log(b);
    let abs: HTMLBRElement = document.createElement("br");
    document.body.appendChild(abs);
    let secondSpan: HTMLSpanElement = document.createElement("span");
    secondSpan.textContent = "Bye";
    document.body.appendChild(secondSpan);
    document.body.appendChild(newDiv);
} while (i == 10 && b < 30)