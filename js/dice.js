/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const buttonDice = document.getElementById("button-dice");

buttonDice.addEventListener("click", function () {
    const diceUser = document.getElementById("user-number");
    const dicePC = document.getElementById("pc-number");
    const spanWinner = document.getElementById("winner");


    //esegui la funzione un utility.js per assegnare un valore random ai due giocatori da 1 a 6
    const userNumber = getRndNumber(1, 6);
    const pcNumber = getRndNumber(1, 6);

    console.log("User" + userNumber);
    console.log("PC" + pcNumber);
    //Scrivi i numeri nell'html
    diceUser.innerHTML = `<p class="text-center fs-3 m-1" id="mybg">Il tuo dado</p>
    <img src="img/${userNumber}.svg" alt="">`
    dicePC.innerHTML = ` <p class="text-center fs-3 m-1" id="mybg">Il dado del PC</p>
    <img src="img/${pcNumber}.svg" alt="">`


    if (userNumber == pcNumber) { //Se i due numberi sono uguali, è pareggio, scrivi nell'html
        console.log("Pareggio")
        spanWinner.className = "orange result";
        spanWinner.innerHTML = "Pareggio! Ritenta.";
    }
    else if (userNumber > pcNumber) { // Se il numero dell'utente è maggiore a quello del PC, vince il primo, scrivi nell'html
        console.log("L'utente ha vinto");
        spanWinner.className = "green result";
        spanWinner.innerHTML = "Hai vinto! Congratulazioni.";

    }

    else { // Altrimenti vince il PC, scrivi nell'html
        console.log("Il computer ha vinto");
        spanWinner.className = "red result";
        spanWinner.innerHTML = "Hai perso, ritenta.";

    }

    //Al click mostra il box di gioco
    document.getElementById("box-game").classList.remove("d-none");

})
