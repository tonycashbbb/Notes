export const addUserAnswer = (e, form, dispatch, addUserAnswerAC) => {
  e.preventDefault()

  const questionText = e.target.firstElementChild.firstElementChild.textContent.slice(3)

  const {firstAnswer, secondAnswer, thirdAnswer, fourthAnswer} = form
  let userAnswers = [firstAnswer.checked, secondAnswer.checked, thirdAnswer.checked, fourthAnswer.checked]
  const validatedAnswers = []

  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === true) {
      validatedAnswers.push(i+1)
    }
  }

  dispatch(addUserAnswerAC({text: questionText, answers: validatedAnswers}))
}
