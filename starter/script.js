"use strict";

function logger() {
  console.log("My name is Sima");
}
//calling /runnig /invoking function
logger();
logger();
logger();
// function calling other function
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  // const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));
const appleJuice = fruitProcessor(2, 5);
console.log(appleJuice);
// console.log(fruitProcessor(2, 5));
const appleOrangeJuice = fruitProcessor(1, 1);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
  // return 2037 - birthYear;
}
const sen = calcAge1(1997);
console.log(sen);
console.log(calcAge1(1998));
// console.log(calcAge1(1997));

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const sen2 = calcAge2(1997);
console.log(sen2);
//console.log(calcAge2(1997));

// Arrow function
const calcAge3 = (birthYears) => 2037 - birthYears;
const sen3 = calcAge3(1997);
console.log(sen3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1997, "Sima"));
