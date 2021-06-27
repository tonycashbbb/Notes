export const showLoseMessage = (questions, wrongQuestionNums, score) => {
  let message = ["Вы неправильно ответили на вопросы:"]

  for (let i = 0; i < wrongQuestionNums.length; i++) {
    message.push(`${i+1}. ${questions[wrongQuestionNums[i]].text}`)
  }

  alert(
`${message.shift()}

${message.join('\n')}
  
Ваш результат: ${score} из ${questions.length}`)
}
