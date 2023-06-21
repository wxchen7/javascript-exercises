const fibonacci = (count) => {
  if (count < 0) return 'OOPS'
  const fibPart = [0, 1]
  for (let i = 1; i < count; i++) {
    fibPart.push(fibPart[i] + fibPart[i - 1])
  }
  return fibPart[count]
}

// Do not edit below this line
module.exports = fibonacci
