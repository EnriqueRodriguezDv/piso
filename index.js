const button = document.getElementById("boton");
const inputEnergia = document.getElementById("energia");
const inputOtros = document.getElementById("otros");
const inputDiasJoaqui = document.getElementById("diasJoaqui");
const inputDiasFactura = document.getElementById("diasFactura");
const resultadoAlvaro = document.getElementById("alvaroPaga");
const resultadoEnrique = document.getElementById("enriquePaga");
const resultadoJoaqui = document.getElementById("joaquiPaga");

button.addEventListener("click", calculoMagico);

function calculoMagico() {
  const gastosEnergia = parseFloat(inputEnergia.value) || 0;
  const gastosOtros = parseFloat(inputOtros.value) || 0;
  const diasJoaqui = parseInt(inputDiasJoaqui.value) || 0;
  const diasFactura = parseInt(inputDiasFactura.value) || 0;

  const diasParaDividirEntreDos = diasFactura - diasJoaqui;
  const diasParaDividirEntreTres = diasFactura - diasParaDividirEntreDos;

  const resultadoOtros = gastosOtros / 3;
  const energiaDivididaPorDia = gastosEnergia / diasFactura;

  const resultadoParaTres =
    (energiaDivididaPorDia * diasParaDividirEntreTres) / 3;
  const resultadoParaDos =
    (energiaDivididaPorDia * diasParaDividirEntreDos) / 2;

  const joaqui = resultadoParaTres + resultadoOtros;
  const otros = resultadoParaDos + resultadoParaTres + resultadoOtros;

  resultadoAlvaro.innerText = 'Alvaro ' + parseFloat(otros).toFixed(2) + "€";
  resultadoEnrique.innerText = 'Enrique ' + parseFloat(otros).toFixed(2) + "€";
  resultadoJoaqui.innerText = 'Joaqui ' + parseFloat(joaqui).toFixed(2) + "€";
}
