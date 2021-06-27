const ADD_QUESTION = "ADD_QUESTION"
const ADD_USER_ANSWER = "ADD_USER_ANSWER"

export const questionReducer = (state, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      const question = {
        text: action.text,
        answers: action.answers,
        correctAnswers: action.correctAnswers
      }

      if (state.questions) {
        return {
          ...state,
          questions: [...state.questions, question]
        }
      }

      return {
        ...state,
        questions: [question]
      }
    case ADD_USER_ANSWER:
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.answer]
      }
    default:
      return state
  }
}

export const addQuestionAC = (text, answers, correctAnswers) => ({type: ADD_QUESTION, text, answers, correctAnswers})
export const addUserAnswerAC = (answer) => ({type: ADD_USER_ANSWER, answer})
