function tableReset() {
  document.getElementById("info").innerHTML = "";
  document.getElementById("info").style.display = "none";

  table = document.getElementById("tbody");
  table.innerHTML = "";

  document.getElementById("A").innerHTML = "";
  document.getElementById("Q").innerHTML = "";
  document.getElementById("QMO").innerHTML = "";
  document.getElementById("M").innerHTML = "";
  document.getElementById("count").innerHTML = "";

  document.getElementById("CQ").innerHTML = "";
  document.getElementById("CQMO").innerHTML = "";

  document.getElementById("ASum").innerHTML = "";
  document.getElementById("ASub").innerHTML = "";

  document.getElementById("result").innerHTML = "";

  document.getElementById("countR").innerHTML = "";

  document.getElementById("stop").style.color = normal;

  i = 0;
}
