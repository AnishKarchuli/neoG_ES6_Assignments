console.log("Program 1:")
function calculateSalary(hoursWorked, hourlyRate){
  let totalSalary = hoursWorked * hourlyRate
  return totalSalary
}
console.log(calculateSalary(8, 1000))
console.log("\n")
console.log("Program 2:")
function calculateBonus(workedHours, marks, salary){
  let bonus = 0
  if(workedHours > 25 && marks > 85){
    bonus = 0.1 * salary
  } else if (workedHours > 15 && marks > 75){
    bonus = 0.05 * salary
  }
  return salary + bonus
}
console.log(calculateBonus(20, 80, 5000))
console.log("\n")
console.log("Program 3:")
function calculateFinalAmount(price1, quantity1, price2, quantity2){
  let finalAmount = (price1 * quantity1) + (price2 * quantity2)
  return finalAmount
}
console.log(calculateFinalAmount(200, 10, 500, 5));
console.log("\n")
console.log("Program 4:")
function calculateAllowance(age, isStudent, baseAllowance){
  let additionalAllowance = 0;
  if(age < 18 && isStudent === "true"){
      additionalAllowance = 100
  } else if(18 <= age >= 25 && isStudent === true){
      additionalAllowance = 50
  }
  return baseAllowance + additionalAllowance
}
console.log(calculateAllowance(16, "true", 500))
console.log("\n")
console.log("Program 5:")
function calculateShippingCost(totalWeight, country, baseCost){
  let shippingCost = 0;
  if(totalWeight <= 1 && country === "Local"){
    shippingCost = 10
  } else if(totalWeight > 1 && country === "International"){
    shippingCost = 20
  }
  return baseCost + shippingCost
}
console.log(calculateShippingCost(0.5, "Local", 50))