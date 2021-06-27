import {Home} from "./pages/Home";
import {Test} from "./pages/Test";
import {addQuestion} from "./modules/addQuestion";
import {addQuestionAC, addUserAnswerAC} from "./redux/question-reducer";
import {store} from "./redux/store";
import {addUserAnswer} from "./modules/addUserAnswer";
import {showResults} from "./modules/showResults";

const root = document.querySelector('#root')
const dispatch = store.dispatch.bind(store)
const getState = store.getState.bind(store)

root.innerHTML = Home(false)

const addQuestionBtn = root.firstElementChild.firstElementChild.firstElementChild
const startTestBtn = root.firstElementChild.lastElementChild.firstElementChild

// add question
addQuestionBtn.addEventListener('click', () => addQuestion(dispatch, addQuestionAC))

// start test
startTestBtn.addEventListener('click', () => {
  root.innerHTML = Test(getState().questionPage.questions)

  const forms = document.querySelectorAll('form')
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.target.lastElementChild.disabled = true
      addUserAnswer(e, form, dispatch, addUserAnswerAC)
    })
  })

  // show results
  const showResultsBtn = document.querySelector('#showResults')
  showResultsBtn.addEventListener('click', () => showResults(getState().questionPage.questions, getState().questionPage.userAnswers))
})



