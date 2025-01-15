const isBirthday = true;
let age = 0
if(isBirthday){
  age = age + 1
}
console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n")

console.log("Program 2:")
let ticketPrice = 500
let passengerAge = 58
let discountedPrice;
if(passengerAge > 60){
  discountedPrice = ticketPrice - (ticketPrice * 0.15)
} else {
  discountedPrice = ticketPrice
}
if(passengerAge > 60){
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`)
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`)
}
console.log("\n")

console.log("Program 3:")
let num1 = 10;
let num2 = 15;
let num3 = 12;
if(num3 > num2 && num3 > num1){
  console.log("The third number " + num3 + " is the largest.")
} else {
  console.log("The third number " + num3 + " is not the largest.")
}
console.log("\n")
console.log("Program 4:")
let item1 = "Saree";
let item2 = "Kurta";
let item3 = "Jeans";
let item4 = "Shoes";
let item1Price = 500;
let item2Price = 300;
let item3Price = 900;
let item4Price = 400;
let deliveryCharges;
let totalCartPrice;

if (item1Price + item2Price + item3Price + item4Price < 1999) {
  deliveryCharges = 99;
} else {
  deliveryCharges = "No Delivery Charge";
}

console.log("Shopping Cart:");
console.log("--------------------------");
console.log("Item: " + item1 + ", " + "Price: " + item1Price);
console.log("Item: " + item2 + ", " + "Price: " + item2Price);
console.log("Item: " + item3 + ", " + "Price: " + item3Price);
console.log("Item: " + item4 + ", " + "Price: " + item4Price);
console.log("--------------------------");
console.log("Delivery Charges: " + deliveryCharges);
console.log("--------------------------");
if(typeof deliveryCharges === 'number'){
  totalCartPrice = item1Price + item2Price + item3Price + item4Price + deliveryCharges;
} else {
  totalCartPrice = item1Price + item2Price + item3Price + item4Price
}
console.log("Total Cart Price: " + totalCartPrice);
console.log("\n")
console.log("Program 5:")
let num = 0
if(num > 0){
  console.log("The number is positive.")
} else if(num < 0){
  console.log("The number is negative.")
} else {
  console.log("The number is zero.")
}
console.log("\n")
console.log("Program 6:")
let marks1 = 85
let marks2 = 90
let marks3 = 78
let student1 = "Rahul"
let student2 = "Priya"
let student3 = "Tina"
if(marks1 > marks2 && marks1 > marks3){
  console.log(student1 + ", scored the highest marks.")
} else if(marks2 > marks1 && marks2 > marks3){
  console.log(student2 + ", scored the highest marks.")
} else if(marks3 > marks1 && marks3 > marks2){
  console.log(student3 + ", scored the highest marks.")
}