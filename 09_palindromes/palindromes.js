const palindromes = (str) => {
  const modifiedStr = str
    .toLowerCase()
    .split('')
    .filter((val) => val !== ' ' && val !== ',' && val !== '.' && val !== '!')
    .join('')

  const reversedStr = modifiedStr.split('').reverse().join('')

  if (modifiedStr === reversedStr) return true
  else return false
}

// Do not edit below this line
module.exports = palindromes
