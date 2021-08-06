const nums = [1, 2, 3, 4, 5, 6];
const remove = [1, 2, 4, 6];

function removeFromArray(original, remove) {
  return original.filter((value) => !remove.includes(value));
}

console.log(removeFromArray(nums, remove));

module.exports = removeFromArray;
