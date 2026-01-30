const question = [
{
    question: "Qual o maior pais em extensão territorial?",
    answers: [
        {id: 1, text:"Jamaica", correct:false},
        {id: 2, text:"Ucrania", correct:false},
        {id: 3, text:"Japão", correct:false},
        {id: 4, text:"Russia", correct:true},

    ]
},
{
    question: "Qual a moeda de troca usada mundialmente para mercado internacional?",
    answers: [
        {id: 1, text:"Yuan", correct:false},
        {id: 2, text:"dólar", correct:true},
        {id: 3, text:"Euro", correct:false},
        {id: 4, text:"Kwanzas", correct:false},

    ]
},
{
    question: "Em que ano deu inicio a primeira guerra mundial?",
    answers: [
        {id: 1, text:"1937", correct:false},
        {id: 2, text:"1942", correct:false},
        {id: 3, text:"1939", correct:false},
        {id: 4, text:"1914", correct:true},

    ]
},
{
    question: "Qual foi o ano marcado pela primeira visita a lua?",
    answers: [
        {id: 1, text:"1969", correct:true},
        {id: 2, text:"1972", correct:false},
        {id: 3, text:"1980", correct:false},
        {id: 4, text:"1965", correct:false},

    ]
},
{
    question: "Quais países estavam inseridos diretamente nos conflitos não armados da guerra fria?",
    answers: [
        {id: 1, text:"Russia e Japão", correct:false},
        {id: 2, text:"China e Estados Unidos", correct:false},
        {id: 3, text:"Japão e Alemanha", correct:false},
        {id: 4, text:"Russia e Estados Unidos", correct:true},

    ]
},
]
const questionelement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentquestionindex = 0;
let score = 0;

function startquiz() {
    currentquestionindex = 0;
    score = 0;
    nextbutton.innerHTML = "Próximo";
    showquestion();
}

function resetstate() {
    nextbutton.style.display = "none"; 
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function showquestion() {
    resetstate();
    let currentquestion = question[currentquestionindex];
    let questionno = currentquestionindex + 1;
    questionelement.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    answerbuttons.appendChild(button);
    button.dataset.id = answer.id;
    button.classList.add("btn");
    button.addEventListener("click", selectanswer);
   });
}

function selectanswer(e) {
    answer = question[currentquestionindex].answers;    
    const correctanswer = answer.filter((answer) => answer.correct == true)[0];

    const selectbrn = e.target;
    const iscorrect = selectbrn.dataset.id == correctanswer.id;
    if (iscorrect) {
        selectbrn.classList.add("correct");
        score++;
    } else {
        selectbrn.classList.add("incorrect");
    }

startquiz();