"use strict";
let UserInput;
UserInput = prompt("Du stehst in einem hellen Raum mit drei Türen. Eine ist 'grün', eine ist 'rot' und die letzte ist 'blau'. Durch welche gehst du?");
switch (UserInput) {
    case "rot":
        UserInput = prompt("Die Tür ist zu. Die Klinke bricht allerdings ab. Welche der beiden verbleibenden Türen willst du öffnen? 'blau' oder 'grün'");
        if (UserInput == "blau") {
            UserInput = prompt("Der Boden unter dir gibt nach! Willst du dich 'festhalten' oder einfach nur 'fallen'?");
            if (UserInput == "festhalten") {
                UserInput = prompt("Du hälst dich an ein Rohr fest, welches jedoch abbricht, weswegen du in die Tiefe fällst. Du landest in einem kalten See in einer riesigen Hölle. Du entdeckst einen Ausgang, der von einem Felsen versperrt ist. Möchtest du diesen mit dem Rohr 'entfernen', die Höhle 'erkunden' oder auf Hilfe 'warten'?");
                switch (UserInput) {
                    case "entfernen":
                        alert("Du gelangst ins Freie und lebst ein langes, glückliches, aber sehr armes Leben.");
                        break;
                    case "erkunden":
                        alert("Durch das Erkunden lernst du die Höhle besser kennen und kannst Sightseeing-Touren anbieten. Dadurch wirst du sehr reich und lebst zudem ein glückliches langes Leben!");
                        break;
                    default:
                        alert("Du verhungerst und träumst von einem guten Leben, dass an dir vorbei zieht.");
                        break;
                }
            }
            else {
                UserInput = prompt("Du landest in einem kalten See in einer riesigen Hölle. Möchtest du die Höhle 'erkunden' oder auf Hilfe 'warten'?");
                if (UserInput == "erkunden") {
                    alert("Durch das Erkunden lernst du die Höhle besser kennen und kannst Sightseeing-Touren anbieten. Dadurch wirst du sehr reich und lebst zudem ein glückliches langes Leben!");
                }
                else {
                    alert("Du verhungerst und träumst von einem guten Leben, dass an dir vorbei zieht.");
                }
            }
        }
        else {
            alert("Die grüne Tür schleckt dich ab und du stirbst qualvoll!");
        }
        break;
    case "blau":
        UserInput = prompt("Die Tür hat keinen Griff. Du stehst wieder im Raum. Welche Tür möchtest du öffnen? 'blau', 'grün' oder 'rot'");
        switch (UserInput) {
            case "rot":
                UserInput = prompt("Die Tür ist zu. Die Klinke bricht allerdings ab. Welche der beiden verbleibenden Türen willst du öffnen? 'blau' oder 'grün'");
                if (UserInput == "blau") {
                    UserInput = prompt("Der Boden unter dir gibt nach! Willst du dich 'festhalten' oder einfach nur 'fallen'?");
                    if (UserInput == "festhalten") {
                        UserInput = prompt("Du hälst dich an ein Rohr fest, welches jedoch abbricht, weswegen du in die Tiefe fällst. Du landest in einem kalten See in einer riesigen Hölle. Du entdeckst einen Ausgang, der von einem Felsen versperrt ist. Möchtest du diesen mit dem Rohr 'entfernen', die Höhle 'erkunden' oder auf Hilfe 'warten'?");
                        switch (UserInput) {
                            case "entfernen":
                                alert("Du gelangst ins Freie und lebst ein langes, glückliches, aber sehr armes Leben.");
                                break;
                            case "erkunden":
                                alert("Durch das Erkunden lernst du die Höhle besser kennen und kannst Sightseeing-Touren anbieten. Dadurch wirst du sehr reich und lebst zudem ein glückliches langes Leben!");
                                break;
                            default:
                                alert("Du verhungerst und träumst von einem guten Leben, dass an dir vorbei zieht.");
                                break;
                        }
                    }
                    else {
                        UserInput = prompt("Du landest in einem kalten See in einer riesigen Hölle. Möchtest du die Höhle 'erkunden' oder auf Hilfe 'warten'?");
                        if (UserInput == "walk") {
                            alert("Durch das Erkunden lernst du die Höhle besser kennen und kannst Sightseeing-Touren anbieten. Dadurch wirst du sehr reich und lebst zudem ein glückliches langes Leben!");
                            break;
                        }
                        else {
                            alert("Du verhungerst und träumst von einem guten Leben, dass an dir vorbei zieht.");
                            break;
                        }
                    }
                }
                else {
                    alert("Die grüne Tür schleckt dich ab und du stirbst qualvoll!");
                }
                break;
            case "blau":
                alert("Die blaue Tür ist so sauer, dass du sie zweimal öffnen wolltest, obwohl sie keine Griff hat, dass sie dich mit einem Schwert enthauptet!");
                break;
            default:
                alert("Die grüne Tür schleckt dich ab und du stirbst qualvoll!");
                break;
        }
        break;
    case "grün":
        alert("Die grüne Tür schleckt dich ab und du stirbst qualvoll!");
        break;
}
