export const QuestionItem = (questionNumber, text, answers) => {
  return `
    <form class="question__block" id="form">
      <div class="question__item">
        <div class="question__title">${questionNumber}. ${text}</div>
        <div class="question__option">
          <label>
            <input type="checkbox" name="firstAnswer"> ${answers[0]}
          </label>
        </div>
         <div class="question__option">
           <label>
             <input type="checkbox" name="secondAnswer"> ${answers[1]}
           </label>
        </div>
         <div class="question__option">
           <label>
             <input type="checkbox" name="thirdAnswer"> ${answers[2]}
           </label>
        </div>
         <div class="question__option">
           <label>
             <input type="checkbox" name="fourthAnswer"> ${answers[3]}
           </label>
        </div>
      </div>
      <button type="submit">Подтвердить</button>
    </form>
  `
}
