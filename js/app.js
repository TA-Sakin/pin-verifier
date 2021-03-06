function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
let generateCount = 0;
function generatePin() {
  document.getElementById("input-pin").value = getPin();

  generateCount++;
  if (generateCount > 1) {
    document.getElementById("input-number").value = "";
  }
}
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const inputNumber = document.getElementById("input-number");
  if (isNaN(number)) {
    if (number == "C") {
      inputNumber.value = "";
    } else if (number == "<") {
      let inputString = inputNumber.value;
      inputString = inputString.slice(0, -1);
      inputNumber.value = inputString;
    }
  } else {
    inputNumber.value += number;
    //different method
    //   const inputValue = inputNumber.value;
    //   const currentValue = inputValue + number;
    //   inputNumber.value = currentValue;
  }
});
function verifyPin() {
  const pin = document.getElementById("input-pin").value;
  const typedPin = document.getElementById("input-number").value;
  const verifySuccess = document.getElementById("verify-success");
  const verifyFail = document.getElementById("verify-fail");
  const maxCount = document.getElementById("max-count");
  const tryText = document.getElementById("try-count");
  let tryCount = parseInt(tryText.innerText);
  tryCount--;
  if (pin == typedPin) {
    if (tryCount >= 0) {
      verifySuccess.style.display = "block";
      verifyFail.style.display = "none";
      maxCount.style.display = "none";
    } else {
      maxCount.style.display = "block";
      verifySuccess.style.display = "none";
      verifyFail.style.display = "none";
    }
  } else {
    if (tryCount >= 0) {
      tryText.innerText = tryCount;
      verifySuccess.style.display = "none";
      maxCount.style.display = "none";
      verifyFail.style.display = "block";
    } else {
      maxCount.style.display = "block";
      verifyFail.style.display = "none";
    }
  }
}
