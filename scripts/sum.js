function sum(a, b) {
  var carry = 0,
    result = new Array(),
    ret = new Array(),
    i = 0;

  a = a.split("");
  b = b.split("");

  while (a.length != b.length) {
    if (a.length > b.length) {
      b.unshift("0");
    } else {
      a.unshift("0");
    }
  }

  const size = a.length;
  for (i = size; i >= 0; i--) {
    if (carry == "0") {
      if (a[i] == "0" && b[i] == "0") {
        result[size - i] = "0";
        carry = "0";
      }
      if (a[i] == "1" && b[i] == "1") {
        result[size - i] = "0";
        carry = "1";
      }
      if ((a[i] == "1" && b[i] == "0") || (a[i] == "0" && b[i] == "1")) {
        result[size - i] = "1";
        carry = "0";
      }
    } else {
      if (a[i] == "0" && b[i] == "0") {
        result[size - i] = "1";
        carry = "0";
      }
      if (a[i] == "1" && b[i] == "1") {
        result[size - i] = "1";
        carry = "1";
      }
      if ((a[i] == "1" && b[i] == "0") || (a[i] == "0" && b[i] == "1")) {
        result[size - i] = "0";
        carry = "1";
      }
    }
  }

  if (carry == "1") {
    result[size + 1] = "1";
  }

  ret = result.reverse().join("");
  return ret;
}
