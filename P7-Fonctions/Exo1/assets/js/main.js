const showResult = document.getElementById("showResult");
const formValid = document.getElementById("formValid");

function getResult(result) {
  let firstNumber = document.getElementById("formFirst").value;
  let secondNumber = document.getElementById("formSecond").value;
  result = (firstNumber * secondNumber);
  showResult.innerHTML = result;
}

formValid.onclick = getResult;