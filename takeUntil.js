



const takeUntil = function(array, callback) {
  let arrayToHold = [];
  for (let item of array) {
    if (callback(item)) {
      console.log("1",item);
      break;
    }
    else {
      arrayToHold.push(item);
    }  
  }
  return arrayToHold;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

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

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],x => x < 0), [1, 2, 5,7,2]);