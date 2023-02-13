function calcular() {
    var sueldoBase = parseFloat(document.getElementById("sueldoBase").value);
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);
    var comision = (venta1 + venta2 + venta3) * 0.10;
    var total = sueldoBase + comision;
document.getElementById("resultado").innerHTML = "Comisión: $" + comision + "<br>" + "Total a recibir: $" + total;
      }     
     function limpiar() {
        document.getElementById("sueldoBase").value = "";
        document.getElementById("venta1").value = "";
        document.getElementById("venta2").value = "";
        document.getElementById("venta3").value = "";
        document.getElementById("resultado").innerHTML = "";
    }