function sumAll(arr) {
  let fullArr = [];
  let sum = 0;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = arr[0]; i <= arr[1]; i++) {
    fullArr.push(i);
  }

  sum = fullArr.reduce(reducer);

  return sum;
}

console.log(sumAll(1, 10));
console.log(sumAll(10, 1));
console.log(sumAll(-10, 1));
console.log(sumAll(1, -10));
console.log(sumAll(1, "a"));
console.log(sumAll("a", 1));
console.log(sumAll("a", -1));

module.exports = sumAll;
