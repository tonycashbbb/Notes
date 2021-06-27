const playSound = (e) => {
  let audio, pianoKey

  if (e.code) {
    audio = document.querySelector(`audio[data-letter=${e.code.slice(3)}]`)
    pianoKey = document.querySelector(`.piano-key[data-letter=${e.code.slice(3)}]`)
  } else {
    audio = document.querySelector(`audio[data-letter=${e.target.dataset.letter}]`)
    pianoKey = document.querySelector(`.piano-key[data-letter=${e.target.dataset.letter}]`)
  }

  if (!audio) return

  pianoKey.classList.add('piano-key-active')

  audio.currentTime = 0
  audio.play()
}
const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return

  e.target.classList.remove('piano-key-active')
}

const startCorrespondOver = () => {
  pianoKeys.forEach(item => {
    item.addEventListener('mouseover', playSound)
  })
}
const stopCorrespondOver = () => {
  pianoKeys.forEach(item => {
    item.removeEventListener('mouseover', playSound)
  })
}

const pianoKeys = document.querySelectorAll('.piano-key')
document.querySelector('.main').addEventListener('mouseup', stopCorrespondOver)

pianoKeys.forEach(item => {
  item.addEventListener('transitionend', removeTransition)
  item.addEventListener('click', playSound)
  item.addEventListener('mousedown', startCorrespondOver)
  item.addEventListener('mouseup', stopCorrespondOver)
})

const btnNotes = document.querySelector('.btn-notes')
const btnLetters = document.querySelector('.btn-letters')

btnNotes.addEventListener('click', () => {
  btnNotes.classList.add('btn-active')
  btnLetters.classList.remove('btn-active')

  pianoKeys.forEach(item => {
    if (item.dataset.letter !== undefined) {
      item.dataset.note = item.dataset.nota
    }
  })
})
btnLetters.addEventListener('click', () => {
  btnLetters.classList.add('btn-active')
  btnNotes.classList.remove('btn-active')

  pianoKeys.forEach(item => {
    if (item.dataset.letter !== undefined) {
      item.dataset.note = item.dataset.letter
    }
  })
})

const fullScreenBtn = document.querySelector('.fullscreen')
const body = document.querySelector('body')

fullScreenBtn.addEventListener('click', () => {
  if (fullScreenBtn.classList.contains('notfull')) {
    fullScreenBtn.classList.add('full')
    fullScreenBtn.classList.remove('notfull')
    body.requestFullscreen()
  } else {
    fullScreenBtn.classList.add('notfull')
    fullScreenBtn.classList.remove('full')
    document.exitFullscreen()
  }
})

window.addEventListener('keydown', playSound)
