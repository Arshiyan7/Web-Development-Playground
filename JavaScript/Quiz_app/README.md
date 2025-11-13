# Quiz App Project

This is a simple JavaScript-based quiz application designed to help users practice answering multiple-choice questions. The app dynamically displays questions, tracks the user's score, updates a progress bar, and provides visual feedback for correct and incorrect answers. It uses HTML, CSS, and JavaScript to manage the quiz logic, interface, and interactivity.

---

# Quiz Game Flow

1. **Start Game**
   - The `startGame()` function is called.
   - Resets key variables:
     - `score = 0`
     - `questionCounter = 0`
   - Creates a copy of the original questions array:
     - `availableQuestions = [...questions]`
   - Calls `getNewQuestion()` to display the first question.

2. **Get New Question**
   - Checks if the quiz is over:
     - `availableQuestions.length === 0` OR `questionCounter > MAX_QUESTIONS`
       - If yes → store score in localStorage → redirect to `/end.html`.
       - If no → continue.
   - Increment `questionCounter`.
   - Update HUD:
     - `progressText` shows "Question X of MAX_QUESTIONS".
     - `progressBarFull` width updates based on progress.
   - Pick a random question:
     - `currentQuestion = availableQuestions[randomIndex]`
     - Display the question text.
     - Update all answer choices dynamically:
       - `choice.innerText = currentQuestion['choice' + number]`
   - Remove the selected question from `availableQuestions` using `.splice()`.
   - Set `acceptingAnswers = true` to allow user interaction.

3. **Player Clicks a Choice**
   - If `acceptingAnswers === false`, clicks are ignored.
   - Otherwise:
     - Set `acceptingAnswers = false`.
     - Get `selectedChoice` and `selectedAnswer`.
     - Determine correctness:
       - `selectedAnswer == currentQuestion.answer`
         - Correct → `incrementScore(SCORE_POINTS)`.
         - Incorrect → no score.
     - Apply visual feedback with CSS classes (`correct` or `incorrect`).
     - After a 1-second delay, remove feedback class and call `getNewQuestion()`.

4. **Increment Score**
   - Add points for correct answer:
     - `score += SCORE_POINTS`.
   - Update the score displayed in HTML.

5. **Repeat Steps 2–4**
   - Continue until `MAX_QUESTIONS` is reached or `availableQuestions` is empty.

6. **End Game**
   - Save the final `score` in `localStorage`.
   - Redirect to `/end.html` to show the results.
