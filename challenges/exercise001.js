function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  const initial =
    firstName.substring(0, 1).toUpperCase() +
    "." +
    lastName.substring(0, 1).toUpperCase();
  return initial;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let grossPrice = originalPrice + (vatRate / 100) * originalPrice;
  grossPrice = Math.floor(Math.round(grossPrice * 100)) / 100;

  return grossPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let netPrice = originalPrice - (originalPrice * reduction) / 100;
  netPrice = Math.floor(Math.round(netPrice * 100)) / 100;
  return netPrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let middlePosition;
  let middleCharacter;
  if (str.length % 2) {
    middlePosition = (str.length - 1) / 2;
    middleCharacter = str.substr(middlePosition, 1);
  } else {
    middlePosition = str.length / 2;
    middleCharacter = str.substr(middlePosition - 1, 2);
  }
  return middleCharacter;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; --i) {
    reversedWord += word[i];
  }
  return reversedWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const reversedWords = words.map((word, i) => reverseWord(word));
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  return users.filter((user) => user.type === "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  if (scores === undefined) throw new Error("scores is required");
  const scoresSum = scores.reduce((total, score) => total + score, 0);
  let meanValue = scoresSum / scores.length;
  meanValue = Math.floor(Math.round(meanValue * 100)) / 100;
  return meanValue;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  divisableBy5 = !(n % 5);
  divisableBy3 = !(n % 3);

  if (divisableBy3 && divisableBy5) return "fizzbuzz";
  if (divisableBy3) return "fizz";
  if (divisableBy5) return "buzz";
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
