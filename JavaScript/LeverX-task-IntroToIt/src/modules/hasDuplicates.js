export const hasDuplicates = (array) => {
  let valuesAlreadySeen = []

  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    if (valuesAlreadySeen.indexOf(value) !== -1) {
      return true
    }
    valuesAlreadySeen.push(value)
  }

  return false
}
