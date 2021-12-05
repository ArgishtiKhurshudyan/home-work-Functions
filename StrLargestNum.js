// Write a function, which receives a string,
//finds possible largest numbers in the string and returns their sum.

let str = "0";
let sum = 0;
function findSum(n) {
  for (let i = 0; i < n.length; i++) {
    if (!isNaN(String(n[i]) * 1)) str += n[i];
    else {
      sum += parseInt(str);
      str = "0";
    }
  }

  return sum;
}

console.log(findSum("hhkl45ll45ll10l"));
