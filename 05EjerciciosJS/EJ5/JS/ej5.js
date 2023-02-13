function calcularPorcentajes() {
    var numHombres = parseInt(document.getElementById("numHombres").value);
    var numMujeres = parseInt(document.getElementById("numMujeres").value);
    var numTotal = numHombres + numMujeres;
    var porcentajeHombres = (numHombres / numTotal) * 100;
    var porcentajeMujeres = (numMujeres / numTotal) * 100;

    document.getElementById("resultado").innerHTML = "Porcentaje de hombres: " + porcentajeHombres + "%<br>" + "Porcentaje de mujeres: " + porcentajeMujeres + "%";
  }