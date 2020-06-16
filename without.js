
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

const without = function(items,itemsToRemove) {
  let output = [];
  for (let i = 0; i < items.length; i++) {
    let match = "false";
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (items[i] === itemsToRemove[j]) {
        match = true;
      }
    }
    if (match !== true) {
      output.push(items[i]);
    }
  
  }
  return output;

};
  
console.log(without([1, 2, 3], [1,2]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3], [1, 2, 3]));
console.log(without([1, 2, 3], [3, 2, 1]));
console.log(without(["1", "2", "3"], ["1", "2", "3"]));
console.log(without(["1", "2", "3"], ["1", "2", 3]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));

assertArraysEqual(words, ["hello", "world", "lighthouse"]);