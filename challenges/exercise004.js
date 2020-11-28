function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter((name) => name[0] === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  if (!words) throw new Error("words is required");
  const verb = "to ";
  return words.filter((word) => word.substr(0, 3) === verb);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter((num) => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  return users.reduce((acc, curr) => {
    return acc.concat(curr.data.city.displayName);
  }, []);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map((num) => {
    return parseFloat(Math.sqrt(num).toFixed(2));
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter((sentence, index) =>
    sentence.toLowerCase().includes(str.toLowerCase())
  );
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  return triangles.reduce((acc, curr) => acc.concat(Math.max(...curr)), []);
}
module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
