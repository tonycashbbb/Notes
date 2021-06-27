import {questionReducer} from "./question-reducer";

export const store = {
  _state: {
    questionPage: {
      questions: [
        {text: "question text 1", answers: ["correct answer", "correct answer", "wrong answer", "wrong answer"], correctAnswers: [1, 2]},
        {text: "question text 2", answers: ["wrong answer", "wrong answer", "correct answer", "correct answer"], correctAnswers: [3, 4]},
        {text: "question text 3", answers: ["wrong answer", "correct answer", "wrong answer", "wrong answer"], correctAnswers: [2]},
        {text: "question text 4", answers: ["wrong answer", "wrong answer", "correct answer", "wrong answer"], correctAnswers: [3]},
        {text: "question text 5", answers: ["correct answer", "wrong answer", "wrong answer", "correct answer"], correctAnswers: [1, 4]},
      ],
      userAnswers: [

      ]
    }
  },

  getState() {
    return this._state
  },

  dispatch(action) {
    this._state.questionPage = questionReducer(this._state.questionPage, action)
  }
}

window.store = store
