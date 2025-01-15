console.log("Question 1:")
const studentData = [
  {
    name: "Rahul",
    rollNo: 101,
    hindi: 80,
    english: 75,
    maths: 90
  },
  {
    name: "Amit",
    rollNo: 102,
    hindi: 85,
    english: 70,
    maths: 95
  },
  {
    name: "Priya",
    rollNo: 103,
    hindi: 78,
    english: 92,
    maths: 87
  }
]
const marksForCompter = [88, 92, 95]
console.log("1.1: Students Data with Computer Marks")
for(let i = 0; i < studentData.length; i++){
  studentData[i].computer = marksForCompter[i]
  console.log("Name: " + studentData[i].name + ", " + "Roll No: " + studentData[i].rollNo + ", " + "Hindi: " + studentData[i].hindi + ", " + "English: " + studentData[i].english + ", " + "Maths: " + studentData[i].maths + ", " + "Computer: " + studentData[i].computer)
}
console.log("\n")
console.log("1.2" + ": " + "Updated Students Data with Science Marks")
const marksForScience = [82, 90, 88]
for(let i = 0; i < studentData.length; i++){
  studentData[i].science = marksForScience[i]
  console.log("Name:" + studentData[i].name + ", " + "Roll No: " + studentData[i].rollNo + ", " + "Hindi: " + studentData[i].hindi + ", " + "English: " + studentData[i].english + ", " + "Maths: " + studentData[i].maths + ", " + "Computer: " + studentData[i].computer + ", " + "Science: " + studentData[i].science)
}
console.log("\n")
console.log("Question 2:")
const kaveriData = {
  name: "Kaveri",
  rollNo: 104,
  hindi: 84,
  english: 88,
  maths: 78,
  computer: 90,
  science: 86
}
console.log("2.1: " + "Kaveri's Data")
console.log(kaveriData)
console.log("\n")
studentData.push(kaveriData)
console.log("2.2: " + "Updated Students Data with Kaveri")
for(let i = 0; i < studentData.length; i++){
  console.log("Name: " + studentData[i].name + ", " + "Roll No: " + studentData[i].rollNo + ", " + "Hindi: " + studentData[i].hindi + ", " + "English: " + studentData[i].english + ", " + "Maths: " + studentData[i].maths + ", " + "Computer: " + studentData[i].computer + ", " + "Science: " + studentData[i].science)
}
console.log("\n")
console.log("2.3: " + "Updated Students Data with Total Marks")
for(let i = 0; i < studentData.length; i++){
  let totalMarks = studentData[i].hindi + studentData[i].english + studentData[i].maths + studentData[i].computer + studentData[i].science
  studentData[i].totalMarks = totalMarks

  console.log("Name: " + studentData[i].name + ", " + "Roll No: " + studentData[i].rollNo + ", " + "Total Marks: " + studentData[i].totalMarks)
}
console.log("\n")
console.log("2.4: " + "Updated Students Data with Average Marks")
for(let i = 0; i < studentData.length; i++){
  const noOfSubjects = 5
  const avgMarks = studentData[i].totalMarks/noOfSubjects
  studentData[i].avgMarks = avgMarks
  console.log("Name: " + studentData[i].name + ", " + "Roll No: " + studentData[i].rollNo + ", " + "Average Marks: " + studentData[i].avgMarks)
}
console.log("\n")
console.log("Question 3:")
for(let i = 0; i < studentData.length; i++){
  generateReportCard(studentData[i])
}

function generateReportCard(student){
  console.log("===== Report Card for " + student.name + " =====" + "\n" + "Roll No. :" + student.rollNo + "\n" + "------\n" + "Marks" + "\n------\n" + "Hindi: " + student.hindi + "\n" + "English: " + student.english + "\n" + "Maths: " + student.maths + "\n" + "Computer: " + student.computer + "\n" + "Science: " + student.science + "\n------\n" + "Total: " + student.totalMarks + "\n" + "Average: " + student.avgMarks + "\n" + "Grade: " + getGrade(student.avgMarks) + "\n------ ------ ------ ------")
}

function getGrade(avg){
  if(avg >= 90 && avg <= 100){
    return "A"
  } else if(avg >= 80 && avg <= 89){
    return "B"
  } else if(avg >= 70 && avg <= 79){
    return "C"
  } else if(avg >= 60 && avg <= 69){
    return "D"
  } else if(avg >= 50 && avg <= 59){
    return "E"
  } else {
    return "F"
  }
}