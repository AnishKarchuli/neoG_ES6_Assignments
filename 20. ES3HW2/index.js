console.log("Program 1:")
const logFirstAndRest = (a, ...rest) => {
  console.log("First: ", a)
  console.log("Rest: ", rest)
}
logFirstAndRest(1, 2, 3, 4, 5)
console.log("---- ---- ----")
console.log("Program 2:")
const logFirstAndSecond = (a, b, ...rest) => {
  console.log("First: ", a)
  console.log("Second: ", b)
  console.log("Rest: ", rest)
}
logFirstAndSecond(12, 22, 33, 44, 55)
console.log("---- ---- ----")
console.log("Program 3:")
const calculateProduct = (...numbers) => {
  let product = 1
  for(let i = 0; i < numbers.length; i++){
    product *= numbers[i]
  }
  return product
}
console.log(calculateProduct(2, 3, 4))
console.log(calculateProduct(5, 2, 1, 3))
console.log("---- ---- ----")
console.log("Product 4:")
const createSentence = (...words) => words.join(" ")
console.log(createSentence("JavaScript", "is", "awesome"))
console.log("---- ---- ----")
console.log("Program 5:")
const findSum = (...numbers) => {
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
  return sum;
}
console.log("Sum of Numbers: " + findSum(2, 4, 6, 8 , 10))
console.log("---- ---- ----")
console.log("Program 6:")
const containsValue = (valueToFind, ...values) => {
  return values.includes(valueToFind)
}
console.log(containsValue(3, 1, 2, 3, 4))
console.log(containsValue("apple", "banana", "orange"))
console.log("---- ---- ----")
console.log("Program 7:")
const calculateAverage = (...numbers) => {
  let sum = 0
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
  }
  let avg = sum / numbers.length
  return avg
}
console.log(calculateAverage(10, 5, 15))
console.log(calculateAverage(2, 4, 6, 8))