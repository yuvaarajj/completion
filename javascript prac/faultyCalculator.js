let firstNumber = prompt("Enter the first number: ");
let secondNumber = prompt("Enter the second number: ");
let operation = prompt("Enter the operation: ");

let randomNumber = Math.random();

if (randomNumber < 0.1) {
  if (operation === "+") {
    console.log(parseInt(firstNumber) - parseInt(secondNumber));
  } else if (operation === "-") {
    console.log(parseInt(firstNumber) / parseInt(secondNumber));
  } else if (operation === "*") {
    console.log(parseInt(firstNumber) + parseInt(secondNumber));
  } else if (operation === "/") {
    console.log(parseInt(firstNumber) ** parseInt(secondNumber));
  }
} else {
  if (operation === "+") {
    console.log(parseInt(firstNumber) + parseInt(secondNumber));
  } else if (operation === "-") {
    console.log(parseInt(firstNumber) - parseInt(secondNumber));
  } else if (operation === "*") {
    console.log(parseInt(firstNumber) * parseInt(secondNumber));
  } else if (operation === "/") {
    console.log(parseInt(firstNumber) / parseInt(secondNumber));
  }
}
