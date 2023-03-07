document.getElementById("miBoton").addEventListener("click", function() {
    // código para mostrar las opciones
  });
  document.getElementById("opciones").style.display = "block";
  document.getElementById("miBoton").addEventListener("click", function() {
    var opciones = document.getElementById("opciones");
    if (opciones.style.display === "none") {
      opciones.style.display = "block";
    } else {
      opciones.style.display = "none";
    }
  });
    