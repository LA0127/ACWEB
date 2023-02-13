const horasTrabajadasInput = document.querySelector("#horasTrabajadas");
const salarioHoraInput = document.querySelector("#salarioHora");
const calcularSalarioBtn = document.querySelector("#calcularSalario");
const resultado = document.querySelector("#resultado");
const body = document.querySelector("body");

calcularSalarioBtn.addEventListener("click", function() {
  const horasTrabajadas = parseFloat(horasTrabajadasInput.value);
  const salarioHora = parseFloat(salarioHoraInput.value);

  if (isNaN(horasTrabajadas) || isNaN(salarioHora)) {
    resultado.textContent = "Por favor ingrese números válidos.";
    return;
  }

  let salario = 0;
  let horasExtras = 0;

  if (horasTrabajadas > 40) {
    horasExtras = horasTrabajadas - 40;
    salario = 40 * salarioHora;
  } else {
    salario = horasTrabajadas * salarioHora;
  }

  if (horasExtras > 0) {
    if (horasExtras > 8) {
      salario += 8 * salarioHora * 2;
      salario += (horasExtras - 8) * salarioHora * 3;
    } else {
      salario += horasExtras * salarioHora * 2;
    }
  }

  resultado.textContent = `$${salario.toFixed(2)}`;
  body.classList.add("fondo-verde");
});
