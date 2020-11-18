

let playerName = prompt("Welkom! Wat is je naam?");

if (playerName != null) {
    alert('Hey ' + playerName + '!');
}

let lowestValue = prompt("Welk laagste getal je kunnen raden?");
let highestValue = prompt("Welk laagste getal je kunnen raden?");

let getRandomInt = function (one, two) {
    one = Math.ceil(one);
    two = Math.floor(two);
    return Math.floor(Math.random() * (two - one) + one);
}

const numberToGuess = getRandomInt(lowestValue, highestValue);
let timesGuessed = 0;

while (true) {
    let guessNumber = prompt('Voer een nummer in van 0 tot 25 om te beginnen met raden...');
    timesGuessed++;

    if (guessNumber == null) {
        break;
    }

    if (guessNumber != null) {
        if (guessNumber == numberToGuess) {
            alert('Woop Woop! Gefeliciteerd je hebt gewonnen!');
            alert('Dag ' + playerName + '. Tot de volgende keer!');
            break;
        }

        if (timesGuessed === 5 || guessNumber == null) {
            alert('Je hebt verloren, alle pogingen zijn gebruikt. Bye Felicia!');
            break;
        }

        else {
            alert('Dat is niet correct');
            alert('Je ' + timesGuessed + "e poging van de 5 is gebruikt...");
        }
    }

}




