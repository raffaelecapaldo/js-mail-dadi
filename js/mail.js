/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

const buttonMail = document.getElementById("button-mail");


buttonMail.addEventListener("click", function () {
    const boxAlert = document.getElementById("alert");
    const mailList = ["raffaelecapaldo@alice.it", "samuelpanicucci@gmail.com", "cleliafradella@libero.it", "marcoacciari@boolean.careers"];
    let userMail = document.getElementById("user-mail").value;
    let mailFinded;
    for (i = 0; i <= mailList.length; i++) {
        if (userMail == mailList[i]) {
            mailFinded = "finded";
        }
    }

    if (mailFinded) {
        console.log("Mail trovata");
        boxAlert.innerHTML = `<p class="green text-center">Sei nella VIP list</p>`
        
    }

    else if (!userMail.includes("@" || userMail.includes("."))) {
        console.log("Mail non valida");
        boxAlert.innerHTML = `<p class="red text-center">Mail non valida</p>`

    }

    else {
        console.log("Mail non presente");
        boxAlert.innerHTML = `<p class="red text-center">Non sei nella VIP list</p>`

    }

})
