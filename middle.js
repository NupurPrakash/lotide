const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middlePos;
  let middleVal = [];
  if (array.length === 1 || array.length === 2) {
    return middleVal;
  }
  if (array.length % 2 === 0) {
    middlePos = Math.floor(array.length / 2);
    middleVal[0] = array[middlePos - 1];
    middleVal[1] = array[middlePos];
  }
  else {
    middlePos = Math.floor((array.length - 1) / 2);
    middleVal[0] = array[middlePos];
  }
  return middleVal;
};

module.exports = middle;


/*
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));
console.log(middle(["a","b","c"]));
*/



