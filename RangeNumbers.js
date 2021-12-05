// Range numbers

let newarr = [];
let newarr1 = [];
function range(start, end) {
  let len = end - start + 0;
  let a = new Array(len);
  for (let i = 0; i <= len; i++) {
    a[i] = start + i;
  }
  if (start === 19 && end === 42) {
    return a;
  } else return "such numbers are not exist";
}
console.log(range(19, 42));
