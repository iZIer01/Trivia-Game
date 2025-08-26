# Trivia Quest  

## Description  
Trivia Quest is a small quiz game I created to practice **DOM Manipulation**, **Fetch API**, **Promises**, and **Timers** in JavaScript.  

The player must answer trivia questions fetched from an online API.  
Each question has 4 possible answers, but only 1 is correct.  

The player starts with **3 lives**.  
- Wrong answer = Lose 1 life.  
- No answer in time  = Lose 1 life.  
- Correct answer  = Gain 50 points.  

When all lives are gone → Game Over.  

---

## Features  
- Fetch trivia questions from API.  
- Show 4 multiple-choice answers.  
- Countdown timer for each question.  
- Lose life on wrong/timeout answers.  
- Gain points for correct answers.  
- Game Over screen with final score.  

---

## Why I Built This  
I built this app to learn:  
- How to fetch multiple pieces of data using `fetch()` and `Promise.all`.  
- How to update the DOM dynamically with new questions.  
- How to use `setTimeout` for countdown timers.  
- How to track score and lives with game logic.  

---

## What I Achieved  
- Dynamic question loading from an API.  
- Functional game flow: Start → Questions → Game Over.  
- Integrated **Promises + DOM + Timer logic** together.  
- Created a foundation for bigger quiz apps.  

---

## How to Run  
1. Clone the repo.  
2. Open `index.html` in your browser.  
3. Press **Start Game**.  
4. Answer questions before the timer runs out.  
5. Lose 3 lives = Game Over.  

---

## API Used  
- [Open Trivia Database](https://opentdb.com/api_config.php) for quiz questions.  

---
