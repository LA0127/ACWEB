function calcular() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var examen = parseFloat(document.getElementById("examen").value);
    var trabajo = parseFloat(document.getElementById("trabajo").value);
    
    var promedio = (nota1 + nota2 + nota3) / 3;
    var calificacionFinal = 0.55 * promedio + 0.30 * examen + 0.15 * trabajo;
    
    document.getElementById("resultado").innerHTML = "Su calificación final es: " + calificacionFinal.toFixed(2);
  }