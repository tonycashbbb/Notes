import {compareArrays} from "./compareArrays";
import {showWinMessage} from "./showWinMessage";
import {showLoseMessage} from "./showLoseMessage";

export const showResults = (questions, userAnswers) => {
  if (questions.length !== userAnswers.length) {
    alert("Все вопросы должны иметь хотя бы один выбранный вариант ответа. Проверьте правильность заполнения")
    return
  }

  let score = 0
  const wrongQuestionNums = []

  for (let i = 0; i < questions.length; i++) {
    if (compareArrays(questions[i].correctAnswers, userAnswers[i].answers)) {
      score++
    } else {
      wrongQuestionNums.push(i)
    }
  }

  score === questions.length
    ? showWinMessage(score, questions.length)
    : showLoseMessage(questions, wrongQuestionNums, score)
}
