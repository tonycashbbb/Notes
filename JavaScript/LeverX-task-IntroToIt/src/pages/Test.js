import {Home} from "./Home";
import {QuestionItem} from "../components/QuestionItem";

export const Test = (questions) => {
  if (!questions) {
    return `<h1>В тесте пока нет вопросов</h1>`
  }

  let questionItems = ''
  questions.forEach((q, i) => {
    questionItems += QuestionItem(i+1, q.text, q.answers)
  })

  return `
    ${Home(true)}
    ${questionItems}
    <button id="showResults">Показать результаты</button>
  `
}
