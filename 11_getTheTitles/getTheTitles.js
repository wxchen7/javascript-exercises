const getTheTitles = (books) => {
  const res = []
  for (const item of books) {
    res.push(item.title)
  }
  return res
}

// Do not edit below this line
module.exports = getTheTitles
