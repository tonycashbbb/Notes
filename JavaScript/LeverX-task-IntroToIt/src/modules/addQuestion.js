import {hasDuplicates} from "./hasDuplicates";

export const addQuestion = (dispatch, addQuestionAC) => {
  const promptMessages = [
    "Введите текст вопроса:",
    "Введите текст первого варианта ответа:",
    "Введите текст второго варианта ответа:",
    "Введите текст третьего варианта ответа:",
    "Введите текст четвертого варианта ответа:",
    "Введите номера правильных ответов через запятую. Нумерация начинается с 1:",
  ]
  const errorMessages = [
    "Вы не ввели правильные варианты ответа. Попробуйте добавить вопрос заново.",
    "Поле может содержать только уникальные цифры 1, 2, 3, 4, разделенные запятой. Попробуйте добавить вопрос заново.",
    "Вы не ввели правильные варианты ответов. Попробуйте добавить вопрос заново."
  ]

  // get question text
  const questionText = prompt(promptMessages[0])
  if (!questionText) {
    alert(errorMessages[0])
    return
  }

  // get question answers
  const firstAnswer = prompt(promptMessages[1])
  if (!firstAnswer) {
    alert("Вы не ввели текст 1 варианта ответа. Попробуйте добавить вопрос заново.")
    return
  }
  const secondAnswer = prompt(promptMessages[2])
  if (!secondAnswer) {
    alert("Вы не ввели текст 2 варианта ответа. Попробуйте добавить вопрос заново.")
    return
  }
  const thirdAnswer = prompt(promptMessages[3])
  if (!thirdAnswer) {
    alert("Вы не ввели текст 3 варианта ответа. Попробуйте добавить вопрос заново.")
    return
  }
  const fourthAnswer = prompt(promptMessages[4])
  if (!fourthAnswer) {
    alert("Вы не ввели текст 4 варианта ответа. Попробуйте добавить вопрос заново.")
    return
  }
  const answers = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer]

  // get correct answers
  const correctAnswers = prompt(promptMessages[5])
    .split(',')
    .map(answer => +answer)
  if (correctAnswers.includes(0)) {
    alert(errorMessages[0])
    return
  }
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === 1 || correctAnswers[i] === 2 ||
        correctAnswers[i] === 3 || correctAnswers[i] === 4) {
      continue
    } else {
      alert(errorMessages[1])
      return
    }
  }
  if (hasDuplicates(correctAnswers)) {
    alert(errorMessages[1])
    return
  }

  dispatch(addQuestionAC(questionText, answers, correctAnswers))
}
