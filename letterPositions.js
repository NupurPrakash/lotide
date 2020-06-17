
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



const letterPositions = function(sentence) {
  let results = {};
  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]] = [];
  }
  for (let i = 0; i < sentence.length; i++) {
    results[sentence[i]].push(i);
  }
  return results;
};
 

assertArraysEqual(letterPositions('hello').e,[1]);
console.log(letterPositions('hello'));

// {
//   h: [0],
//   e: [1],
//   l: [2,3],
//   o: [4]
// }

