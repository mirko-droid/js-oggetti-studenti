/* js-oggetti-studenti
Istruzioni:
Creare un oggetto che descriva uno studente con le seguenti proprietà: 
nome, cognome e età. 
Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. 
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var esercizio = {
  repo : "js-oggetti-studenti",
  istruzioni: ["Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.", "Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome", "Dare la possibilità all'utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età." ],
  augurio: "che la forza degli oggetti sia con voi :muscle:"
} */

$(function() {
// 1. Creare un oggetto che descriva uno studente con le seguenti proprietà: 

    var studente =       // inizializzo l'oggetto in una variabile
    {   // apriamo parentesi graffe (indica che stiamo parlando di un oggetto) 
        nome : 'pippo',  // inserisco il nome della proprietà (key) e il suo valore separato da [ : ] come in css  
        cognome : 'franco',  // se abbiamo più proprietà le divido con una [ , ] . 
        età : 23
    }; 
    console.log(studente);
// 2. Stampare a schermo attraverso il for in tutte le proprietà.
var risultatoCard = ' '; // inizializzo la variabile con una stringa per ottenere nel risultato output tutte le proprietà e i valori, semplicemente concatendando in html qesta variabile e gli altri elementi che desideriamo vedere come stringa in html attraverso l'operatore ( + )  e il for in

for (var key in studente) {
   risultatoCard += ' ' + studente[key];  // forma contratta di (risultatoCard = risultatoCard + ' ' + studente[key];)
}

//Stampare a schermo
$('#elenco_proprietà').html(risultatoCard);

// 3. Creare un array di oggetti di studenti. 

var studenti = [
    {
        name : 'Antonio',
        cognome : 'Sartori',
        età : 23
    },
    {
        name : 'Paolo',
        cognome : 'Bianchi',
        età : 23
    },
    {
        name : 'Giacomo',
        cognome : 'Rossi',
        età : 23
    }
];
console.log(studenti);

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i < studenti.length; i++) {
    //trasformo gli oggetti dell'array in array così da poterli usare con gli strumenti degli array
    var myObjectsArrayTranform = Object.values(studenti[i]);
    //ciclo all'interno dell'array creato il mio blocco di codice per mostrare a video(o stampare in console) i primi due elementi dell'array (nome e cognome)
    for (var i = 0; i < myObjectsArrayTranform.length -1; i++) {
        console.log(myObjectsArrayTranform[0] + ' ' + myObjectsArrayTranform[1]);
    }

}




});