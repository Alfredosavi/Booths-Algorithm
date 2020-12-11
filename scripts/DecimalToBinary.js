function decimalToBinary(decimal) {
  var binary_resp = new String();
  var binary_respTwoComp = new String();
  var isNegative = new Boolean(false);

  if (decimal < 0) {
    decimal = Math.abs(decimal);
    isNegative = true;
  }

  binary_resp = decimal.toString(2);
  binary_resp = "0" + binary_resp;

  if (isNegative === true) {
    binary_respTwoComp = twoComplement(
      binary_resp.slice(1, binary_resp.length)
    );
    binary_respTwoComp = "1" + binary_respTwoComp;

    return binary_respTwoComp;
  }

  return binary_resp;
}
