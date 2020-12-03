/***********************************
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

***********************************/

/* Prima parte */

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

/* Seconda parte */

var studenti = [
  {
    Nome: 'Romina',
    Cognome: 'Trazzi',
    Età: 32
  },
  {
    Nome: 'Mariapia',
    Cognome: 'Gianguzzi',
    Età: 30
  },
  {
    Nome: 'Tommaso',
    Cognome: 'Figlia',
    Età: 25
  }
];

var romina = studenti[0];
var mariapia = studenti[1];
var tommaso = studenti[2];

document.getElementById('dati_studenti').innerHTML = "<ul><li>  Nome: " + romina.Nome + "</li> <li> Cognome: " + romina.Cognome + "</li> </ul>" + "<ul><li>  Nome: " + mariapia.Nome + "</li> <li> Cognome: " + mariapia.Cognome + "</li> </ul>" + "<ul><li>  Nome: " + tommaso.Nome + "</li> <li> Cognome: " + tommaso.Cognome + "</li> </ul>"

document.getElementById('tabella_due').innerHTML = "<tr> <td> <strong>Nome</strong> </td> <td>" + romina.Nome + "</td> <td>" + mariapia.Nome + "</td> <td>" + tommaso.Nome +  "</td> </tr> <tr> <td> <strong>Cognome</strong> </td> <td>" + romina.Cognome + "</td> <td>" + mariapia.Cognome + "</td> <td>" + tommaso.Cognome +  "</td> </tr>";

console.log(studenti);
