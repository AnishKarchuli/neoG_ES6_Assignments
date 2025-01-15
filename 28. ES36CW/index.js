// shorthand

let personName = "Maze";
let age = 20;

// const obj = {
//   name: personName,
//   age: age
// }

// const obj1 = {personName, age}

const createPerson = (personName, age) => {
  return { personName, age };
};
console.log(createPerson(personName, age));