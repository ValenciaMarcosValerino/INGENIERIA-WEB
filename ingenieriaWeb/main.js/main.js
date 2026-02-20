// Botón Regresar: vuelve a la página anterior
document.getElementById("btnRegresar").addEventListener("click", function (e) {
  e.preventDefault();
  history.back();
});