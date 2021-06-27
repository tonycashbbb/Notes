const getUniqLetters = (arr) => {
  let uniqLetters = []

  arr.forEach(item => {
    if (!uniqLetters.includes(item)) {
      uniqLetters.push(item)
    }
  })

  return uniqLetters
}

const countLetters = (str, letter) => {
  let letter_Count = 0;

  for (let position = 0; position < str.length; position++) {
    if (str.charAt(position) === letter) {
      letter_Count += 1;
    }
  }

  return letter_Count;
}

const z1 = (string) => {
  const uniqLetters = getUniqLetters(string.split(''))
  const res = []

  uniqLetters.forEach(letter => {
    res.push(`${letter} - ${countLetters(string, letter)}`)
  })

  return res
}

console.log(z1("aabbbccc"))


