/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
------------------------------------------------------------------------------
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


let userMail = document.getElementById("user-mail").value;
const buttonMail = document.getElementById("button-mail");
const mailList = ["raffaelecapaldo@alice.it", "samuelpanicucci@gmail.com", "cleliafradella@libero.it", "marcoacciari@boolean.careers"];


buttonMail.addEventListener("click", function() {
    let userMail = document.getElementById("user-mail").value;
    let mailOk;     
    for (let i = 0; i <= mailList.length - 1 ; i++) { //CICLO PER CONFRONTARE OGNI INDICE DELLA LISTA
        console.log(userMail);
        console.log(mailList[i]);
mailOk = (!userMail.includes("@") || !userMail.includes(".")) ? "notmail" : (userMail == mailList[i]) ? "true":"false"; //Se non c'è la chiocciola in userMail, mailOk diventa notmail, altrimenti viene comparato con la lista, se è presente diventa true
    }

    console.log(mailOk);

if (mailOk == "notmail") { //Se mailOk è notmail, messaggio di errore NO MAIL
    console.log("Formato mail non corretto");
}

else if (mailOk == "true") { //Se mailOk è true, messaggio presente nella lista
    console.log("Mail presente");
}
else  // Di conseguenza, se le due sono false, messaggio la mail non è presente nella lista
    console.log("Mail non presente");

})