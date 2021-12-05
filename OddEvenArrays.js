"use strict";

// OddEven arrays
let oddArray = [];
let evenArray = [];

function oddEven(array) {
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i])
    } else { array[i] % 2 !== 0 
      oddArray.push(array[i]);
    }
  }
  return array;
}

oddEven([45, 12, 3, 6, 17, 0]);
console.log(evenArray);
console.log(oddArray);












