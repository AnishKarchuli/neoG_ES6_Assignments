const { title } = require("process")

console.log("Program 1:")
const createPerson = (name, age) => {
  return {name, age}
}
console.log(createPerson("Alice", 25))
console.log(createPerson("Bob", 30))
console.log("---- ---- ----")
console.log("Program 2:")
const createFruit = (name = "Apple", color = "Red") => {
  return {name, color}
}
console.log(createFruit())
console.log(createFruit("Banana", "Yellow"))
console.log("---- ---- ----")
console.log("Program 3:")
const createBookObj = (title, author, genre) => {
  return {title, author, genre}
}
console.log(createBookObj("The Great Gatsby", "F. Scott Fitzgerald", "Classic"))
console.log(createBookObj("The Beatles Anthology", "The Beatles", "Music"))
console.log("---- ---- ----")
console.log("Program 4:")
const createBook = (bookName = "The Hitchhiker's Guide to the Galaxy", author = "Douglas Adams") => {
  return {bookName, author}
}
console.log(createBook())
console.log(createBook("A Suitable Boy", "Vikram Seth"))
console.log("---- ---- ----")
console.log("Program 5:")
let aaloo = 1;
let bhaaloo = 2;

const obj = (aaloo, bhaaloo) => {
  return {aaloo, bhaaloo}
}
console.log(obj(aaloo, bhaaloo))
console.log("---- ---- ----")
console.log("Program 6:")
let length = 5
let width = 8
let area = length * width
const calculateArea = (length, width) => {
  return {length, width, area}
}
console.log(calculateArea(5, 8))
console.log("---- ---- ----")
console.log("Program 7:")
const printObjOfArrays = (arr1, arr2) => {
  return {arr1, arr2}
}
console.log(printObjOfArrays([1, 2, 3], ["a", "b"]))
console.log("---- ---- ----")
console.log("Program 8:")

const createTriangle = (side1, side2, side3) => {
  let perimeter = side1 + side2 + side3
  return {side1, side2, side3, perimeter}
}
console.log(createTriangle(3, 4, 5))
console.log("---- ---- ----")
console.log("Program 9:")
const createPoint = (x, y) => {
  return {x, y}
}
console.log(createPoint(3, 7))
console.log("---- ---- ----")
console.log("Program 10:")
const createEmail = (username, domain) => {
  let fullAddress = username + "@"+ domain
  return {username, domain, fullAddress}
}
console.log(createEmail("john.doe", "example.com"))