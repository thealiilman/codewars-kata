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

//#4 Shortest Word
function findShort(str){
  const stringArr = str.split(" ");
  let wordLength = 0;
  
  for(let x = 0; x < stringArr.length; x++) {
    if(wordLength === 0) wordLength = stringArr[0].length;
    if(stringArr[x].length < wordLength) wordLength = stringArr[x].length;
  }
  return wordLength;
}
findShort("To sing my soul to sleep and take me back to bed");

//#5 The Highest Profit Wins!
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}
minMax([1, 5, 10, 15]);

//#6 String Repeat
function repeatStr (n, s) {
  let repeatedStr = "";
  for(let x = 0; x < n; x++) {
    repeatedStr += s;
  }
  return repeatedStr;
}
repeatStr(4, "Well...")

//#7 Double Char
function doubleChar(str) {
  return str.split("").map(letter => letter += letter).join("");
}
doubleChar("Oasis");

//#8 Sum of Two Lowest Positive Integers
function sumTwoSmallestNumbers(numbers) {  
  const copyArr = [...numbers];
  return copyArr.filter(num => num >= 0).sort((a, b) => a-b).slice(0, 2).reduce((a, b) => a+b);
};
sumTwoSmallestNumbers([-5, -1, 4, 1, 5, 10, 15]);
