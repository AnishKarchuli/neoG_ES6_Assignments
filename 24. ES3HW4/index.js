console.log("Program 1:")
const sumAndDifference = (arr) => {
  const [num1, num2] = arr
  console.log("Sum: ", num1 + num2 + "," + " Difference:", num1 - num2)
}
sumAndDifference([5, 3])
sumAndDifference([10, 7])
console.log("---- ---- ----")
console.log("Program 2:")
const extractFirstAndLast = (str) => {
  const firstChar = str.charAt(0)
  const lastChar = str.charAt(str.length - 1)
  console.log("First character:", firstChar + "," + " Last character:", lastChar )
}
extractFirstAndLast("hello")
extractFirstAndLast("world")
console.log("---- ---- ----")
console.log("Program 3:")
const calculateRectangleArea = (obj) => {
  const {length, width} = obj
  console.log("The area of the rectangle is: ", length * width)
}
calculateRectangleArea({length: 5, width: 3})
calculateRectangleArea({length: 8, width: 4})
console.log("---- ---- ----")
console.log("Program 4:")
const getFirstTwoColors = (arr) => {
  const [col1, col2, col3, col4] = arr
  console.log("The first two colors are:", col1, "and", col2)
}
getFirstTwoColors(["red", "blue", "green", "yellow"])
console.log("---- ---- ----")
console.log("Program 5:")
const extractNestedInfo = (obj) => {
  const { data: {name, age, country} } = obj
  console.log(name, "is", age, "years old and lives in", country)
}
extractNestedInfo({data: {name: "John", age: 35, country: "USA"}})
extractNestedInfo({data: {name: "Emma", age: 28, country: "Canada"}})
console.log("---- ---- ----")
console.log("Program 6:")
const productAndDifference = (arr) => {
  const [num1, num2, num3, num4] = arr
  console.log("Product and Difference: ", (num1 * num2) - num3)
}
productAndDifference([5, 3, 5, 6])
productAndDifference([10, 7, 35, 30])
console.log("---- ---- ----")
console.log("Program 7:")
const obj1 = {
  id: 1,
  product: {
    itemName: "Pencil",
    description: "Extra Dark Pencil",
    manufacturingCountry: "USA"
  }
}

const obj2 = {
  id: 2,
  product: {
    itemName: "Sharpener",
    description: "Faber Castell Premium",
    manufacturingCountry: "Germany"
  }
}

const extractData = (obj) => {
  const {product: {itemName, description, manufacturingCountry}} = obj
  console.log("Item name:", itemName + ", " + "Description:", description + ", " + "Manufacturing Country:", manufacturingCountry)
}
extractData(obj1)
extractData(obj2)