const eqArrays = function(array1,array2) {
  if(array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;

};
const assertArraysEqual = function(val1,val2) {
  console.log(eqArrays(val1, val2));
};


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array,callback) {
  console.log('array:',array);
  console.log('callback',callback);
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};


const results1 = map(words,word => word[0]);
console.log(results1);

assertArraysEqual(map(["ground", "control", "to", "major", "tom"],word => word[0]), ["ground", "control", "to", "major", "tom"]);