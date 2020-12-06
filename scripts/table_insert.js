function initializing() {
  var tbodyRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  var newRow = tbodyRef.insertRow();

  var newCell1 = newRow.insertCell();
  var newCell2 = newRow.insertCell();
  var newCell3 = newRow.insertCell();
  var newCell4 = newRow.insertCell();
  var newCell5 = newRow.insertCell();

  newCell1.appendChild(document.createTextNode(""));
  newCell2.appendChild(document.createTextNode(A));
  newCell3.appendChild(document.createTextNode(Q));
  newCell4.appendChild(document.createTextNode(QMO));
  newCell5.appendChild(document.createTextNode("Initial values"));
}

function rowUp(note) {
  var tbodyRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  var newRow = tbodyRef.insertRow();

  var newCell1 = newRow.insertCell();
  var newCell2 = newRow.insertCell();
  var newCell3 = newRow.insertCell();
  var newCell4 = newRow.insertCell();
  var newCell5 = newRow.insertCell();

  newCell1.appendChild(document.createTextNode());
  newCell2.appendChild(document.createTextNode("00000000"));
  newCell3.appendChild(document.createTextNode("0110"));
  newCell4.appendChild(document.createTextNode("0"));
  newCell5.appendChild(document.createTextNode("Initialized"));
}

function rowDown() {}
