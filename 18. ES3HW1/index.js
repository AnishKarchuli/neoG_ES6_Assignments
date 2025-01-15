console.log("Program 1:")
const rectangleArea = (l = 5, b = 3) => l * b
console.log(rectangleArea())
console.log(rectangleArea(4))
console.log("---- ---- ----")

console.log("Program 2:")
const concatenateStrings = (str1, str2 = " neoG") => str1 + str2
console.log(concatenateStrings("Hello", "World"))
console.log(concatenateStrings("Hello"))
console.log("---- ---- ----")

console.log("Program 3:")
const cylinderVolume = (radius, height = 5) => Math.PI * radius * radius * height
console.log(cylinderVolume(3))
console.log(cylinderVolume(3, 5))
console.log("---- ---- ----")

console.log("Program 4:")
const shoppingCartTotal = (price, quantity = 1) => price * quantity
console.log(shoppingCartTotal(10))
console.log(shoppingCartTotal(15, 3))
console.log(shoppingCartTotal(0))
console.log("---- ---- ----")

console.log("Program 5:")
const generateUserProfile = (username = "Guest", age = 25, country = "Unknown") => ({Username: username, Age: age, Country: country})
console.log(generateUserProfile())
console.log(generateUserProfile("Alice", 30, "USA"))
console.log("---- ---- ----")

console.log("Program 6:")
const sum = (a, b = 5) => a + b
console.log(sum(2, 4))
console.log(sum(3))
console.log("---- ---- ----")

console.log("Program 7:")
const calculatePower = (base, exponent = 1) => base ** exponent
console.log(calculatePower(2, 3))
console.log(calculatePower(5))
console.log("---- ---- ----")

console.log("Program 8:")
const triangleArea = (base, height = 4) => base * height / 2
console.log(triangleArea(5))
console.log(triangleArea(3, 6))
console.log("---- ---- ----")

console.log("Program 9:")
const concatenateStrings2 = (str1, str2 = '') => str1 + str2
console.log(concatenateStrings2("Good"))