const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
/*
assertEqual("hello","hello");
assertEqual(1,1);
assertEqual(2,5);
*/