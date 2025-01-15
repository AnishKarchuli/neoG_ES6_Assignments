console.log("Program 1")
const rectangleArea = (l, b) => l * b
console.log(rectangleArea(5, 8))
console.log("---- ---- ----")
console.log("Program 2")
const checkDivisibility = (a, b) => a % b === 0
console.log(checkDivisibility(4, 2))
console.log("---- ---- ----")
console.log("Program 3")
const difference = (a, b) => a - b
console.log(difference(10, 5))
console.log("---- ---- ----")
console.log("Program 4")
const concatString = (str1, str2, str3) => str1 + str2 + str3
console.log(concatString("I ", "am ", "happy."))
console.log("---- ---- ----")
console.log("Program 5")
// const isBigger = (a, b) => a > b
// console.log("Is 2 bigger than 3?", isBigger(2, 3))
function isBigger(a, b){
  if(a > b){
    return true
  } else {
    return false
  }
}
console.log("Is 2 bigger than 3?", isBigger(2, 3))
console.log("---- ---- ----")
console.log("Program 6")
// function printProduct(a, b){
  // return a * b
// };
// console.log("Product of two numbers: ", printProduct(2, 6))
const printProduct = (a, b) => a * b
console.log("Product of 2 numbers", printProduct(2, 6))
console.log("---- ---- ----")
console.log("Program 7")
// function getGreeting(greeting, name){
//   return greeting + name
// }
// console.log(getGreeting("Hello ", "John"))
const getGreeting = (greeting, name) => greeting + name
console.log(getGreeting("Hello ", "John"))