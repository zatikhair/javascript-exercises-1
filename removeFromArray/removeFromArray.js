var removeFromArray = function (array, ...numbers) {
  return array.filter((num) => ![...numbers].includes(num));
};

module.exports = removeFromArray;
