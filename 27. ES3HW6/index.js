console.log("---- ---- ----")
console.log("Program 1:")
const printTemperature = ({location, temperature}) => {
  console.log(`Location: ${location}, Temperature: ${temperature} degree celsius`)
}
printTemperature({location: "New York", temperature: 15})
printTemperature({location: "London", temperature: 10})
console.log("---- ---- ----")
console.log("Program 2:")
const printFruit = ({fruitName, fruitColor, inStock}) => {
  console.log(`Fruit Name: ${fruitName}, Fruit Color: ${fruitColor}, Available: ${inStock}`)
}
printFruit({fruitName: "Apple", fruitColor: "Red", inStock: true})
printFruit({fruitName: "Grapes", fruitColor: "Green", inStock: false})
console.log("---- ---- ----")
console.log("Program 3:")
const printStudentScores = ([studentName, marks1, marks2, marks3]) => {
  console.log(`Student: ${studentName}, Scores: ${marks1}, ${marks2}, ${marks3}`)
}
printStudentScores(["Alice", 90, 85, 95])
printStudentScores(["Bob", 80, 75, 85])
console.log("---- ---- ----")
console.log("Program 4:")
const printProductDetails = ({name: productName, price: productPrice}) => {
  console.log(`Product: ${productName}, Price: $${productPrice}`)
}
printProductDetails({name: "Laptop", price: 899})
printProductDetails({name: "Phone", price: 599})
console.log("---- ---- ----")
console.log("Program 5:")
const printPersonDetails = ({name: personName = "Anonymous", age: personAge = "Unknown"}) => {
  console.log(`Name: ${personName}, Age: ${personAge}`)
}
printPersonDetails({name: "John", age: 30})
printPersonDetails({})
console.log("---- ---- ----")
console.log("Program 6:")
const printCityPopulation = ([city, {population: populationData, country: countryName}]) => {
  console.log(`City: ${city}, Population: ${populationData}, Country: ${countryName}`)
}
printCityPopulation(["New York", {population: 8623000, country: "USA"}])
printCityPopulation(["Tokyo", {population: 37833000, country: "Japan"}])
console.log("---- ---- ----")
console.log("Program 7:")
const printCarDetails = ([carName, {model: carModel, price}]) => {
  console.log(`Name: ${carName}, Model: ${carModel}, Price: ${price}`)
}
printCarDetails(["All-Terrain SUV", {model: "SUV", price: 4500000}])
printCarDetails(["GreenDrive Electric", {model: "Electric", price: 500000}])