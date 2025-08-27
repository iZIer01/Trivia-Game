

//Function to collect the data
function fetchData(){
    return fetch("https://opentdb.com/api.php?amount=4&category=10&difficulty=easy&type=multiple")
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            //Create an array to store all the trivia
            const trivia = []
            
            // putting all the block of object the array
            data.results.forEach(element => {
                trivia.push(element)
            });

            return trivia
        })
        .catch(()=>{
            console.log("Seem like there was a problem...")
        })
}


fetchData().then(function(returnedTrivia){
    // sorting the triviaData
    const triviaQuestion = returnedTrivia[0]

    const triviaData = {
        questions: triviaQuestion.question,
        correctAns:triviaQuestion.correct_answer,
        incorrectAns:triviaQuestion.incorrect_answers,
    }
    
    triviaDisplay(triviaData.questions,triviaQuestion.incorrect_answers,triviaData.correctAns)
})

//function to display the trivia

function triviaDisplay(question,wrongAns,rightAns){
    //my variable
    const textContainer = document.querySelector(".textContainer")
    const optionContainer = document.querySelector(".optionContainer")
    
    
    // manipulating the dom
    textContainer.innerText = question
    
    // adding my wrong and right answer in the same array 
    const allOption = [rightAns,...wrongAns]
    allOption.sort(function(){
       return Math.random() - 0.5
    })

    allOption.forEach(option=>{
        //create a button
        const button = document.createElement("button")
        button.classList.add("optionBtn")
        button.innerText = option

        optionContainer.appendChild(button)
    })

    
}

