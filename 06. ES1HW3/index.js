console.log("Program 1:")
let numberArray = [5, 12, 7, 25, 18, 3]
function print(){
  console.log(numberArray)
}
print();
console.log("\n")
console.log("Program 2:")
function add10ToArray(arr){
  let newArray = []
  for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i] + 10)
  }
  return newArray
}
console.log(add10ToArray(numberArray))
console.log("\n")
console.log("Program 3:")
function oddToEven(arr){
  let convertedArray = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      convertedArray.push(arr[i] + 1)
    } else {
      convertedArray.push(arr[i])
    }
  } 
  return convertedArray
}
console.log(oddToEven(numberArray))
console.log("\n")
console.log("Program 4:")
function evenNumberArray(arr){
  let evenNumberArray = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evenNumberArray.push(arr[i]);
    }
  }
  return evenNumberArray
}
console.log(evenNumberArray(numberArray))
console.log("\n")
console.log("Program 5:")
function sumOfArray(arr){
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum
}
console.log("Sum of the array:", sumOfArray(numberArray))
console.log("\n")
console.log("Program 6:")
function sumOfEvenAndOddArray(arr){
  let sumOfEven = 0
  let sumOfOdd = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumOfEven += arr[i]
    } else {
      sumOfOdd += arr[i]
    }
  }
  return {
    sumOfEven: sumOfEven,
    sumOfOdd: sumOfOdd
  }
}
console.log(sumOfEvenAndOddArray(numberArray))