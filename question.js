const quizData = [{
    question: "what type of business you want to start",
    a: "e-commerce",
    b: "shiping",
    c: "cosmatic",
    d: "Real estate",
    correct: "d",
},
{
    question: "What are your budget",
    a: "want to start a business from 0",
    b: "10k",
    c: "100k",
    d: "1 mil",
    correct: "a",}
// },
// {
//     question: "What are you",
//     a: "1996",
//     b: "1995",
//     c: "1994",
//     d: "none of the above",
//     correct: "b",
// },
// {
//     question: "What does CSS stands for?",
//     a: "Hypertext Markup Language",
//     b: "Cascading Style Sheet",
//     c: "Jason Object Notation",
//     d: "Helicopters Terminals Motorboats Lamborginis",
//     correct: "b",
// }
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, be patient we will get back to you </h3>
    </div>
`
}
loadQuestion(index);