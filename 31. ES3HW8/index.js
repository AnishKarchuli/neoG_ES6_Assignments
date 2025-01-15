console.log("Program 1:")
const displayWeather = (city, temperature) => {
  return `The weather in ${city} is ${temperature} degree Celsius.`
}
console.log(displayWeather("New York", 20))
console.log(displayWeather("London", 15))
console.log("---- ---- ----")
console.log("Program 2:")
const formatCurrency = (amount, currency) => {
  return `You have ${amount} ${currency}.`
}
console.log(formatCurrency(50.5, "USD"))
console.log(formatCurrency(100, "EUR"))
console.log("---- ---- ----")
console.log("Program 3:")
const displayBookSummary = (bookName, author, genre) => {
  return `The book "${bookName}" written by ${author} belongs to the ${genre} genre.`
}
console.log(displayBookSummary("To Kill a Mockingbird", "Harper Lee", "Fiction"))
console.log("---- ---- ----")
console.log("Program 4:")
const displayMovieInfo = (movieName, releaseYear, director) => {
  return `The movie "${movieName}" was released in ${releaseYear} and directed by ${director}.`
}
console.log(displayMovieInfo("Inception", 2010, "Christopher Nolan"))
console.log("---- ---- ----")
console.log("Program 5:")
const constructEmail = (recipient, subject) => {
  return `
  To: ${recipient}
  Subject: ${subject}
  
  Dear ${recipient}

  
  ...`
}
console.log(constructEmail("alice@example.com", "Meeting Reminder"))
console.log("---- ---- ----")
console.log("Program 6:")
const assessGrade = (score) => {
  return `You are ${score >= 60 ? "passing" : "failing" }`
} 
console.log(assessGrade(75))
console.log(assessGrade(60))
console.log(assessGrade(45))
console.log("---- ---- ----")
console.log("Program 7:")
const showMessage = (item, quantity) => {
  return `You have ${quantity} ${item}${quantity > 1 ? "s" : ""}.`
}
console.log(showMessage("bangle", 10))
console.log(showMessage("lipstick", 1))
console.log("---- ---- ----")
console.log("Program 8:")
const assessMarks = (marks, grade) => {
  return `You are ${marks >= 60 && grade === "A" ? "passing" : "failing"}`
}
console.log(assessMarks(95, "A"))
console.log(assessMarks(62, "C"))
console.log(assessMarks(45, "D"))
console.log("---- ---- ----")
console.log("Program 9:")
const showMsg = (item1, quantity1, item2, quantity2) => {
  return `${quantity1 > 10 && quantity2 > 5 ? "You have a good collection." : "You need to update your collection."}`
}
console.log(showMsg("bangle", 11, "lipstick", 6))
console.log(showMsg("bangle", 5, "lipstick", 1))
console.log(showMsg("bangle", 12, "lipstick", 4))
console.log("---- ---- ----")
console.log("Program 10:")
const shareStationeryMessage = (pencilQuantity, eraserQuantity) => {
  return `${pencilQuantity > 10 && eraserQuantity > 5 || pencilQuantity > 5 && eraserQuantity > 10 ? "Please share stationery with friends." : "Please ask your friends for stationery."}`
}
console.log(shareStationeryMessage(12, 8))
console.log(shareStationeryMessage(7, 15))
console.log(shareStationeryMessage(5, 3))