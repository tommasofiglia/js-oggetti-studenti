/********************* CONSEGNA *************************
Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*********************************************************/


$(function () {

//Oggetto che descrive uno studente
var studente = {
  nome: "Tommaso",
  cognome: "Figlia",
  età: 25
}

console.log(studente);

//Array di oggetti di studenti
var studenti = [
  {
    nome: "Tommaso",
    cognome: "Figlia",
    età: 25
  },
  {
    nome: "Pinco",
    cognome: "Pallo",
    età: 32
  },
  {
    nome: "Francesco",
    cognome: "Pannofino",
    età: 56
  },
  {
    nome: "Giuseppe",
    cognome: "Conte",
    età: 53
  }
]

studenti.forEach((item) => {
  console.log(item.nome + " " + item.cognome);
});

//Aggiunta di uno studente indicato dall'utente attraverso i prompt

studenti.push(
  {
    nome: prompt("Inserisci il nome di un nuovo studente"),
    cognome: prompt("Inserisci il cognome del nuovo studente"),
    età: Number(prompt("Inserisci l'età del nuovo studente"))
  }
)

console.log(studenti);

//Stampa dell'elenco degli studenti in una lista

studenti.forEach((item) => {
var nomeStudente = item.nome;
var cognomeStudente = item.cognome;
var etàStudente = item.età;

var htmlMarkup = `
  <li> <strong> Nome: </strong> ${nomeStudente}  <br>  <strong> Cognome: </strong> ${cognomeStudente} <br> <strong> Età: </strong> ${etàStudente}</li>
  `;

  $('#lista_studenti').append(htmlMarkup);
});





});
