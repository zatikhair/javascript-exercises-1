function sumAll(str) {
  // A temporary string
  let temp = "0";

  // holds sum of all numbers
  // present in the string
  let sum = 0;

  // read each character in input string
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    // if current character is a digit
    if (!isNaN(String(ch) * 1)) temp += ch;
    // if current character is an alphabet
    else {
      // increment sum by number found earlier
      // (if any)
      sum += parseInt(temp);

      // reset temporary string to empty
      temp = "0";
    }
  }

  // atoi(temp.c_str()) takes care of trailing
  // numbers
  return sum + parseInt(temp);
}

console.log(sumAll(1, 10));
console.log(sumAll(10, 1));
console.log(sumAll(-10, 1));
console.log(sumAll(1, -10));
console.log(sumAll(1, "a"));
console.log(sumAll("a", 1));
console.log(sumAll("a", -1));

module.exports = sumAll;
