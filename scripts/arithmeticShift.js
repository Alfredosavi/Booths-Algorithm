function arithmeticShift(A, Q, QMO) {
  A = A.split("");
  Q = Q.split("");

  let i = 0,
    A_L = A.length - 1,
    Q_L = Q.length - 1;

  QMO = Q[Q_L];

  for (i = Q_L; i > 0; i--) {
    Q[i] = Q[i - 1];
  }

  Q[0] = A[A_L];

  for (i = A_L; i > 0; i--) {
    A[i] = A[i - 1];
  }

  A = A.join("");
  Q = Q.join("");

  console.log(A);
  console.log(Q);
  console.log(QMO);
}
