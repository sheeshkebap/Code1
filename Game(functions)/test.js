"use strict";
let UserInput;
function roteTür() {
    UserInput = prompt("Die Tür ist zu. Die Klinke bricht allerdings ab. Welche der beiden verbleibenden Türen willst du öffnen? 'blau' oder 'grün'");
    if (UserInput == "blau") {
        alert("OK");
    }
    else {
        alert("Die grüne Tür schleckt dich ab und du stirbst qualvoll!");
    }
}
function ersterRaum() {
    UserInput = prompt("Du stehst in einem hellen Raum mit drei Türen. Eine ist 'grün', eine ist 'rot' und die letzte ist 'blau'. Durch welche gehst du?");
    switch (UserInput) {
        case "rot":
            fn(roteTür);
    }
}
