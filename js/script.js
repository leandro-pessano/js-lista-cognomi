// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
// Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova

// Nome delle variabili
var listaCognomi, inputCognome, toUp, toLow;

// Definizione variabili
listaCognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
inputCognome = prompt('Inserisci il tuo cognome');
toUp = inputCognome.charAt(0).toUpperCase();
toLow = inputCognome.substring(1).toLowerCase();
inputCognome = toUp + toLow;
listaCognomi.push(inputCognome);

// Stampa
console.log(listaCognomi);
console.log(listaCognomi.sort());
console.log(listaCognomi.indexOf(inputCognome) + 1);
