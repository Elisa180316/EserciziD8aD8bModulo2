
//ESERCIZI JAVASCRIPT//

//21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"://

//let x = "John"; //Creo variabile X//
//let y = "Doe"; //Creo variabile Y//
//console.log(x + " <> " + y); //Stampo le due variabili divise da un carattere scelto//


//22) Crea un oggetto con le seguenti proprietà: name, surname, email//

//const persona = { //Creo la costante//
//Inserisco i tre valori//
//	nome: "Elisa",
	//cognome: "Fambrini",
	//email: "elisa.fambrini@yahoo.it"
//};

//console.log(persona) //Stampo la costante//


// 23)Cancella la proprietà email dall'oggetto appena creato//

//delete persona.email; //Seleziono il dato da eliminare ed aggiungo delete per cancellarlo//

//console.log(persona.email); // Richiedo la Stampa  della proprietà cancellata

//24) Crea un array contenente 10 stringhe//

//const verdura = ["carota", "zucca", "finocchio", "zucchino", "peperone", "cavolo", "cavolfiore", "cipolla", "radicchio", "insalata",]; //Creo un costante con 10 stringhe tra [//]

//console.log(verdura); //Stampo la costante//


// 25) Mostra in console ogni stringa del precedente array//

//  Metodo uno://
//const verdura = ["carota", "zucca", "finocchio", "zucchino", "peperone", "cavolo", "cavolfiore", "cipolla", "radicchio", "insalata",]; //Creo un costante con 10 stringhe tra [//]

//for (let i = 0; i < verdura.length; i++) { //Ciclo for che itera tra le stringhe//
  //console.log(verdura[i]); //Stampo la costante in riferimento al ciclo
//}
//  Metodo due: Stampo la costante indicando l'indice di ogni stringa//
//console.log(verdura[0]); 
//console.log(verdura[1]);
//console.log(verdura[2]);
//console.log(verdura[3]);
//console.log(verdura[4]);
//console.log(verdura[5]);
//console.log(verdura[6]);
//console.log(verdura[7]);
//console.log(verdura[8]);
//console.log(verdura[9]);//

// 26) Crea un array contenente 100 numeri random//

//let numbers = []; //Dichiaro la variabile con array vuoto//
//for (let i = 0; i < 100; i++) { //Ciclo for che indica di arrivare fino a 100//
 // numbers[i] = Math.floor(Math.random() * 100); //  Genera numeri random tra 0 e 1,poi li moltiplica x 100 per avere numeri tra 0 e 100.// 
//}

// 27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato//
//Le funzioni Math.max e Math.min vengono utilizzate per trovare i valori massimo e minimo nell'array dei numeri.  ... viene utilizzato per diffondere gli elementi dell'array di numeri come argomenti separati per le funzioni Math.max e Math.min. //

//let maxValue = Math.max(...numbers);
//let minValue = Math.min(...numbers);
 //Stampo i valori in console//
//console.log(`Max Value: ${maxValue}`);
//console.log(`Min Value: ${minValue}`);


//28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random//


// Creo array di arrays//
//let arrays = [];

//for (let i = 0; i < 10; i++) {
  // Creo ogni child array con 10 numeri random//
  //let childArray = [];
  //for (let j = 0; j < 10; j++) {
    //childArray[j] = Math.floor(Math.random() * 100);
  //}
  //arrays[i] = childArray;
//}

//console.log(arrays);


//29) Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi//

//Creo una funzione di comparazione tra 2 arrays//
//function compareArrays(array1, array2) {
  //Con operatore ternario controllo se la lunghezza di array1 è >= alla lunghezza di array2. Se questa condizione è vera, restituisce array1, altrimenti array2.  
   //return array1.length >= array2.length ? array1 : array2;
  //}
    //Stampo in console 2 arrays//
  //let res = compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]);
//console.log(res);
  
        //30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore//
  

        //function compareArrayTotals(array1, array2) {
            //let total1 = 0;
            //let total2 = 0;
           // for (let i = 0; i < array1.length; i++) {
            //  total1 += array1[i];
            //}
            //for (let i = 0; i < array2.length; i++) {
            //  total2 += array2[i];
           // }
           // return total1 > total2 ? array1 : array2;
          //}
          
          
          //let ris = compareArrayTotals([1, 2], [2, 3, 4, 5, 6]);
          //console.log(ris);
          
          




