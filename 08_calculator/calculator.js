const add = (a, b) => a + b

const subtract = (a, b) => a - b

const sum = (arr) => {
  if (!arr) return 0
  let sum = 0
  for (const ele of arr) {
    sum += ele
  }
  return sum
}

// better solution
// const sum = function (array) {
//   return array.reduce((total, current) => total + current, 0)
// }

const multiply = (...args) => {
  let res = 1
  for (const arg of args) {
    res *= arg
  }
  return res
}

const power = (a, b) => Math.pow(a, b)

const factorial = (a) => {
  if (a === 0) return 1
  let res = 1
  for (let i = a; i > 1; i--) {
    res *= i
  }
  return res
}

// This is another implementation of Factorial that uses recursion
// THANKS to @ThirtyThreeB!
// const recursiveFactorial = function (n) {
//   if (n === 0) {
//     return 1
//   }
//   return n * recursiveFactorial(n - 1)
// }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}
