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
  
const ab = {
  a : "1",
  b : "2",
};
const ba = {
  b : "2",
  a : "1"
};
console.log(eqObjects(ab,ba));

const abc = {
  a : "1",
  b : "2",
  c : "3"
};
console.log(eqObjects(ab, abc)); 
 



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd,cd2));
console.log(eqObjects(cd, dc));
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
assertEqual(eqObjects(cd,cd2), true);
assertEqual(eqObjects(ab,abc), "4");
assertEqual(eqObjects(dc, cd2),false);