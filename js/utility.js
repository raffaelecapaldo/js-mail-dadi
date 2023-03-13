//FUNZIONE PER GENERARE NUMERO CASUALE TRA VAL MIN E MAX (valore massimo incluso)

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }