
const eqArrays = function(array1,array2) {
  let match = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      match = false;
    }
  }
  return match;
};

const assertArraysEqual = function(val1,val2) {
  console.log(eqArrays(val1, val2));
};

const middle = function(array) {
  let middlePos;
  let middleVal = [];
  if (array.length === 1 || array.length === 2) {
    middleVal = array;
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
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));

assertArraysEqual(middle([1,2,3,4,5]), [1, 2, 3]);
assertArraysEqual(middle(["1", "2", "3"]), ["1", "2", "3"]);