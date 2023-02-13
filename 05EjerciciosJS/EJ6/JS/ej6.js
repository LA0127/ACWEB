function calcularEdad() {
    var fechaDeNacimiento = new Date(document.getElementById("fechaDeNacimiento").value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaDeNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaDeNacimiento.getMonth();
    var dia = hoy.getDate() - fechaDeNacimiento.getDate();
    if (mes < 0 || (mes === 0 && dia < 0)) {
      edad--;
    }
    if (dia === 0 && hoy.getDate() === fechaDeNacimiento.getDate() && hoy.getMonth() === fechaDeNacimiento.getMonth()) {
      document.getElementById("resultado").innerHTML = "Feliz Cumpleaños! Tu edad es: " + edad + " años.";
    } else {
      document.getElementById("resultado").innerHTML = "Tu edad es: " + edad + " años.";
    }
  }