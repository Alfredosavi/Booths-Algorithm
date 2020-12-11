function binaryToDecimal(bin) {
  var decimal_resp = 0;
  var isNegative = new Boolean(false);

  if (bin[0] == "1") {
    bin = twoComplement(bin);
    isNegative = true;
  }

  decimal_resp = parseInt(bin, 2);

  if (isNegative === true) {
    decimal_resp = decimal_resp * -1;
  }

  return decimal_resp;
}
