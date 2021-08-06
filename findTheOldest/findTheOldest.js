const findTheOldest = people.reduce((prevVal, curVal) => {
  return prevVal.yearOfDeath - prevVal.yearOfBirth <
    curVal.yearOfDeath - curVal.yearOfBirth
    ? curVal
    : prevVal;
});
console.log(res.name, res.yearOfDeath - res.yearOfBirth);

module.exports = findTheOldest;
