/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const buttonDice = document.getElementById("button-dice");

buttonDice.addEventListener("click", function () {
    const buttonDice = document.getElementById("button-dice");

    const userNumber = getRndNumber(1, 6);
    const pcNumber = getRndNumber(1, 6);

    console.log("User" + userNumber);
    console.log("PC" + pcNumber);

    if (userNumber > pcNumber) {
        console.log("L'utente ha vinto")
    }

    else {
        console.log("Il computer ha vinto")
    }


})
