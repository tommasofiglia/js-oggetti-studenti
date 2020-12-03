/***********************************
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

***********************************/

//Creo l'oggetto in grado di descrivere uno studente
var tommaso = {
  Nome: 'Tommaso',
  Cognome: 'Figlia',
  Età: 25
}


//Attraverso for in cicliamo le "chiavi" dell'oggetto, ovvero le proprietà
for (var key in tommaso) {
  console.log(key, tommaso[key]);
  document.getElementById('dati_studente').innerHTML += "<li>" + key + ": " + tommaso[key] + "</li>";
  document.getElementById('tabella_studenti').innerHTML += "<tr><td><strong>" + key + "</strong></td><td>" + tommaso[key] + "</td></tr>";
}
