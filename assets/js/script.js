/* //chiedi la mail
var userMail = prompt('Inserisci il tuo indirizzo email');
console.log(userMail);

//controlla se è in un ARRAY
var mailArray = [
  "mario.rossi@gmail.com",
  "luigi.verdi@libero.it",
  "giovanni.bianchi@outlook.com",
  "alessandro.colonna@mail.it",
  "valerio.lundini@indizzo.it"
]
var mailAccepted = false;
for(var i=0; i<mailArray.length; i++){
  var mail = mailArray[i];
  if(mail === userMail){
    mailAccepted = true;
    break;
  }
}
var mailText = "L'email inserita è: '" + userMail + "'.";
if(mailAccepted){
  console.log("mail presente");
  mailText += "<br>L'indirizzo risulta presente nel nostro archivio"
}else{
  console.log("mail assente");
  mailText += "<br>L'indirizzo non risulta presente nel nostro archivio"
}

//messaggio per dire se c'è o meno
document.getElementById('mail').innerHTML = mailText; */




//numero per l'utente
var userNum = parseInt(Math.random() * 6) + 1;
console.log(userNum);

//numero per il computer
var computerNum = parseInt(Math.random() * 6) + 1;
console.log(computerNum);

//confronta
var diceText = "Dado utente: " + userNum + ".<br>Dado computer: " + computerNum + ".<br>";
if(userNum>computerNum){
  diceText += "Utente vince. Complimenti";
}else if(userNum<computerNum){
  diceText += "Computer vince. Mi spiace.";
}else{
  diceText += "Pareggio! Riprova.";
}

//stampa vincitore
document.getElementById('dado').innerHTML = diceText;
