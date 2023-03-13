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
    let mailFinded;     
   for (i = 0; i <= mailList.length; i++) {
    if (userMail == mailList[i]) {
        mailFinded = mailList[i]; 
    }}
   
    if (mailFinded) {
        console.log ("Mail trovata")
    }

    else {
        console.log("Mail non trovata")
    }

})