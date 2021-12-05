//sum diferens mul div

let sum = 0;
function Sum(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return arr;
}
Sum([1, 5, 6, 7]);
console.log(sum);

let mul = 1;
function Mul(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    mul *= arr[i];
  }
  return arr;
}
Mul([1, 5, 6, 7]);
console.log(mul);

let mul = 1;
function div(arr) {
    let Div = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    Div /= arr[i];
  }
  return Div;
}
console.log(div([2,2]));