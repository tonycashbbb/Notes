const firstUniqChar = (s) => {
  let map = new Map()

  for (let i = 0; i < s.length; i++) {
    let letter = s[i]

    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1)
    } else {
      map.set(letter, 1)
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i
    }
  }

  return -1
}
// console.log(firstUniqChar("loveleetcode"))

const alinaLetters = (s) => {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    const letter = s[i]

    if (!map.has(letter)) {
      map.set(letter, 1)
    } else {
      map.set(letter, map.get(letter) + 1)
    }
  }

  let res = ''
  map.forEach((value, key) => {
    res += `${key}${value}`
  })

  return res
}
// console.log(alinaLetters("loveleetcode"))

const shuffle = (arr) => {
  return [...arr].sort(() => 0.5 - Math.random());
}
// callback inside sort
// 1. < 0 a comes first
// 2. 0 nothing changes
// 3. > 0 b comes first
// a - b
// console.log(shuffle([1,2,3,4,5,6,7,8,9,10]))

const isPalindrome = (s) => {
  const newStr = s.split('').reverse().join('')
  return s === newStr
}
const isPalindromeNumber = (s) => {
  // const newStr = s.split('').reverse().join('')
  const newStr = [...s].reverse()

  for (let i = 0; i < s.length; i++) {
    if (newStr[i] !== s[i]) {
      return false
    }
  }

  return true
}
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("abbaq"))
// console.log(isPalindromeNumber([1, 2, 1]))
// console.log(isPalindromeNumber([1, 2, 13]))

const singleNumber = (arr) => {
  const map = new Map()
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    if (!map.has(num)) {
      map.set(num, 1)
    } else {
      map.set(num, map.get(num) + 1)
    }
  }

  map.forEach((value, key) => {
    if (value === 1) {
      res = key
    }
  })

  return res
}
// console.log(singleNumber([1,2,3,1,2,3,8]))

const fizzBuzz = (num) => {
  const arr = []
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
      arr.push('fizzbuzz')
    }
    if (i % 3 === 0) {
      arr.push('fizz')
      continue
    }
    if (i % 5 === 0) {
      arr.push('buzz')
      continue
    }
    arr.push(i)
  }

  return arr
}
// console.log(fizzBuzz(22))

const findVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'u', 'o']
  let counter = 0

  for (let char of str) {
    if (vowels.includes(char)) {
      counter++
    }
  }

  return counter
}
// console.log(findVowels("kkkeek"))

const isAnagram = (word1, word2) => {
  word1 = word1.split('').sort().join('')
  word2 = word2.split('').sort().join('')

  return word1 === word2
}
console.log(isAnagram('friend', 'finder'))
console.log(isAnagram('friend', 'finderq'))
