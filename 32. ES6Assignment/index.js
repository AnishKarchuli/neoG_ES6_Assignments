console.log("Program 1:")
const concatenateStrings = (...str) => str.join(" ")
console.log(concatenateStrings("Hello", "world", "!"))
console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn."))
console.log("---- ---- ----")
console.log("Program 2:")
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2]
console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays(["a", "b"], ["c", "d", "e"]))
console.log("---- ---- ----")
console.log("Program 3:")
const concatenateWithSeparator = (sep, ...str) => str.join(sep)
console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'))
console.log(concatenateWithSeparator(', ', 'red', 'green', 'blue', 'yellow'))
console.log("---- ---- ----")
console.log("Program 4:")
const extractObjectValues = (obj) => {
  const {name, age} = obj
  return `Name:${name},Age:${age}`
}
console.log(extractObjectValues({name: "Alice", age: 25}))
console.log(extractObjectValues({name: "Bob", age: 30}))
console.log("---- ---- ----")
console.log("Program 5:")
const extractArrayValues = (arr) => {
  const [arr1, arr2, arr3] = arr
  return `Values: ${arr1}, ${arr2}, ${arr3}`
}
console.log(extractArrayValues([1, 2, "Hello", 3]))
console.log(extractArrayValues(["apple", "orange", "banana"]))
console.log("---- ---- ----")
console.log("Program 6:")
const extractNestedValues = (obj) => {
  const {data: {firstName, lastName, age}} = obj
  return `${firstName} ${lastName} will be ${age + 5} years old in five years.`
}
console.log(extractNestedValues({data: {firstName: "Priya", lastName: "Gupta", age: 20}}))
console.log(extractNestedValues({data: {firstName: "John", lastName: "Doe", age: 25}}))
console.log("---- ---- ----")
console.log("Program 7:")
const printInfo = ({name: {firstName: personFirstName, lastName: personLastName}, department: departmentName}) => {
  return `${personFirstName} ${personLastName} works in ${departmentName} department.`
}
console.log(printInfo({name: {firstName: "John", lastName: "Doe"}, department: "IT"}))
console.log(printInfo({name: {firstName: "Alice", lastName: "Smith"}, department: "Legal"}))
console.log("---- ---- ----")
console.log("Program 8:")
const printUserDetails = ({name, username = "Anonymous", post = "Hello World!"}) => {
  return `${username} posted "${post}"`
}
console.log(printUserDetails({name: "John", username: "john", post: "Hello this is John. I am from England."}))
console.log(printUserDetails({}))
console.log("---- ---- ----")
console.log("Program 9:")
const checkEvenOdd = (num) => {
  return `${num} is an ${num % 2 === 0 ? "even" : "odd"} number.`
}
console.log(checkEvenOdd(8))
console.log(checkEvenOdd(15))
console.log("---- ---- ----")
console.log("Program 10:")
const checkDiscountEligibility = (purchaseValue, isPremium) => {
  return `You are eligible for a ${purchaseValue > 100 && isPremium === true ? "10%" : "5%"} discount.`
}
console.log(checkDiscountEligibility(120, true))
console.log(checkDiscountEligibility(90, false))
console.log("---- ---- ----")
console.log("Program 11:")
const object1 = {name: 'Alice', age: 30}
const object2 = {city: 'London', country: 'UK'}
const mergeObject = (object1, object2) => ({...object1, ...object2})
console.log(mergeObject(object1, object2))
console.log("---- ---- ----")
console.log("Program 12:")
const object = {name: 'Dave', age: 25}
const addKeyValuePair = (object, key, value) => ({
  ...object, [key]: value
})
console.log(addKeyValuePair(object, 'city', 'New York'))