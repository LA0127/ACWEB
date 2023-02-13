      function leerNumeros() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var num3 = parseInt(document.getElementById("num3").value);

        var mayor = num1;
        if (num2 > mayor) {
          mayor = num2;
        }
        if (num3 > mayor) {
          mayor = num3;
        }

        document.getElementById("resultado").innerHTML = "El número mayor es: " + mayor;
      }