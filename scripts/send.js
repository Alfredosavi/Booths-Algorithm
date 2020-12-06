let M,
  Q,
  A,
  QMO, // Q minus one
  cycle;

function send() {
  let multiplicant = document.getElementById("Multiplicant").value;
  let multiplier = document.getElementById("Multiplier").value;

  M = DecimalToBinary(parseInt(multiplicant));
  Q = DecimalToBinary(parseInt(multiplier));

  A = new String();
  count = 0;
  QMO = "0";

  while (A.length !== M.toString().length) {
    A = A + "0";
  }

  initializing();

  document.getElementById("send").disabled = true;
  document.getElementById("steps").disabled = false;
}
