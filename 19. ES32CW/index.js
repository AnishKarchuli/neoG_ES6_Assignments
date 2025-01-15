const restExample = (a, b,  ...rest) => {
  console.log(a);
  console.log(b);
  console.log(rest);
};

restExample(1, 2, 3, 4, 5, 6);

const concatinateStrings = (...rest) => console.log(rest.join(" "))

concatinateStrings("Hello", "World")
concatinateStrings("JavaScript", "is", "fun")

const countArguments = (...args) => console.log(args.length)

countArguments(1, 2, "Hello", "Joy")
countArguments("Good", "Job")