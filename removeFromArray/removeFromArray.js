const removeFromArray = (array, itemToRemove) => {
  return array.filter((v) => {
    return !itemsToRemove.includes(v);
  });
};

removeFromArray([1, 2, 3, 4, 5], [1, 4]);

module.exports = removeFromArray;
