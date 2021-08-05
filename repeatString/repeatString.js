function repeatString(n, str) {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += str;
  }
  return output;
}

console.log(repeatString(3, "hello"));

module.exports = repeatString;
