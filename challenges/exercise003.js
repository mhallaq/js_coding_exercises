function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map((item) => Math.pow(item, 2));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  const resultString = words.reduce((acc, curr, index) => {
    return index === 0
      ? acc + curr
      : acc + (curr.charAt(0).toUpperCase() + curr.slice(1));
  }, "");
  return resultString;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  const totalSubjects = people.reduce((acc, curr) => {
    return acc + curr.subjects.length;
  }, 0);
  return totalSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  menuName = menu.filter(
    (item) => item.ingredients.includes(ingredient) === true
  );
  return menuName.length > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = [];
  arr1.forEach((number) => {
    arr2.forEach((number2) => {
      if ((number2 === number) & !result.includes(number)) result.push(number);
    });
  });
  return result.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
