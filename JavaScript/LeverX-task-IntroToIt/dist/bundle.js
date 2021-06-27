/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/QuestionItem.js":
/*!****************************************!*\
  !*** ./src/components/QuestionItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"QuestionItem\": () => (/* binding */ QuestionItem)\n/* harmony export */ });\nconst QuestionItem = (questionNumber, text, answers) => {\r\n  return `\r\n    <form class=\"question__block\" id=\"form\">\r\n      <div class=\"question__item\">\r\n        <div class=\"question__title\">${questionNumber}. ${text}</div>\r\n        <div class=\"question__option\">\r\n          <label>\r\n            <input type=\"checkbox\" name=\"firstAnswer\"> ${answers[0]}\r\n          </label>\r\n        </div>\r\n         <div class=\"question__option\">\r\n           <label>\r\n             <input type=\"checkbox\" name=\"secondAnswer\"> ${answers[1]}\r\n           </label>\r\n        </div>\r\n         <div class=\"question__option\">\r\n           <label>\r\n             <input type=\"checkbox\" name=\"thirdAnswer\"> ${answers[2]}\r\n           </label>\r\n        </div>\r\n         <div class=\"question__option\">\r\n           <label>\r\n             <input type=\"checkbox\" name=\"fourthAnswer\"> ${answers[3]}\r\n           </label>\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\">Подтвердить</button>\r\n    </form>\r\n  `\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/components/QuestionItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_Test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Test */ \"./src/pages/Test.js\");\n/* harmony import */ var _modules_addQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addQuestion */ \"./src/modules/addQuestion.js\");\n/* harmony import */ var _redux_question_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/question-reducer */ \"./src/redux/question-reducer.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/store */ \"./src/redux/store.js\");\n/* harmony import */ var _modules_addUserAnswer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/addUserAnswer */ \"./src/modules/addUserAnswer.js\");\n/* harmony import */ var _modules_showResults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/showResults */ \"./src/modules/showResults.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst root = document.querySelector('#root')\r\nconst dispatch = _redux_store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch.bind(_redux_store__WEBPACK_IMPORTED_MODULE_4__.store)\r\nconst getState = _redux_store__WEBPACK_IMPORTED_MODULE_4__.store.getState.bind(_redux_store__WEBPACK_IMPORTED_MODULE_4__.store)\r\n\r\nroot.innerHTML = (0,_pages_Home__WEBPACK_IMPORTED_MODULE_0__.Home)(false)\r\n\r\nconst addQuestionBtn = root.firstElementChild.firstElementChild.firstElementChild\r\nconst startTestBtn = root.firstElementChild.lastElementChild.firstElementChild\r\n\r\n// add question\r\naddQuestionBtn.addEventListener('click', () => (0,_modules_addQuestion__WEBPACK_IMPORTED_MODULE_2__.addQuestion)(dispatch, _redux_question_reducer__WEBPACK_IMPORTED_MODULE_3__.addQuestionAC))\r\n\r\n// start test\r\nstartTestBtn.addEventListener('click', () => {\r\n  root.innerHTML = (0,_pages_Test__WEBPACK_IMPORTED_MODULE_1__.Test)(getState().questionPage.questions)\r\n\r\n  const forms = document.querySelectorAll('form')\r\n  forms.forEach(form => {\r\n    form.addEventListener('submit', (e) => {\r\n      e.target.lastElementChild.disabled = true\r\n      ;(0,_modules_addUserAnswer__WEBPACK_IMPORTED_MODULE_5__.addUserAnswer)(e, form, dispatch, _redux_question_reducer__WEBPACK_IMPORTED_MODULE_3__.addUserAnswerAC)\r\n    })\r\n  })\r\n\r\n  // show results\r\n  const showResultsBtn = document.querySelector('#showResults')\r\n  showResultsBtn.addEventListener('click', () => (0,_modules_showResults__WEBPACK_IMPORTED_MODULE_6__.showResults)(getState().questionPage.questions, getState().questionPage.userAnswers))\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://lever-test/./src/index.js?");

/***/ }),

/***/ "./src/modules/addQuestion.js":
/*!************************************!*\
  !*** ./src/modules/addQuestion.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addQuestion\": () => (/* binding */ addQuestion)\n/* harmony export */ });\n/* harmony import */ var _hasDuplicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasDuplicates */ \"./src/modules/hasDuplicates.js\");\n\r\n\r\nconst addQuestion = (dispatch, addQuestionAC) => {\r\n  const promptMessages = [\r\n    \"Введите текст вопроса:\",\r\n    \"Введите текст первого варианта ответа:\",\r\n    \"Введите текст второго варианта ответа:\",\r\n    \"Введите текст третьего варианта ответа:\",\r\n    \"Введите текст четвертого варианта ответа:\",\r\n    \"Введите номера правильных ответов через запятую. Нумерация начинается с 1:\",\r\n  ]\r\n  const errorMessages = [\r\n    \"Вы не ввели правильные варианты ответа. Попробуйте добавить вопрос заново.\",\r\n    \"Поле может содержать только уникальные цифры 1, 2, 3, 4, разделенные запятой. Попробуйте добавить вопрос заново.\",\r\n    \"Вы не ввели правильные варианты ответов. Попробуйте добавить вопрос заново.\"\r\n  ]\r\n\r\n  // get question text\r\n  const questionText = prompt(promptMessages[0])\r\n  if (!questionText) {\r\n    alert(errorMessages[0])\r\n    return\r\n  }\r\n\r\n  // get question answers\r\n  const firstAnswer = prompt(promptMessages[1])\r\n  if (!firstAnswer) {\r\n    alert(\"Вы не ввели текст 1 варианта ответа. Попробуйте добавить вопрос заново.\")\r\n    return\r\n  }\r\n  const secondAnswer = prompt(promptMessages[2])\r\n  if (!secondAnswer) {\r\n    alert(\"Вы не ввели текст 2 варианта ответа. Попробуйте добавить вопрос заново.\")\r\n    return\r\n  }\r\n  const thirdAnswer = prompt(promptMessages[3])\r\n  if (!thirdAnswer) {\r\n    alert(\"Вы не ввели текст 3 варианта ответа. Попробуйте добавить вопрос заново.\")\r\n    return\r\n  }\r\n  const fourthAnswer = prompt(promptMessages[4])\r\n  if (!fourthAnswer) {\r\n    alert(\"Вы не ввели текст 4 варианта ответа. Попробуйте добавить вопрос заново.\")\r\n    return\r\n  }\r\n  const answers = [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer]\r\n\r\n  // get correct answers\r\n  const correctAnswers = prompt(promptMessages[5])\r\n    .split(',')\r\n    .map(answer => +answer)\r\n  if (correctAnswers.includes(0)) {\r\n    alert(errorMessages[0])\r\n    return\r\n  }\r\n  for (let i = 0; i < correctAnswers.length; i++) {\r\n    if (correctAnswers[i] === 1 || correctAnswers[i] === 2 ||\r\n        correctAnswers[i] === 3 || correctAnswers[i] === 4) {\r\n      continue\r\n    } else {\r\n      alert(errorMessages[1])\r\n      return\r\n    }\r\n  }\r\n  if ((0,_hasDuplicates__WEBPACK_IMPORTED_MODULE_0__.hasDuplicates)(correctAnswers)) {\r\n    alert(errorMessages[1])\r\n    return\r\n  }\r\n\r\n  dispatch(addQuestionAC(questionText, answers, correctAnswers))\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/modules/addQuestion.js?");

/***/ }),

/***/ "./src/modules/addUserAnswer.js":
/*!**************************************!*\
  !*** ./src/modules/addUserAnswer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUserAnswer\": () => (/* binding */ addUserAnswer)\n/* harmony export */ });\nconst addUserAnswer = (e, form, dispatch, addUserAnswerAC) => {\r\n  e.preventDefault()\r\n\r\n  const questionText = e.target.firstElementChild.firstElementChild.textContent.slice(3)\r\n\r\n  const {firstAnswer, secondAnswer, thirdAnswer, fourthAnswer} = form\r\n  let userAnswers = [firstAnswer.checked, secondAnswer.checked, thirdAnswer.checked, fourthAnswer.checked]\r\n  const validatedAnswers = []\r\n\r\n  for (let i = 0; i < userAnswers.length; i++) {\r\n    if (userAnswers[i] === true) {\r\n      validatedAnswers.push(i+1)\r\n    }\r\n  }\r\n\r\n  dispatch(addUserAnswerAC({text: questionText, answers: validatedAnswers}))\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/modules/addUserAnswer.js?");

/***/ }),

/***/ "./src/modules/compareArrays.js":
/*!**************************************!*\
  !*** ./src/modules/compareArrays.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compareArrays\": () => (/* binding */ compareArrays)\n/* harmony export */ });\nconst compareArrays = (arr1, arr2) => {\r\n  for(let i = 0; i < arr1.length; i++) {\r\n    if (arr1[i] !== arr2[i]) {\r\n      return false\r\n    }\r\n  }\r\n\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/modules/compareArrays.js?");

/***/ }),

/***/ "./src/modules/hasDuplicates.js":
/*!**************************************!*\
  !*** ./src/modules/hasDuplicates.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hasDuplicates\": () => (/* binding */ hasDuplicates)\n/* harmony export */ });\nconst hasDuplicates = (array) => {\r\n  let valuesAlreadySeen = []\r\n\r\n  for (let i = 0; i < array.length; i++) {\r\n    let value = array[i]\r\n    if (valuesAlreadySeen.indexOf(value) !== -1) {\r\n      return true\r\n    }\r\n    valuesAlreadySeen.push(value)\r\n  }\r\n\r\n  return false\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/modules/hasDuplicates.js?");

/***/ }),

/***/ "./src/modules/showLoseMessage.js":
/*!****************************************!*\
  !*** ./src/modules/showLoseMessage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showLoseMessage\": () => (/* binding */ showLoseMessage)\n/* harmony export */ });\nconst showLoseMessage = (questions, wrongQuestionNums, score) => {\r\n  let message = [\"Вы неправильно ответили на вопросы:\"]\r\n\r\n  for (let i = 0; i < wrongQuestionNums.length; i++) {\r\n    message.push(`${i+1}. ${questions[wrongQuestionNums[i]].text}`)\r\n  }\r\n\r\n  alert(\r\n`${message.shift()}\r\n\r\n${message.join('\\n')}\r\n  \r\nВаш результат: ${score} из ${questions.length}`)\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/modules/showLoseMessage.js?");

/***/ }),

/***/ "./src/modules/showResults.js":
/*!************************************!*\
  !*** ./src/modules/showResults.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showResults\": () => (/* binding */ showResults)\n/* harmony export */ });\n/* harmony import */ var _compareArrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compareArrays */ \"./src/modules/compareArrays.js\");\n/* harmony import */ var _showWinMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showWinMessage */ \"./src/modules/showWinMessage.js\");\n/* harmony import */ var _showLoseMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showLoseMessage */ \"./src/modules/showLoseMessage.js\");\n\r\n\r\n\r\n\r\nconst showResults = (questions, userAnswers) => {\r\n  if (questions.length !== userAnswers.length) {\r\n    alert(\"Все вопросы должны иметь хотя бы один выбранный вариант ответа. Проверьте правильность заполнения\")\r\n    return\r\n  }\r\n\r\n  let score = 0\r\n  const wrongQuestionNums = []\r\n\r\n  for (let i = 0; i < questions.length; i++) {\r\n    if ((0,_compareArrays__WEBPACK_IMPORTED_MODULE_0__.compareArrays)(questions[i].correctAnswers, userAnswers[i].answers)) {\r\n      score++\r\n    } else {\r\n      wrongQuestionNums.push(i)\r\n    }\r\n  }\r\n\r\n  score === questions.length\r\n    ? (0,_showWinMessage__WEBPACK_IMPORTED_MODULE_1__.showWinMessage)(score, questions.length)\r\n    : (0,_showLoseMessage__WEBPACK_IMPORTED_MODULE_2__.showLoseMessage)(questions, wrongQuestionNums, score)\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/modules/showResults.js?");

/***/ }),

/***/ "./src/modules/showWinMessage.js":
/*!***************************************!*\
  !*** ./src/modules/showWinMessage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showWinMessage\": () => (/* binding */ showWinMessage)\n/* harmony export */ });\nconst showWinMessage = (score, questionsCount) => {\r\n  alert(`Ваш результат: ${score} из ${questionsCount}. Вы молодец!`)\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/modules/showWinMessage.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nconst Home = (disabled) => {\r\n  return `\r\n    <div class=\"buttons\">\r\n      <div class=\"buttons__question\">\r\n        <button id=\"addQuestion-btn\" ${disabled ? \"disabled\" : null}>Добавить вопрос</button>\r\n      </div>\r\n      <div class=\"buttons__test\">\r\n        <button id=\"startTest-btn\" ${disabled ? \"disabled\" : null}>Начать тест</button>\r\n      </div>\r\n    </div>\r\n  `\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Test.js":
/*!***************************!*\
  !*** ./src/pages/Test.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Test\": () => (/* binding */ Test)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _components_QuestionItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/QuestionItem */ \"./src/components/QuestionItem.js\");\n\r\n\r\n\r\nconst Test = (questions) => {\r\n  if (!questions) {\r\n    return `<h1>В тесте пока нет вопросов</h1>`\r\n  }\r\n\r\n  let questionItems = ''\r\n  questions.forEach((q, i) => {\r\n    questionItems += (0,_components_QuestionItem__WEBPACK_IMPORTED_MODULE_1__.QuestionItem)(i+1, q.text, q.answers)\r\n  })\r\n\r\n  return `\r\n    ${(0,_Home__WEBPACK_IMPORTED_MODULE_0__.Home)(true)}\r\n    ${questionItems}\r\n    <button id=\"showResults\">Показать результаты</button>\r\n  `\r\n}\r\n\n\n//# sourceURL=webpack://lever-test/./src/pages/Test.js?");

/***/ }),

/***/ "./src/redux/question-reducer.js":
/*!***************************************!*\
  !*** ./src/redux/question-reducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"questionReducer\": () => (/* binding */ questionReducer),\n/* harmony export */   \"addQuestionAC\": () => (/* binding */ addQuestionAC),\n/* harmony export */   \"addUserAnswerAC\": () => (/* binding */ addUserAnswerAC)\n/* harmony export */ });\nconst ADD_QUESTION = \"ADD_QUESTION\"\r\nconst ADD_USER_ANSWER = \"ADD_USER_ANSWER\"\r\n\r\nconst questionReducer = (state, action) => {\r\n  switch (action.type) {\r\n    case ADD_QUESTION:\r\n      const question = {\r\n        text: action.text,\r\n        answers: action.answers,\r\n        correctAnswers: action.correctAnswers\r\n      }\r\n\r\n      if (state.questions) {\r\n        return {\r\n          ...state,\r\n          questions: [...state.questions, question]\r\n        }\r\n      }\r\n\r\n      return {\r\n        ...state,\r\n        questions: [question]\r\n      }\r\n    case ADD_USER_ANSWER:\r\n      return {\r\n        ...state,\r\n        userAnswers: [...state.userAnswers, action.answer]\r\n      }\r\n    default:\r\n      return state\r\n  }\r\n}\r\n\r\nconst addQuestionAC = (text, answers, correctAnswers) => ({type: ADD_QUESTION, text, answers, correctAnswers})\r\nconst addUserAnswerAC = (answer) => ({type: ADD_USER_ANSWER, answer})\r\n\n\n//# sourceURL=webpack://lever-test/./src/redux/question-reducer.js?");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _question_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./question-reducer */ \"./src/redux/question-reducer.js\");\n\r\n\r\nconst store = {\r\n  _state: {\r\n    questionPage: {\r\n      questions: [\r\n        {text: \"question text 1\", answers: [\"correct answer\", \"correct answer\", \"wrong answer\", \"wrong answer\"], correctAnswers: [1, 2]},\r\n        {text: \"question text 2\", answers: [\"wrong answer\", \"wrong answer\", \"correct answer\", \"correct answer\"], correctAnswers: [3, 4]},\r\n        {text: \"question text 3\", answers: [\"wrong answer\", \"correct answer\", \"wrong answer\", \"wrong answer\"], correctAnswers: [2]},\r\n        {text: \"question text 4\", answers: [\"wrong answer\", \"wrong answer\", \"correct answer\", \"wrong answer\"], correctAnswers: [3]},\r\n        {text: \"question text 5\", answers: [\"correct answer\", \"wrong answer\", \"wrong answer\", \"correct answer\"], correctAnswers: [1, 4]},\r\n      ],\r\n      userAnswers: [\r\n\r\n      ]\r\n    }\r\n  },\r\n\r\n  getState() {\r\n    return this._state\r\n  },\r\n\r\n  dispatch(action) {\r\n    this._state.questionPage = (0,_question_reducer__WEBPACK_IMPORTED_MODULE_0__.questionReducer)(this._state.questionPage, action)\r\n  }\r\n}\r\n\r\nwindow.store = store\r\n\n\n//# sourceURL=webpack://lever-test/./src/redux/store.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;