function arithmeticShift(A = "1001", Q = "0101", QMO = "0") {
  let i = 0,
    A_L = A.length - 1,
    Q_L = Q.length - 1;

  QMO = Q[Q_L];

  Q[3] = Q[2];
  Q[2] = Q[1];
  Q[1] = Q[0];

  return Q;

  for (i = A_L; i > 0; i--) {
    A[i] = A[i - 1];
  }

  console.log(Q);
  console.log(QMO);
  console.log(A);
}

// NOT WORK :(
