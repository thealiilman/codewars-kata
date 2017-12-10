//This is where my solutions live.

//#1 Return Vowel Count
function getCount(str) {
  let stringMatch = str.toLowerCase().match(/[aeiou]/gi);
  return stringMatch ? stringMatch.length : 0;
}
getCount("Morning Glory");

//#2 Square Every Digit
function squareDigits(number) {
  numArr = number.toString().split("");
  return parseInt(numArr.map((num) => {
    stringToNum = parseInt(num);
    return stringToNum ** 2;
  }).join(""));
}
squareDigits(25);

//#3 Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(" ");
};

"Hello, i am ali".toJadenCase();
