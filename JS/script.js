let allTrivia = [];      // Store all fetched questions
let currentIndex = 0;    // Track which question we're on

// Fetch all trivia at once and start game
function fetchData(){
    return fetch("https://opentdb.com/api.php?amount=4&category=10&difficulty=easy&type=multiple")
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            allTrivia = data.results;
            currentIndex = 0;
            showNextQuestion();
        })
        .catch(()=>{
            console.log("Seems like there was a problem...");
        })
}

// Show the current question
function showNextQuestion() {
    if (currentIndex >= allTrivia.length) {
        alert("🎉 You've completed all questions!");
        return;
    }

    const trivia = allTrivia[currentIndex];

    const question = trivia.question;
    const correctAns = trivia.correct_answer;
    const incorrectAns = trivia.incorrect_answers;

    triviaDisplay(question, incorrectAns, correctAns);
}

// Display question and buttons
function triviaDisplay(question, wrongAns, rightAns){
    const textContainer = document.querySelector(".textContainer");
    const optionContainer = document.querySelector(".optionContainer");

    optionContainer.innerHTML = "";
    textContainer.innerHTML = question; // Some questions have HTML characters

    const allOptions = [...wrongAns, rightAns];
    allOptions.sort(() => Math.random() - 0.5);

    allOptions.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("optionBtn");
        button.innerText = option;

        button.addEventListener("click", () => {
            selectOption(button, rightAns);
        });

        optionContainer.appendChild(button);
    });
}

// Handle correct/wrong answer
function selectOption(btn, correctAns){
    const selected = btn.innerText;

    if (selected === correctAns) {
        btn.classList.add("correct");
        setTimeout(() => {
            currentIndex++;
            showNextQuestion();
        }, 1000); // Show next question after 1 second
    } else {
        btn.classList.add("wrong");
        setTimeout(() => {
            alert("❌ Wrong! Game will restart.");
            fetchData(); // Restart the game
        }, 1000);
    }

    // Disable all buttons after click
    const allButtons = document.querySelectorAll(".optionBtn");
    allButtons.forEach(button => button.disabled = true);
}

// Start the game
fetchData();
