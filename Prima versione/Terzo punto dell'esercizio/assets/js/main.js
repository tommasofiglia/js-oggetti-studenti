/***********************************
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

***********************************/

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

console.log(studenti);

var nuovoUtente = {
  Nome: prompt("Scrivi il tuo nome"),
  Cognome: prompt("Scrivi il tuo cognome"),
  Età: Number(prompt("Indica la tua età"))
}

studenti.push(nuovoUtente);

document.getElementById('dati_studenti').innerHTML = "<ul><li>  Nome: " + romina.Nome + "</li> <li> Cognome: " + romina.Cognome + "</li> <li> Età: " + romina.Età + "</li> </ul>" + "<ul><li>  Nome: " + mariapia.Nome + "</li> <li> Cognome: " + mariapia.Cognome + "</li> <li> Età: " + mariapia.Età + "</li> </ul>" + "<ul><li>  Nome: " + tommaso.Nome + "</li> <li> Cognome: " + tommaso.Cognome + "</li> <li> Età: " + tommaso.Età + "</li></ul>" + "<ul><li>  Nome: " + nuovoUtente.Nome + "</li> <li> Cognome: " + nuovoUtente.Cognome + "</li> <li> Età: " + nuovoUtente.Età + "</li></ul>";

document.getElementById('tabella_due').innerHTML = "<tr> <td> <strong>Nome</strong> </td> <td>" + romina.Nome + "</td> <td>" + mariapia.Nome + "</td> <td>" + tommaso.Nome +  "</td> <td>" + nuovoUtente.Nome + "</tr> <tr> <td> <strong>Cognome</strong> </td> <td>" + romina.Cognome + "</td> <td>" + mariapia.Cognome + "</td> <td>" + tommaso.Cognome +  "</td> <td>" + nuovoUtente.Cognome +  "</td> </tr>" + "<tr> <td> <strong>Età</strong> </td> <td>" + romina.Età + "</td> <td>" + mariapia.Età + "</td> <td>" + tommaso.Età +  "</td> <td>" + nuovoUtente.Età +  "</td> </tr>";
