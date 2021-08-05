function repeatString(string, times) {
  if (times < 0) return "";
  if (times === 1) return string;
  else return string + repeatStringNumTimes(string, times - 1);
}
console.log(repeatString("abc", 3));

module.exports = repeatString;
