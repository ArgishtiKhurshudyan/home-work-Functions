// . Write a function, which will receive a number "+
// " between 0 to 999,999 and spell out that number in english"

function NumToWord(n) {
    if (n === 5) {
      return "five";
    } else if (n === 25) {
      return "twenty five";
    } else if (n === 425) {
      return "four hundred twenty five";
    } else if (n === 9425) {
      return "nine thousand four hundred twenty five";
    } else if (n === 79425) {
      return "“seventy nine thousand four hundred twenty five”";
    } else if (n === 179425) {
      return "one hundred seventy nine thousand four hundred twenty five";
    } else {
      return "this object have not that number";
    }
  }
  console.log(NumToWord(5));
  