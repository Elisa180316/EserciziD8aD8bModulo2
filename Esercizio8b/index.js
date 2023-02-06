const questions = [
    {
        question: "What does CPU stand for?",
        optionA: "Central Process Unit",
        optionB: "Computer Personal Unit",
        optionC: "Central Processor Unit",
        optionD: "Central Processing Unit",
        correctOption: "optionD"
    },
    
    
    {
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        optionA: "Static",
        optionB: "Final",
        optionC: "Private",
        optionD: "Public",
        correctOption: "optionB"
    },
    
    {
        question: "What is the most preferred image format used for logos in the Wikimedia database?",
        optionA: ".png",
        optionB: ".jpeg",
        optionC: ".gif",
        optionD: ".svg",
        correctOption: "optionD"
    },
    
    {
        question: "In web design, what does CSS stand for?",
        optionA: "Counter Strike: Source",
        optionB: "Corrective Style Sheet",
        optionC: "Cascading Style Sheet",
        optionD: "Computer Style Sheet",
        correctOption: "optionC"
    },
    
    {
        question: "What is the code name for the mobile operating system Android 7.0?",
        optionA: "Ice Cream Sandwich",
        optionB: "Jelly Bean",
        optionC: "Marshmallow",
        optionD: "Nougat",
        correctOption: "optionD"
    },
    
    {
        question: "On Twitter, what is the character limit for a Tweet?",
        optionA: "140",
        optionB: "120",
        optionC: "160",
        optionD: "100",
        correctOption: "optionA"
    },

    {
        question: "Which programming language shares its name with an island in Indonesia?",
        optionA: "Python",
        optionB: "C",
        optionC: "Java",
        optionD: "Jakarta",
        correctOption: "optionC"
    },

    {
        question: "What was the first browser open to everyone?",
        optionA: "Mosaic",
        optionB: "Internet Explorer",
        optionC: "Safari",
        optionD: "Modzilla",
        correctOption: "optionA"
    },

    {
        question: "What year was Google founded?",
        optionA: "2002",
        optionB: "1988",
        optionC: "2000",
        optionD: "1998",
        correctOption: "optionD"
    },

    {
        question: "What is a Byte?",
        optionA: "An item of hardware",
        optionB: "A set of 16 bits",
        optionC: "A set of 24 bits",
        optionD: "A set of 8 bits",
        correctOption: "optionD"
    },

    {
        question: "Which of these actors is a known nerd and has published a video in which he assembled his own gaming PC?",
        optionA: "Jack Black",
        optionB: "The Rock",
        optionC: "Henry Cavill",
        optionD: "Ryan Raynolds",
        correctOption: "optionC"
    },

    {
        question: "What is the language used in computer strings?",
        optionA: "Binary Code",
        optionB: "Decimal code",
        optionC: "Bicameral code",
        optionD: "None of the other answers",
        correctOption: "optionA"
    },


    {
        question: "What does the e in email mean?",
        optionA: "enabled",
        optionB: "electronic",
        optionC: "eclectic",
        optionD: "enjoy",
        correctOption: "optionB"
    },

    {
        question: "RAM is:",
        optionA: "hardware component",
        optionB: "A layout",
        optionC: "a peripheral",
        optionD: "None of the other answers",
        correctOption: "optionD"
    },

    {
        question: "what letter the hard disk is indicated by",
        optionA: "C",
        optionB: "A",
        optionC: "D",
        optionD: "FD",
        correctOption: "optionA"
    },

    {
        question: "What is the extension of a compressed file?",
        optionA: ".txt",
        optionB: ".jpeg",
        optionC: ".zip",
        optionD: ".html",
        correctOption: "optionC"
    },

    {
        question: "What is an icon?",
        optionA: "The graphical representation of an object",
        optionB: "A file",
        optionC: "A printer",
        optionD: "Monitor",
        correctOption: "optionA"
    },

    {
        question: "What is the extension of an excel file ?",
        optionA: ".txt",
        optionB: ".jpeg",
        optionC: ".xls",
        optionD: ".zip",
        correctOption: "optionC"
    },

    {
        question: "what is the best way to create a secure password ?",
        optionA: "Your name",
        optionB: "Only numbers",
        optionC: "Use a word  easy to write and remember",
        optionD: "Mix of numbers, lowercase and uppercase letters.",
        correctOption: "optionD"
    },

    {
        question: "what is a browser for? ?",
        optionA: "Surf the Internet",
        optionB: "Write textes",
        optionC: "Draw",
        optionD: "Just to watch videos",
        correctOption: "optionA"
    },

    {
        question: "which of these files is an image ?",
        optionA: ".txt",
        optionB: ".zip",
        optionC: ".xls",
        optionD: ".jpeg",
        correctOption: "optionD"
    },

    {
        question: "The dimensions of a monitor are measured in  ?",
        optionA: "Bytes",
        optionB: "Inches",
        optionC: "Meters",
        optionD: "None of the other answers",
        correctOption: "optionB"
    },

    {
        question: "What can a pendrive be used for?",
        optionA: "Print",
        optionB: "Transferring files from-to computers ",
        optionC: "Write",
        optionD: "Draw",
        correctOption: "optionB"
    },

    {
        question: "When you left click on an icon on the desktop, what happens?",
        optionA: "The file associated with the icon opens",
        optionB: "Nothing",
        optionC: "The icon is simply selected",
        optionD: "The characters enter edit mode",
        correctOption: "optionC"
    },

    {
        question: "E-commerce, what does it mean?",
        optionA: "Extra-world trade",
        optionB: "Economic trade",
        optionC: "Electronic-commerce",
        optionD: "Foreign trade",
        correctOption: "optionC"
    }

]
// Array vuoto per le domande selezionate casualmente tra tutte le domande://

let domandeCasuali = [] 

//funzione per mescolare e inviare 10 domande all'array shuffledQuestions://
function gestioneDomande() { 
    
    while (domandeCasuali.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!domandeCasuali.includes(random)) {
            domandeCasuali.push(random)
        }
    }
}

//Variabile che inizializza il numero della domanda attuale://
let domandaNumero = 1 
//Variabile che inizializza il punteggio alla domanda attuale://
let punteggioAttuale = 0  
//Variabile che inizializza le risposte sbagliate://
let sbagliate = 0 
//Variabile che inizializza la domanda successiva
let domandaSuccessiva = 0 



// Funzione per il DOM: mostra la domanda successiva e le informazioni sul quiz://

function prossima(i) {
    gestioneDomande()
    const currentQuestion = domandeCasuali[i]
    document.getElementById("domanda-attuale").innerHTML = domandaNumero
    document.getElementById("punteggio-attuale").innerHTML = punteggioAttuale
    document.getElementById("display").innerHTML = currentQuestion.question;
    document.getElementById("scelta-uno").innerHTML = currentQuestion.optionA;
    document.getElementById("scelta-due").innerHTML = currentQuestion.optionB;
    document.getElementById("scelta-tre").innerHTML = currentQuestion.optionC;
    document.getElementById("scelta-quattro").innerHTML = currentQuestion.optionD;

}

 // Funzione per il controllo delle risposte://

function controlloRisposte() {
    // Domanda attuale://
    const currentQuestion = domandeCasuali[domandaSuccessiva] 
    //Risposta attuale://
    const currentQuestionAnswer = currentQuestion.correctOption 
    //Elementi con name="option" negli input radio://
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            // Input radio corretto con risposta corretta://
            correctOption = option.labels[0].id
        }
    })

    // Ciclo if che controlla che sia selezionata una risposta://
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-mode').style.display = "flex"
    }

    // Controlla se la risposta è corretta e cambia il colore di sfondo://
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "blue"
            // Aggiunge un punto://
            punteggioAttuale++ 
            // Aggiunge 1 ad "i" per passae alla domanda successiva://
            domandaSuccessiva++ 
            // Ritarda il numero della domanda fino al caricamento della domanda successiva://
            setTimeout(() => {
                domandaNumero++
            }, 1000)
        }
 // Controlla se la risposta è sbagliata//
        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "blue"
            // Aggiunge 1 alle domande errate://
            sbagliate++  
            domandaSuccessiva++
            //Ritarda il numero della domanda fino al caricamento della domanda successiva://
            setTimeout(() => {
                domandaNumero++
            }, 1000)
        }
    })
}



// Funzione per passare alle domande successive://
function gestioneProssimaDomanda() {
    // Controlla se è giusta o sbagliata
    controlloRisposte() 
    deselezioneBtn()
    // Ritarda la visualizzazione della domanda successiva://
    setTimeout(() => {
        if (domandaSuccessiva <= 9) {
//visualizza la domanda successiva finché il numero di indice non è maggiore di 9, ricorda che il numero di indice inizia da 0, quindi l'indice 9 è la domanda 10://
            prossima(domandaSuccessiva)
        }
        //termina il gioco se il numero indice è maggiore di 9, ovvero che siamo  alla decima domanda://
        else {
            gestioneFineQuiz()
        }
        resetColor()
    }, 1000);
}

//imposta lo sfondo delle opzioni su null dopo aver visualizzato i colori corretti/errati
function resetColor() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// deseleziona tutti i pulsanti di opzione per la domanda successiva
function deselezioneBtn() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// Funzione a domande concluse
function gestioneFineQuiz() {
    
    

    // Dati per il punteggio sul DOM
   
    document.getElementById('risposte-errate').innerHTML = sbagliate
    document.getElementById('risposte-giuste').innerHTML = punteggioAttuale
    document.getElementById('punteggio').style.display = "flex"

}

//chiude il punteggio, ripristina il gioco e rimescola le domande
function chiudiPunteggio() {
    domandaNumero = 1
    punteggioAttuale = 0
    sbagliate = 0
    domandaSuccessiva = 0
    domandeCasuali = []
    prossima(domandaSuccessiva)
    document.getElementById('punteggio').style.display = "none"
}

//funzione per chiudere il box se l'utente non effettua una scelta:

function gestioneChiusura() {
    document.getElementById('option-mode').style.display = "none"
}