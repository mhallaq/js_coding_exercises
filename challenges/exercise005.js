const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  nPosition = nums.indexOf(n);
  return nPosition != -1 && nPosition + 1 < nums.length
    ? nums[nPosition + 1]
    : null;
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  strArray = str.split("");
  onesZeros = { 0: 0, 1: 0 };
  for (let digit of strArray) {
    console.log(onesZeros[digit]);
    onesZeros[digit] = (onesZeros[digit] || 0) + 1;
  }
  return onesZeros;
};
const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  const stringN = n.toString(10);
  let reversedString = "";
  for (let x = stringN.length - 1; x >= 0; x--) {
    reversedString += stringN[x];
  }
  return parseInt(reversedString);
};

const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  const array = JSON.parse("[" + arrs + "]");
  return array.reduce((acc, curr) => acc + curr, 0);
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  let shiftedArr = arr;
  let firstItem = arr[0];
  let lastItem = arr[arr.length - 1];
  shiftedArr[0] = lastItem;
  shiftedArr[shiftedArr.length - 1] = firstItem;
  return shiftedArr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const valuesArr = String(Object.values(haystack));
  return valuesArr.toLowerCase().includes(searchTerm.toLowerCase());
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  const alphabitOnlyString = str.replace(/[^a-zA-Z ]/g, "");
  const lowerCaseStr = alphabitOnlyString.toLowerCase();
  const strArray = lowerCaseStr.split(" ");
  let wordsObj = {};
  for (word of strArray) {
    wordsObj[word] = (wordsObj[word] || 0) + 1;
  }
  return wordsObj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
