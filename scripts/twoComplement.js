function twoComplement(bin) {
  var carry = 0,
    bin_mirror = new Array(),
    bin_resp = new String();

  var len = bin.length;

  for (var i = 0; i < len; i++) {
    if (bin[i] == "0") {
      bin_mirror[i] = 1;
    } else {
      bin_mirror[i] = 0;
    }
  }

  if (bin_mirror[len] == 0) {
    bin_resp = bin_resp + 1;
  } else {
    bin_resp = bin_resp + 0;
    carry = 1;
  }

  for (var j = len - 1; j >= 0; j--) {
    if (bin_mirror[j] == 0 && carry == 0) {
      bin_resp = bin_resp + 0;
      carry = 0;
    }

    if (bin_mirror[j] == 0 && carry == 1) {
      bin_resp = bin_resp + 1;
      carry = 0;
    }

    if (bin_mirror[j] == 1 && carry == 0) {
      bin_resp = bin_resp + 1;
      carry = 0;
    }

    if (bin_mirror[j] == 1 && carry == 1) {
      bin_resp = bin_resp + 0;
      carry = 1;
    }
  }

  return bin_resp.split("").reverse().join("").slice(0, -1);
}
