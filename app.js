

let subject = [];
let verb = [];
let object = [];

async function getData() {
    await fetch('./JSON/subject.JSON')
        .then((response) => response.json())
        .then(data => { subject = data; });

    await fetch('./JSON/verb.JSON')
        .then((response) => response.json())
        .then((data) => { verb = data; });

    await fetch('./JSON/object.JSON')
        .then((response) => response.json())
        .then((data) => { object = data; });
}


const button = document.getElementById("button");
const quoteLocation = document.getElementById("quoteLocation");

button.addEventListener("click", generateQuote);

function generateQuote() {
    let intArray = [];
    quoteLocation.classList.add("hide");
    for (let i = 0; i < 3; i++) {
        intArray.push(Math.floor(Math.random() * 30));
    }

    let quoteSubject = subject.subject[intArray[0]];
    let quoteVerb = verb.verb[intArray[1]];
    let quoteObject = object.object[intArray[2]];

    let fullQuote = `${quoteSubject} ${quoteVerb} ${quoteObject}`;
    quoteLocation.textContent = fullQuote;
    quoteLocation.classList.remove("hide");

}


getData();

