function calculate() {
    var price = parseFloat(document.querySelector("#price").value);
    var discount = 0.15;
    var finalPrice = price - (price * discount);
    document.querySelector("#result").innerHTML = "$" + finalPrice.toFixed(2);
  }