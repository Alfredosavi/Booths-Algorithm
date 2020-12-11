function initializing() {
  var tbodyRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  var newRow = tbodyRef.insertRow();

  newRow.setAttribute("class", "table-secondary");

  var newCell1 = newRow.insertCell();
  var newCell2 = newRow.insertCell();
  var newCell3 = newRow.insertCell();
  var newCell4 = newRow.insertCell();
  var newCell5 = newRow.insertCell();

  newCell4.style.color = "#F00";
  SpanBitQ(newCell3);

  newCell1.appendChild(document.createTextNode(""));
  newCell2.appendChild(document.createTextNode(A));
  // newCell3.appendChild(document.createTextNode(Q));
  newCell4.appendChild(document.createTextNode(QMO));
  newCell5.appendChild(document.createTextNode("Initial values"));
}

function rowUp(operation, A, number_cycle) {
  var tbodyRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  var newRow = tbodyRef.insertRow();

  if ((total - cycle + 1) % 2 === 0) {
    newRow.setAttribute("class", "table-secondary");
  }

  var newCell1 = newRow.insertCell();
  var newCell2 = newRow.insertCell();
  var newCell3 = newRow.insertCell();
  var newCell4 = newRow.insertCell();
  var newCell5 = newRow.insertCell();

  newCell1.appendChild(document.createTextNode(operation));
  newCell2.appendChild(document.createTextNode(A));
  newCell3.appendChild(document.createTextNode(""));
  newCell4.appendChild(document.createTextNode(""));
  newCell5.appendChild(document.createTextNode(`${number_cycle}° Cycle`));
}

function rowDown() {
  var tbodyRef = document
    .getElementById("table")
    .getElementsByTagName("tbody")[0];

  var newRow = tbodyRef.insertRow();

  if ((total - cycle + 1) % 2 === 0) {
    newRow.setAttribute("class", "table-secondary");
  }

  var newCell1 = newRow.insertCell();
  var newCell2 = newRow.insertCell();
  var newCell3 = newRow.insertCell();
  var newCell4 = newRow.insertCell();
  var newCell5 = newRow.insertCell();

  newCell4.style.color = "#F00";
  SpanBitQ(newCell3);

  newCell1.appendChild(document.createTextNode("Arithmetic Shift -->"));
  newCell2.appendChild(document.createTextNode(A));
  // newCell3.appendChild(document.createTextNode(Q));
  newCell4.appendChild(document.createTextNode(QMO));
  newCell5.appendChild(document.createTextNode(""));
}

function SpanBitQ(newCell3) {
  let teste = Q.split("");

  teste[teste.length - 1] = `<span>${teste[teste.length - 1]}</span>`;
  teste = teste.join("");

  newCell3.innerHTML = teste;
}
