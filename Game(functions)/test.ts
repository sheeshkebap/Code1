console.log("Hello")

let UserInput: string;

function roteTür():void {
    UserInput = prompt("Die Tür ist zu. Die Klinke bricht allerdings ab. Welche der beiden verbleibenden Türen willst du öffnen? 'blau' oder 'grün'")!;
        if(UserInput=="blau") {
            blaueTür()
        } else {
            alert("Die grüne Tür schleckt dich ab und du stirbst qualvoll!"); ersterRaum()
        }
}

function blaueTür():void{
    UserInput = prompt("Mit der Klinke kannst du die Tür öffnen. Du schreitest durch sie hindurch. Allerdings gibt der Boden unter dir nach. Willst du dich irgendwo 'festhalten' oder einfach nur 'fallen'?")!;
        if(UserInput=="festhalten"){
            HöhleRohr()
        } else {
            Höhle()
        }

}

function HöhleRohr():void{
    UserInput = prompt("Du hälst dich an ein Rohr fest, welches jedoch abbricht, weswegen du in die Tiefe fällst. Du landest in einem kalten See in einer riesigen Hölle. Du entdeckst einen Ausgang, der von einem Felsen versperrt ist. Möchtest du diesen mit dem Rohr 'entfernen', die Höhle 'erkunden' oder auf Hilfe 'warten'?")!;
     switch(UserInput) {
        case "entfernen":
            alert("Du gelangst ins Freie und lebst ein langes, glückliches, aber sehr armes Leben.");
            break;
        case "erkunden":
            alert("Durch das Erkunden lernst du die Höhle besser kennen und kannst Sightseeing-Touren anbieten. Dadurch wirst du sehr reich und lebst zudem ein glückliches langes Leben!")
        default:
            alert("Du verhungerst und träumst von einem guten Leben, dass an dir vorbei zieht."); ersterRaum();
            break;
     }
}

function Höhle():void{
    UserInput = prompt("Du landest in einem kalten See in einer riesigen Hölle. Möchtest du die Höhle 'erkunden' oder auf Hilfe 'warten'?")!;
        if(UserInput=="erkunden"){
            alert("Durch das Erkunden lernst du die Höhle besser kennen und kannst Sightseeing-Touren anbieten. Dadurch wirst du sehr reich und lebst zudem ein glückliches langes Leben!")
        } else {
            alert("Du verhungerst und träumst von einem guten Leben, dass an dir vorbei zieht."); ersterRaum();
        }
}

function ersterRaum():void
{
    UserInput = prompt("Du stehst in einem hellen Raum mit drei Türen. Eine ist 'grün', eine ist 'rot' und die letzte ist 'blau'. Durch welche gehst du?")!;

        switch(UserInput) {
            case "rot":
                roteTür();
                break;
            case "blau":
                alert("Die Tür hat keine Griff! Du gehst wieder zurück."); ersterRaum();
                break;
            default:
                alert("Die grüne Tür schleckt dich ab und du stirbst qualvoll!"); ersterRaum();
                break;
        }
}

ersterRaum();
