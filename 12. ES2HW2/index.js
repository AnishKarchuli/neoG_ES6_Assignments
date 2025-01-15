console.log("Program 1:")
const isOdd = (num) => num % 2 !== 0
console.log(isOdd(3))
console.log("---- ---- ----")
console.log("Program 2:")
const strLength = (str) => str.length
console.log(strLength("Hello"))
console.log("---- ---- ----")
console.log("Program 3:")
const captialStr = (str) => str.toUpperCase()
console.log(captialStr("hello"))
console.log("---- ---- ----")
console.log("Program 4:")
const getCurrentDate = () => new Date().toLocaleDateString()
console.log(getCurrentDate())
console.log("---- ---- ----")
console.log("Program 5:")
const getCurrentTime = () => new Date().toLocaleTimeString()
console.log(getCurrentTime())
console.log("---- ---- ----")
console.log("Program 6:")
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9
console.log(fahrenheitToCelsius(98.6))
console.log("---- ---- ----")
console.log("Program 7:")
const isEmptyString = (str) => str.length === 0
console.log(isEmptyString("Hello"))
console.log(isEmptyString(""))
console.log("---- ---- ----")
console.log("Program 8:")
const getRandomNumber = () => Math.floor(Math.random() * 30) + 1
console.log(getRandomNumber())
console.log("---- ---- ----")
console.log("Program 9:")
const getRandomSquareRoot = () => {
  const getRandomNumber = Math.floor(Math.random() * 100) + 1
  const getSquareRoot = Math.sqrt(getRandomNumber)
  return getSquareRoot
}
console.log(getRandomSquareRoot())
console.log("---- ---- ----")
console.log("Program 10:")
const getLowerCaseString = (str) => str.toLowerCase()
console.log(getLowerCaseString("WORLD"))