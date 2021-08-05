const sumAll = function (a, b, range = []) {
  if (a < 0 || b < 0) return "ERROR";
  if (isNaN(a) || isNaN(b)) return "ERROR";

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    range.push(i);
  }

  return range.reduce((a, b) => a + b);
};

console.log(sumAll(1, 10));
console.log(sumAll(10, 1));
console.log(sumAll(-10, 1));
console.log(sumAll(1, -10));
console.log(sumAll(1, "a"));
console.log(sumAll("a", 1));
console.log(sumAll("a", -1));

module.exports = sumAll;
