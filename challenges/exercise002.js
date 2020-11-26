function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city.toLowerCase() === "manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const busCapacity = 40;

  return Math.ceil(people / busCapacity);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter((animal) => animal === "sheep").length;
}

function hasMPostCode(person) {
  const isPostInManchester =
    person.address.postCode.substring(0, 1).toLowerCase() === "m" &&
    person.address.city.toLowerCase() === "manchester";
  return isPostInManchester;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode,
};
