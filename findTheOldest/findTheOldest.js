const findTheOldest = characters.sort(function (a, b) {
  const lastPerson = a.death - a.birthdate;
  const nextPerson = b.death - b.birthdate;
  return lastPerson > nextPerson ? -1 : 1;
});

module.exports = findTheOldest;
