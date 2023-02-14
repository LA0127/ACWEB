function calculate() {
    let salary = parseFloat(document.querySelector('#salary').value);
    let seniority = parseFloat(document.querySelector('#seniority').value);
    let percentage;
    if (seniority < 1) {
      percentage = 0.05;
    } else if (seniority >= 1 && seniority < 2) {
      percentage = 0.07;
    } else if (seniority >= 2 && seniority < 5) {
      percentage = 0.10;
    } else if (seniority >= 5 && seniority < 10) {
      percentage = 0.15;
    } else {
      percentage = 0.20;
    }
    let annualUtility = salary * percentage * 12;
    document.querySelector('#result').innerHTML = `La utilidad anual es de $${annualUtility.toFixed(2)}`;
  }