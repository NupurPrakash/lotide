const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
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
const eqObjects = function(object1,object2) {
  let listOfKeys1 = Object.keys(object1);
  let listOfKeys2 = Object.keys(object2); 
  if(listOfKeys1.length !== listOfKeys2.length) { 
    return false ;
  }

    for (const oneKey of listOfKeys1) {
      if((Array.isArray(object1[oneKey])) && (Array.isArray(object2[oneKey]))){
        return (eqArrays(object1[oneKey],object2[oneKey]))
      }
      else if(object1[oneKey] !== object2[oneKey]) {
        return false;
      }
    }
     return true;
};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  console.log(eqObjects(actual, expected));

};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
const abc = { a: "1", b: "2", c: "3" };
  console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
