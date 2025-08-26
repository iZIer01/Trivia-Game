# Trivia Quest  

## Intro  
I created this small app to test and learn **DOM Manipulation**, **Async Fetching**, **Promises**, and **setTimeout** in JavaScript.  
The game is a trivia quiz where the player has 3 lives and must answer questions on time to gain points.  

---

## Level 1 – Setup Game Structure  

### Case Study  
The first step is the skeleton: a start button, a score display, and a place for questions.  

### Goal  
- Show **Start Game** button.  
- Display score (0) and lives (3).  
- Reserve a space for question + answers.  

### Steps  
- Create basic HTML (header, container, buttons).  
- Use DOM to insert question text and answer buttons.  
- Add CSS for simple game look.  

---

## Level 2 – Fetch Questions  

### Case Study  
Questions must come from an API instead of being hardcoded.  

### Goal  
- Fetch 10 questions from [Open Trivia Database](https://opentdb.com/api.php?amount=10&type=multiple).  
- Store them in memory.  
- Show the first question on screen.  

### Steps  
- Use `fetch(url)` and wait for JSON.  
- Use `Promise.all` if we want multiple API calls at once.  
- Extract question text + answers.  
- Shuffle answers before showing.  

---

## Level 3 – Timer and Lives  

### Case Study  
Each question must be answered in time. If not, lose a life.  

### Goal  
- Start countdown when question shows.  
- If timer ends → lose 1 life, move to next.  
- If wrong answer → lose 1 life.  
- If correct → gain 50 points.  

### Steps  
- Use `setTimeout` for countdown.  
- Track `lives` and `score` in variables.  
- Update DOM on each life/score change.  

---

## Level 4 – Game Over  

### Case Study  
When lives = 0, game must stop.  

### Goal  
- Show **Game Over** screen.  
- Display final score.  
- Option to restart.  

### Steps  
- Clear timers.  
- Replace question area with Game Over message.  
- Reset score + lives when restarting.  

---

## Level 5 – Optional Additions  

### Case Study  
Make the game less boring.  

### Goal  
- Add **categories** (sports, history, etc).  
- Show a progress bar of remaining questions.  
- Store high score in localStorage.  

### Steps  
- Add dropdown for categories before starting.  
- Track how many questions completed.  
- Save highest score locally.  

---

## Visual Design  
Simple quiz layout:  
- Header with score + lives.  
- Question in center.  
- 4 answer buttons.  
- Timer countdown.  
- Game Over screen.  

---
