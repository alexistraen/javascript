const number = document.getElementById("number");

let firstNumber = 100;
const secondNumber = 2;

while ((firstNumber / secondNumber) >= 1) {
    let result = firstNumber / secondNumber;
    firstNumber = result;

    number.innerHTML += "<p>" + result + "<p>";
  }