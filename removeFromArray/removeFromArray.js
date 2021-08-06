const removeFromArray = [0, 1, 2, 3, 4];

[1, 4, 3].reverse().forEach((index) => {
  items.splice(index, 1);
});

module.exports = removeFromArray;
