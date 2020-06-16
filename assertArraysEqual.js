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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);