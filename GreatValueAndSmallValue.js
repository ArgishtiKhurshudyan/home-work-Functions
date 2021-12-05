// 9  value > 16  and value < 9;

// let arr = [10, 25, 16, -5, 30, 15, 24];

// let n = arr.filter(n => n > 16);

// console.log(n);

let newarr = [];
let small9 = [];
function filterr(n) {
  for (let i = 0; i <= n.length - 1; i++) {
    if (n[i] > 16) {
      newarr.push(n[i]);
    } else if (n[i] < 9) {
      small9.push(n[i]);
      console.log("Such value do not exist =", small9);
    }
  }
}

filterr([25, 30, 31]);
console.log(newarr);
