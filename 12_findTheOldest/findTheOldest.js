const findTheOldest = (arr) => {
  let index = 0
  let age = 0
  const currentYear = new Date().getFullYear()
  for (let i = 0; i < arr.length; i++) {
    const person = arr[i]

    if (person.yearOfDeath) {
      newAge = person.yearOfDeath - person.yearOfBirth
    } else newAge = currentYear - person.yearOfBirth

    if (age < newAge) {
      age = newAge
      index = i
    }
  }
  return arr[index]
}

// Do not edit below this line
module.exports = findTheOldest
