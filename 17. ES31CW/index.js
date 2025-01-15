// Default Parameters

// write an arrow function with default params to add two numbers

const addNumbers = (a, b = 1) => a + b
console.log(addNumbers(2))

// write an arrow function with default params to multiply two numbers
const multiplyNumbers = (a, b = 1) => a + b
console.log(multiplyNumbers(2, 2))

// write an arrow function with default params to concatenate two strings

const concatenateStrings = (name, greeting = "Hello ") => greeting + name
console.log(concatenateStrings("Bob"))

// write an arrow function with default params to greet user
const greetUser = (name = "neoGrammer", greeting = "Hello ") => greeting + name
console.log(greetUser())

// write an arrow function with default params to add three numbers

const addThreeNumbers = (a, b, c = 3) => a + b + c
console.log(addThreeNumbers(1, 2))