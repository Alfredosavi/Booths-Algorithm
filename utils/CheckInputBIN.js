function CheckInputBIN(input) {
  return input.split("").find((e) => e > "1" || e < "0");
}
