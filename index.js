//This is where my solutions live.

//#1 Return Vowel Count
function getCount(str) {
  let stringMatch = str.toLowerCase().match(/[aeiou]/gi);
  return stringMatch ? stringMatch.length : 0;
}
getCount("Morning Glory");
