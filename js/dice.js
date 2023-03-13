/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const buttonDice = document.getElementById("button-dice");

buttonDice.addEventListener("click", function () {
    const buttonDice = document.getElementById("button-dice");
    const spanUser = document.getElementById("user-number");
    const spanPC = document.getElementById("pc-number");
    const spanWinner = document.getElementById("winner");


//esegui la funzione un utility.js per assegnare un valore random ai due giocatori da 1 a 6
    const userNumber = getRndNumber(1, 6); 
    const pcNumber = getRndNumber(1, 6);

    console.log("User" + userNumber);
    console.log("PC" + pcNumber);
//Scrivi i numeri nell'html
    spanUser.innerHTML = userNumber;
    spanPC.innerHTML = pcNumber;


    if (userNumber == pcNumber) { //Se i due numberi sono uguali, è pareggio, scrivi nell'html
        console.log("Pareggio")
        spanWinner.className = "orange result";
        spanWinner.innerHTML = "Pareggio";
    }
    else if (userNumber > pcNumber) { // Se il numero dell'utente è maggiore a quello del PC, vince il primo, scrivi nell'html
        console.log("L'utente ha vinto");
        spanWinner.className = "green result";
        spanWinner.innerHTML = "Hai vinto!";

    }

    else { // Altrimenti vince il PC, scrivi nell'html
        console.log("Il computer ha vinto");
        spanWinner.className = "red result";
        spanWinner.innerHTML = "Hai vinto la CPU!";

    }

    //Al click mostra il box di gioco
    document.getElementById("box-game").classList.remove("d-none");

})
