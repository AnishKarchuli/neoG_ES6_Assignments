console.log("Question 1")
let car = {
  brand: "Toyota",
  model: "Corolla"
}
console.log("1.1:", car.brand)
console.log("1.2:", car.model)
car.brand = "Honda"
console.log("1.4:", car)
car.year = 2022
car.color = "Blue"
console.log("Properties of 'car' object")
for(let property in car){
  console.log(property + ": " + car[property])
}
console.log("\n")
console.log("Question 2:")
let citizen = {
  name: "Ramesh Kumar",
  age: 60,
  occupation: "Retired"
}
citizen.age = 68
console.log("2.1:", "Updated age:", citizen.age)
citizen.age = 68 + 2
console.log("2.2:", "Updated age after adding 2:", citizen.age)
citizen.city = "Delhi"
console.log("2.3:", "Properties of 'citizen' object")
for(let property in citizen){
  console.log(property + ": " + citizen[property])
}
console.log("\n")
console.log("Question 3:")
let person = {
  name: "Uttam",
  age: 33
}
person.bp = "Normal"
console.log("3.1:", person.bp)
if(person.age > 60 && person.bp === "Normal"){
  console.log("3.2:", "Fit to travel")
} else {
  console.log("3.2:", "Not fit to travel")
}