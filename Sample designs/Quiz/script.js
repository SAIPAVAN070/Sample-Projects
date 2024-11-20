// script.js

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Southern", "Pacific"],
        correctAnswer: "Pacific"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correctAnswer: "Shakespeare"
    },
    {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "400,000 km/s"],
        correctAnswer: "300,000 km/s"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Display the current question and options
function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('quiz-question').innerText = currentQuestion.question;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionElement);
    });
}

// Check the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.style.pointerEvents = 'none'; // Disable further clicks on options
        if (option.innerText === currentQuestion.correctAnswer) {
            option.style.backgroundColor = '#28a745'; // Correct answer color
        }
        if (option.innerText === selectedOption && selectedOption !== currentQuestion.correctAnswer) {
            option.style.backgroundColor = '#dc3545'; // Incorrect answer color
        }
    });

    // Update the score if the answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    document.getElementById('next-btn').classList.remove('hidden'); // Show next button
}

// Move to the next question or display the result
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
        document.getElementById('next-btn').classList.add('hidden');
    } else {
        showResult();
    }
}

// Display the result of the quiz
function showResult() {
    const result = document.getElementById('quiz-result');
    result.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    result.classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
}

// Initialize the quiz
function startQuiz() {
    displayQuestion();
    document.getElementById('next-btn').classList.add('hidden');
}

startQuiz();
