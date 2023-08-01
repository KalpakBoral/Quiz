let questionContainer = [
    {
        question: "What is national animal of India?",
        options: {
            a: 'Lion',
            b: 'Tiger',
            c: 'Elephant',
            d: 'None of these'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is the capital of India?",
        options: {
            a: 'New Delhi',
            b: 'Kolkata',
            c: 'Mumbai',
            d: 'Chennai'
        },
        correctAnswer: 'a'
    },
    {
        question: "What is the national language of India?",
        options: {
            a: 'Hindi',
            b: 'English',
            c: 'Bengali',
            d: 'None of these'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is the national flower of India?",
        options: {
            a: 'Rose',
            b: 'Lily',
            c: 'Lotus',
            d: 'Marigold'
        },
        correctAnswer: 'c'
    }, {
        question: "What is the national bird of India?",
        options: {
            a: 'Peacock',
            b: 'Hummingbird',
            c: 'Parrot',
            d: 'Swan'
        },
        correctAnswer: 'a'
    }
];

let quizContainer = document.getElementById('quiz');
let results = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(questionContainer, quizContainer, results, submitButton);

function generateQuiz(questions, quizContainer, results, submitButton) {
    // displaying questions & options
    function showQuestions(questions, quizContainer) {
        let output = [];
        let options;

        for (let i = 0; i < questions.length; ++i) {
            options = []; // resetting the list

            for (letter in questions[i].options) {
                //adding an html radio button
                options.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + questions[i].options[letter]
                    + '</label>'
                    + '<br>'
                );
            }

            // adding question and its options to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="options">' + options.join('') + '</div>'
            );
        }

        // displaying questions & options
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, results) {
        // gather answer containers from our quiz
        let selectedOptions = quizContainer.querySelectorAll('.options');

        let score = 0;

        for (let i = 0; i < questions.length; ++i) {
            // find selected answer
            let userAnswer = (selectedOptions[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {
                ++score;
                selectedOptions[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else {
                selectedOptions[i].style.color = 'red';
            }
        }

        results.innerHTML = 'Result : ' + score + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, results);

        // reloads the page 20 sec after clicking submit button
        setTimeout(function () {
            window.location.reload();
        }, 15000);
    }
}