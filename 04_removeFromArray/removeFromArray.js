// const removeFromArray = (arr, ...args) => {
//   const newArr = []
//   arr.forEach((item) => {
//     if (!args.includes(item)) {
//       newArr.push(item)
//     }
//   })
//   return newArr
// }

// a more advanced and simpler way
const removeFromArray = (arr, ...args) =>
  arr.filter((value) => !args.includes(value))

// Do not edit below this line
module.exports = removeFromArray
