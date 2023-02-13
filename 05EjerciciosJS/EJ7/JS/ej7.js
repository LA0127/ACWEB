function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (num1 === num2) {
      result = num1 * num2;
    } else if (num1 > num2) {
      result = num1 - num2;
    } else {
      result = num1 + num2;
    }

    document.getElementById("result").innerHTML = "Resultado: " + result;
  }