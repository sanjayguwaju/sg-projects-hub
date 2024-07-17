const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Shakespeare", "Dickens", "Chaucer", "Hemingway"],
        correct: "Shakespeare"
    },
    {
        question: "What is the speed of light?",
        answers: ["299,792 km/s", "300,000 km/s", "150,000 km/s", "1,080 km/h"],
        correct: "299,792 km/s"
    }
];

let currentQuestion = 0;
let score = 0;
const questionElement = document.querySelector('.question');
const answersElement = document.querySelector('.answers');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    answersElement.innerHTML = '';
    question.answers.forEach(answer => {
        const li = document.createElement('li');
        li.textContent = answer;
        li.addEventListener('click', () => checkAnswer(answer));
        answersElement.appendChild(li);
    });
}

function checkAnswer(answer) {
    if (answer === quizData[currentQuestion].correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        scoreElement.textContent = `You scored ${score}/${quizData.length}`;
    }
}

loadQuestion();