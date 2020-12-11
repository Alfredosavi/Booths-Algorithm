let normal = "black",
  contrast = "red",
  focus = "blue";

function steps() {
  switch (i) {
    case 0: {
      // START
      document.getElementById("start").style.color = contrast;

      i++;
      break;
    }

    case 1: {
      // A
      document.getElementById("start").style.color = normal;
      document.getElementById("A").style.color = contrast;
      document.getElementById("A").innerHTML = "A = " + A;

      i++;
      break;
    }

    case 2: {
      // Q
      document.getElementById("A").style.color = normal;
      document.getElementById("Q").style.color = contrast;
      document.getElementById("Q").innerHTML = "Q = " + Q;

      i++;
      break;
    }

    case 3: {
      // QMO
      document.getElementById("Q").style.color = normal;
      document.getElementById("QMO").style.color = contrast;
      document.getElementById("QMO").innerHTML = "Q<sub>-1</sub> = " + QMO;

      i++;
      break;
    }

    case 4: {
      // M
      document.getElementById("QMO").style.color = normal;
      document.getElementById("M").style.color = contrast;
      document.getElementById("M").innerHTML = "M = " + M;

      i++;
      break;
    }

    case 5: {
      // COUNT
      document.getElementById("M").style.color = normal;
      document.getElementById("count").style.color = contrast;
      document.getElementById("count").innerHTML = "Count = " + cycle;

      initializing();

      i++;
      break;
    }

    case 6: {
      // COMPARE
      document.getElementById("counterzero").style.color = normal;
      document.getElementById("countR").style.color = normal;

      document.getElementById("count").style.color = normal;
      document.getElementById("CQ").style.color = contrast;
      document.getElementById("CQMO").style.color = contrast;

      document.getElementById("CQ").innerHTML = "Q = " + Q[Q.length - 1];
      document.getElementById("CQMO").innerHTML = "Q<sub>-1</sub> = " + QMO;

      if (Q[Q.length - 1] === "0" && QMO === "1") {
        // A <- A + M
        i = 7;
      } else if (Q[Q.length - 1] === "1" && QMO === "0") {
        // A <- A - M
        i = 8;
      } else {
        // ARITHMETIC SHIFT
        shift = true;
        i = 9;
      }

      break;
    }

    case 7: {
      // SUM
      document.getElementById("CQ").style.color = normal;
      document.getElementById("CQMO").style.color = normal;

      document.getElementById("ASum").style.color = contrast;
      document.getElementById("sum").style.color = focus;

      A = sum(A, M);

      document.getElementById("ASum").innerHTML = "A = " + A;

      rowUp("A <- A + M", A, total - cycle + 1);

      i = 9;
      break;
    }

    case 8: {
      // SUB
      document.getElementById("CQ").style.color = normal;
      document.getElementById("CQMO").style.color = normal;

      document.getElementById("ASub").style.color = contrast;
      document.getElementById("sub").style.color = focus;

      const two_complement = twoComplement(M);
      A = sum(A, two_complement);

      document.getElementById("ASub").innerHTML = "A = " + A;

      rowUp("A <- A - M", A, total - cycle + 1);

      i = 9;
      break;
    }

    case 9: {
      // ARITHMETIC SHIFT
      document.getElementById("CQ").style.color = normal;
      document.getElementById("CQMO").style.color = normal;

      document.getElementById("ASub").style.color = normal;
      document.getElementById("sub").style.color = normal;

      document.getElementById("ASum").style.color = normal;
      document.getElementById("sum").style.color = normal;

      document.getElementById("Ashift").style.color = focus;
      document.getElementById("result").style.color = contrast;

      ({ A, Q, QMO } = arithmeticShift(A, Q, QMO));

      if (shift) {
        rowUp("none", A, total - cycle + 1);
        shift = false;
      }

      document.getElementById("result").innerHTML =
        " " + A + ", " + Q + ", " + QMO;

      rowDown();

      i++;
      break;
    }

    case 10: {
      // CYCLE
      document.getElementById("result").style.color = normal;
      document.getElementById("countR").style.color = contrast;

      // cycle = cycle - 1;
      document.getElementById("countR").innerHTML = "Count-- = " + --cycle;

      i++;
      break;
    }

    case 11: {
      // COUNTERZERO
      document.getElementById("countR").style.color = focus;
      document.getElementById("Ashift").style.color = normal;
      document.getElementById("counterzero").style.color = contrast;

      if (cycle !== 0) {
        i = 6;
      } else {
        i++;
      }

      break;
    }

    case 12: {
      // STOPS
      document.getElementById("stop").style.color = contrast;
      document.getElementById("countR").style.color = normal;
      document.getElementById("counterzero").style.color = normal;

      document.getElementById("send").disabled = false;
      document.getElementById("steps").disabled = true;

      break;
    }
  }
}
