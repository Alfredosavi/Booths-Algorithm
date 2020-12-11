let M,
  Q,
  A,
  QMO, // Q minus one
  cycle, // number of interactions
  i = 0, // function Steps() switch
  total = 0, // fixed number of interactions
  shift = false;
function send() {
  if (i !== 0) {
    tableReset();
  }

  let multiplicant = document.getElementById("Multiplicant").value;
  let multiplier = document.getElementById("Multiplier").value;

  M = DecimalToBinary(parseInt(multiplicant));
  Q = DecimalToBinary(parseInt(multiplier));

  cycle = Q.length;
  total = cycle;
  QMO = "0";

  A = new String();
  while (A.length !== M.toString().length) {
    A = A + "0";
  }

  document.getElementById(
    "info"
  ).innerHTML += `(${multiplicant})<sub>10</sub> = (${M})<sub>2</sub>
  <br/>(${multiplier})<sub>10</sub> = (${Q})<sub>2</sub>
  <br/>M = (${M})<sub>2</sub>`;
  document.getElementById("info").style.display = "block";

  document.getElementById("send").disabled = true;
  document.getElementById("steps").disabled = false;
}
