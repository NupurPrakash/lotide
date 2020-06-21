const eqArrays = require('./eqArrays');

const assertArraysEqual = function(val1,val2) {
  console.log(eqArrays(val1, val2));
};

module.exports = assertArraysEqual;
