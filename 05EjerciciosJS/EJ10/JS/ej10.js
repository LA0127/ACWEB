function calcularUtilidad() {
    var antiguedad = parseFloat(document.getElementById("antiguedad").value);
    var salario = parseFloat(document.getElementById("salario").value);
    var utilidad;
    
    if (antiguedad < 1) {
      utilidad = salario * 0.05;
    } else if (antiguedad >= 1 && antiguedad < 2) {
      utilidad = salario * 0.07;
    } else if (antiguedad >= 2 && antiguedad < 5) {
      utilidad = salario * 0.10;
    } else if (antiguedad >= 5 && antiguedad < 10) {
      utilidad = salario * 0.15;
    } else {
      utilidad = salario * 0.20;
    }
    
    document.getElementById("resultado").innerHTML = "La utilidad es de $" + utilidad.toFixed(2);
  }