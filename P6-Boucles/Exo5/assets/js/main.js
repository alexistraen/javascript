const number = document.getElementById("number");

const firstNumber = 2;
let secondNumber = 2;

while ((firstNumber * secondNumber) <= 250) {
    let result = firstNumber * secondNumber;
    secondNumber = result;

    number.innerHTML += "<p>" + result + "<p>";
  }