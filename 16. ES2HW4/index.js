console.log("Program 1:")
const calculateAverage = (numArray) => {
  let sum = 0
  for(let i = 0; i < numArray.length; i++){
    sum += numArray[i]
  }
  const avg = sum / numArray.length
  return avg
}
console.log(calculateAverage([5, 10, 15]))
console.log("---- ---- ----")
console.log("Program 2:")
const reverseString = (str) => {
  let reversedStr = ''
  for(let i = str.length - 1; i >= 0 ; i--){
    reversedStr += str[i]
  }
  return reversedStr
}
console.log(reverseString("world"))
console.log("---- ---- ----")
console.log("Program 3:")
const findLongestWord = (wordArray) => {
  let longestWord = wordArray[0]
  for(let i = 1; i < wordArray.length; i++){
    if(wordArray[i].length > longestWord.length){
      longestWord = wordArray[i]
    }
  }
  return longestWord
}
console.log(findLongestWord(["apple", "banana", "grapefruit"]))
console.log("---- ---- ----")
console.log("Program 4:")
const calculateStringLength = (str) => {
  let length = 0
  for(let i = 0; i < str.length; i++){
    length++
  }
  return length
}
console.log(calculateStringLength("hello"))
console.log("---- ---- ----")
const students = [
  {name: "Aice", age: 20, grade: 85},
  {name: "Bob", age: 22, grade: 92},
  {name: "Charlie", age: 19, grade: 88}
]
console.log("Program 5.1:")
const calculateAverageGrade = (students) => {
  let sumOfGrade = 0
  for(let i = 0; i < students.length; i++){
    sumOfGrade += students[i].grade
  }
  let avgGrade = sumOfGrade / students.length
  return avgGrade
}
console.log("Average Grade:", calculateAverageGrade(students))
console.log("---- ---- ----")
console.log("Program 5.2:")
const getNames = (students) => {
  let nameArr = []
  for(let i = 0; i < students.length; i++){
    nameArr.push(students[i].name)
  }
  return nameArr
}
console.log(getNames(students))
console.log("---- ---- ----")
console.log("Program 5.3:")
const calculateAverageAge = (students) => {
  let totalAge = 0
  for(let i = 0; i < students.length; i++){
    totalAge += students[i].age
  }
  let avgAge = totalAge / students.length
  return avgAge
}
console.log(calculateAverageAge(students))
console.log("---- ---- ----")
console.log("Program 5.4:")
const highGrades = (students) => {
  let highGrade = []
  for(let i = 0; i < students.length; i++){
    if(students[i].grade >= 90){
      highGrade.push(students[i])
    }
  }
  return highGrade
}
console.log(highGrades(students))
console.log("---- ---- ----")
console.log("Program 5.5:")
const isAnyBelow18 = (students) => {
  for(let i = 0; i < students.length; i++){
    if(students[i].age < 18){
      return true
    } else {
      return false
    }
  }
}
console.log(isAnyBelow18(students))
console.log("---- ---- ----")
console.log("Program 5.6:")
const findStudentByName = (students, name) => {
  for(let i = 0; i < students.length; i++){
    if(students[i].name === name){
      return students[i]
    }
  }
}
console.log(findStudentByName(students, "Charlie"))
console.log("---- ---- ----")
console.log("Program 5.7:")
const getHighScoreStudents = (students) => {
  let highScoreStudents = []
  for(let i = 0; i < students.length; i++){
    if(students[i].grade > 85){
      highScoreStudents.push(students[i].name)
    }
  }
  return highScoreStudents
}
console.log(getHighScoreStudents(students))